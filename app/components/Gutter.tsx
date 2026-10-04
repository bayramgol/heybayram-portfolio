const LINES = 400;

/** Dekoratif satır numarası sütunu (editör hissi). Ekran okuyuculardan gizlidir. */
export default function Gutter() {
  return (
    <div className="gutter" aria-hidden="true">
      {Array.from({ length: LINES }, (_, index) => (
        <span key={index}>{index + 1}</span>
      ))}
    </div>
  );
}
