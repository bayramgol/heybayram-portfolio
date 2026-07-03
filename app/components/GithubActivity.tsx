"use client";

import { useEffect, useMemo, useState } from "react";
import { useLang } from "../context/LangContext";

const githubUser = "bayramgol";

type GitHubUser = {
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
};

type GitHubRepo = {
  fork: boolean;
  language: string | null;
  pushed_at: string | null;
};

type GitHubState = {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  isLoading: boolean;
  hasError: boolean;
};

function formatDate(value: string | null, locale: string) {
  if (!value) return "-";

  try {
    return new Intl.DateTimeFormat(locale, {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(value));
  } catch {
    return "-";
  }
}

export default function GithubActivity() {
  const { t, lang } = useLang();
  const locale = lang === "tr" ? "tr-TR" : "en-US";
  const [state, setState] = useState<GitHubState>({
    user: null,
    repos: [],
    isLoading: true,
    hasError: false,
  });

  useEffect(() => {
    const controller = new AbortController();

    async function loadGithub() {
      try {
        setState((current) => ({ ...current, isLoading: true, hasError: false }));

        const [userResponse, repoResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${githubUser}`, {
            signal: controller.signal,
            headers: { Accept: "application/vnd.github+json" },
          }),
          fetch(`https://api.github.com/users/${githubUser}/repos?per_page=100&sort=updated`, {
            signal: controller.signal,
            headers: { Accept: "application/vnd.github+json" },
          }),
        ]);

        if (!userResponse.ok || !repoResponse.ok) {
          throw new Error("GitHub API request failed");
        }

        const user = (await userResponse.json()) as GitHubUser;
        const repos = (await repoResponse.json()) as GitHubRepo[];

        setState({
          user,
          repos: repos.filter((repo) => !repo.fork),
          isLoading: false,
          hasError: false,
        });
      } catch (error) {
        if (controller.signal.aborted) return;
        setState({ user: null, repos: [], isLoading: false, hasError: true });
      }
    }

    void loadGithub();

    return () => controller.abort();
  }, []);

  const languages = useMemo(() => {
    const counts = state.repos.reduce<Record<string, number>>((acc, repo) => {
      if (!repo.language) return acc;
      acc[repo.language] = (acc[repo.language] ?? 0) + 1;
      return acc;
    }, {});

    const total = (Object.values(counts) as number[]).reduce((sum, count) => sum + count, 0);

    return (Object.entries(counts) as [string, number][])
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count]) => ({
        name,
        count,
        percent: total > 0 ? Math.round((count / total) * 100) : 0,
      }));
  }, [state.repos]);

  const lastUpdate = useMemo(() => {
    const last = state.repos
      .map((repo) => repo.pushed_at)
      .filter(Boolean)
      .sort((a, b) => new Date(b as string).getTime() - new Date(a as string).getTime())[0];

    return formatDate(last ?? null, locale);
  }, [state.repos, locale]);

  const topLanguage = languages[0]?.name ?? "-";
  const profileUrl = state.user?.html_url ?? `https://github.com/${githubUser}`;

  return (
    <section className="section github-section" id="github">
      <div className="container">
        <div className="eyebrow">{t.github.eyebrow}</div>
        <div className="section-head-row">
          <h2 className="section-title">{t.github.title}</h2>
          <p className="section-subtitle">{t.github.subtitle}</p>
        </div>

        <div className="github-panel">
          <div className="github-panel-top">
            <div>
              <span className="github-kicker">github.com/{githubUser}</span>
              <h3>{state.hasError ? t.github.errorTitle : "activity.json"}</h3>
            </div>
            <a href={profileUrl} target="_blank" rel="noopener noreferrer" className="github-open-link">
              {t.github.openProfile} ↗
            </a>
          </div>

          {state.isLoading ? (
            <div className="github-loading">{t.github.loading}</div>
          ) : state.hasError ? (
            <div className="github-error">
              <p>{t.github.errorText}</p>
            </div>
          ) : (
            <>
              <div className="github-stat-grid">
                <div className="github-stat-card">
                  <span>{t.github.publicRepos}</span>
                  <strong>{state.user?.public_repos ?? "-"}</strong>
                </div>
                <div className="github-stat-card">
                  <span>{t.github.followers}</span>
                  <strong>{state.user?.followers ?? "-"}</strong>
                </div>
                <div className="github-stat-card">
                  <span>{t.github.following}</span>
                  <strong>{state.user?.following ?? "-"}</strong>
                </div>
                <div className="github-stat-card">
                  <span>{t.github.topLanguage}</span>
                  <strong>{topLanguage}</strong>
                </div>
                <div className="github-stat-card wide">
                  <span>{t.github.lastUpdate}</span>
                  <strong>{lastUpdate}</strong>
                </div>
              </div>

              <div className="language-panel">
                <div className="language-panel-title">{t.github.languageUse}</div>
                {languages.length === 0 ? (
                  <p className="github-muted">{t.github.noLanguage}</p>
                ) : (
                  languages.map((language) => (
                    <div className="language-row" key={language.name}>
                      <div className="language-row-head">
                        <span>{language.name}</span>
                        <strong>{language.percent}%</strong>
                      </div>
                      <div className="language-track">
                        <span style={{ width: `${language.percent}%` }} />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </>
          )}

          <div className="github-source">{t.github.source}</div>
        </div>
      </div>
    </section>
  );
}
