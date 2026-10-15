const metricPattern = /(\$?\d[\d,]*(?:\.\d+)?(?:%|K|M|\+)?)/g;

export function HighlightMetrics({ text }) {
  return <>{text.split(metricPattern).map((part, index) => index % 2 ? <span className="metric-highlight" key={index}>{part}</span> : part)}</>;
}
