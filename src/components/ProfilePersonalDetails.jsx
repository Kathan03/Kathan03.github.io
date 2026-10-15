import { ArrowUpRightIcon } from '@phosphor-icons/react';

export const aboutCopy = [
  'I come from a software development and AI/ML background. My work has focused on building AI-powered solutions across HR, customer support, sales, and computational biology. I’m particularly interested in agentic AI and practical ways to use new technology to improve people’s lives.',
  'I’m an extremely positive person, I love my work, and I’m full of gratitude for the people and experiences that help me grow.',
  'Outside work, I enjoy evening runs, time with family, video games with friends, exploring new AI technology, and unwinding with sitcoms and anime.',
];

const credentialLogos = {
  agentforce: [{ src: '/assets/logos/salesforce.svg', issuer: 'Salesforce' }],
  aws: [{ src: '/assets/logos/aws.svg', issuer: 'Amazon Web Services' }],
  genai: [
    { src: '/assets/logos/deeplearning-ai.webp', issuer: 'DeepLearning.AI' },
    { src: '/assets/logos/aws.svg', issuer: 'Amazon Web Services' },
  ],
  ml: [{ src: '/assets/logos/deeplearning-ai.webp', issuer: 'DeepLearning.AI' }],
};

export function AboutDetails({ name = 'Kathan Joshi', paragraphs = aboutCopy }) {
  return <div className="profile-about-layout">
    <figure className="profile-about-portrait">
      <div className="profile-liquid-frame">
        <div className="profile-liquid-mask">
          <img src="/assets/portrait.png" alt={name} loading="lazy" decoding="async" width="1122" height="1402" />
        </div>
      </div>
      <figcaption>A builder. A learner. A grateful human.</figcaption>
    </figure>
    <div className="profile-about-copy">
      {paragraphs.filter(Boolean).map((paragraph, index) => <p key={index} className={index === 1 ? 'profile-about-outlook' : undefined}>{paragraph}</p>)}
    </div>
  </div>;
}

export function CredentialList({ items }) {
  return <div className="profile-certification-list profile-certification-list-illustrated">
    {items.map(item => <article key={item.id}>
      <div className={`profile-certification-issuer-logos${(credentialLogos[item.id]?.length ?? 0) > 1 ? ' has-multiple' : ''}`} aria-hidden="true">
        {(credentialLogos[item.id] ?? []).map(logo => <img src={logo.src} key={logo.src} alt="" loading="lazy" decoding="async" width="80" height="80" />)}
      </div>
      <div className="profile-certification-copy">
        <h3><a href={item.url} target="_blank" rel="noreferrer">{item.name}<ArrowUpRightIcon size={16} aria-hidden="true" /></a></h3>
        <p>{item.issuer}</p>
        <p className="profile-certification-date">{item.date}</p>
      </div>
    </article>)}
  </div>;
}
