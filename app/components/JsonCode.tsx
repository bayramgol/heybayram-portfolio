export type JsonValue = string | string[];
export type JsonEntry = [key: string, value: JsonValue];

const Q = '"';

function Value({ value }: { value: JsonValue }) {
  if (typeof value === "string") {
    return <span className="c-str">{Q}{value}{Q}</span>;
  }

  return (
    <>
      <span className="c-punc">[</span>
      {value.map((item, index) => (
        <span key={item}>
          <span className="c-str">{Q}{item}{Q}</span>
          {index < value.length - 1 ? <span className="c-punc">, </span> : null}
        </span>
      ))}
      <span className="c-punc">]</span>
    </>
  );
}

/** Basit, sözdizimi renklendirmeli JSON/nesne gösterimi. Girinti `<pre>` ile korunur. */
export default function JsonCode({
  entries,
  prefix = "",
  suffix = "",
}: {
  entries: JsonEntry[];
  prefix?: string;
  suffix?: string;
}) {
  return (
    <code>
      {prefix ? <span className="c-key">{prefix}</span> : null}
      <span className="c-punc">{"{"}</span>
      {"\n"}
      {entries.map(([key, value], index) => (
        <span key={key}>
          {"  "}
          <span className="c-key">{Q}{key}{Q}</span>
          <span className="c-punc">: </span>
          <Value value={value} />
          {index < entries.length - 1 ? <span className="c-punc">,</span> : null}
          {"\n"}
        </span>
      ))}
      <span className="c-punc">{"}"}</span>
      {suffix}
    </code>
  );
}
