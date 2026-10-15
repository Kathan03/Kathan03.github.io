import { ArrowUpRightIcon, MinusIcon, PlusIcon } from '@phosphor-icons/react';
import { recommendation } from '../recommendation.js';
import { SectionBanner } from './SectionBanner.jsx';

export function Recommendation() {
  return <section id="recommendation" className="profile-section page-width" aria-labelledby="recommendation-heading">
    <SectionBanner id="recommendation-heading" title="Working together" image="/assets/art/recommendation-banner.webp" alt="An ink drawing of two hands clasped in a handshake on rose paper" />
    <figure className="recommendation-card">
      <figcaption className="recommendation-author">
        <p className="recommendation-eyebrow">A LinkedIn recommendation</p>
        <h3>{recommendation.author}</h3>
        <p className="recommendation-current-role">{recommendation.currentRole}</p>
        <p className="recommendation-former-role">{recommendation.formerRole}</p>
        <p className="recommendation-relationship">{recommendation.relationship}</p>
        <time dateTime={recommendation.dateTime}>{recommendation.date}</time>
        <a href={recommendation.profileUrl} target="_blank" rel="noreferrer" className="text-link" aria-label="View Chris Getsfred’s LinkedIn profile">View LinkedIn profile<ArrowUpRightIcon size={16} aria-hidden="true" /></a>
      </figcaption>
      <blockquote className="recommendation-quote">
        {recommendation.paragraphs.slice(0, 2).map((paragraph, index) => <p key={paragraph} className={index === 0 ? 'recommendation-opening' : undefined}>{paragraph}</p>)}
        <details className="recommendation-more">
          <summary><span className="recommendation-read-closed">Read full recommendation</span><span className="recommendation-read-open">Show less</span><span className="recommendation-indicator" aria-hidden="true"><PlusIcon size={18} /><MinusIcon size={18} /></span></summary>
          <div>{recommendation.paragraphs.slice(2).map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
        </details>
      </blockquote>
    </figure>
  </section>;
}
