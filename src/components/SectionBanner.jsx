export function SectionBanner({ id, title, image, alt, className = '' }) {
  return <header className={`section-banner ${className}`}><h2 id={id} className="section-heading">{title}</h2><img src={image} alt={alt} loading="lazy" decoding="async" width="2172" height="724" /></header>;
}
