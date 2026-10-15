export const sourceMetadata = { sha256: 'e613f118ceda667cc0c9f9a8ad6e668884f9df1a1121c543be1bcdb0b3bc86ea', updated: '2026-10-12', dateReviewed: '2026-10-12' };

export const profile = {
  name: 'Kathan Joshi',
  headline: 'AI systems, from discovery to deployment.',
  intro: 'I work with business teams to turn operational problems into useful AI applications.',
  currentRole: 'Agentic AI Business Specialist', currentCompany: 'ORBCOMM', location: 'Herndon, Virginia',
  email: 'kathanjoshi03@gmail.com', linkedin: 'https://www.linkedin.com/in/kjoshi03', github: 'https://github.com/Kathan03',
  scholar: 'https://scholar.google.com/citations?user=RzpL1pUAAAAJ&hl=en',
  about: ["I come from a software development and AI/ML background. My work has focused on building AI-powered solutions across HR, customer support, sales, and computational biology. I’m particularly interested in agentic AI and practical ways to use new technology to improve people’s lives.", "I’m an extremely positive person, I love my work, and I’m full of gratitude for the people and experiences that help me grow.", "Outside work, I enjoy evening runs, time with family, video games with friends, exploring new AI technology, and unwinding with sitcoms and anime."],
  interests: ['Evening runs', 'Family', 'Video games with friends', 'AI technology', 'Sitcoms', 'Anime'],
};

export const caseStudies = [
  {
    id: 'casemate', name: 'CaseMate', eyebrow: 'Production AI / ORBCOMM', status: 'In production', period: null,
    summary: 'A multi-agent support-resolution system serving approximately 100 daily Customer Support users.',
    problem: 'Translate Customer Support workflows and operational pain points into a production system that helps resolve support cases.',
    ownership: 'Discovery, architecture, implementation, rollout, adoption, and production support.',
    implementation: [
      'Architected a LangGraph multi-agent system using ReAct and self-reflection for support-case reasoning, tool use, and iterative response review.',
      'Built with Python, FastAPI, React, TypeScript, Salesforce Service Cloud, and Azure AI Foundry.',
      'Established CI/CD and cloud deployment with AWS, Docker, and Terraform; used Datadog for production monitoring. Provide ad hoc debugging and deployment-health monitoring.',
    ],
    outcomes: [
      { value: '~100', label: 'daily support users' }, { value: '55%', label: 'lower MTTR', detail: 'Mean time to resolution' },
      { value: '~6,000', label: 'of 7,000 monthly cases resolved' }, { value: '64%', label: 'fewer case reopens' },
      { value: '52%', label: 'fewer escalations' }, { value: '~$200K/year', label: 'quoted external implementation cost avoided' },
    ],
    technologies: ['LangGraph', 'Python', 'FastAPI', 'React', 'TypeScript', 'Salesforce', 'Azure AI Foundry', 'AWS'],
    repositoryUrl: null, illustration: '/assets/cases/casemate.png',
    illustrationAlt: 'Conceptual CaseMate workflow: support case, tools, and relevant context feed a LangGraph ReAct agent with tool use and self-reflection, producing a support resolution.',
    sourceNote: 'Production work at ORBCOMM. Metrics and scope reported in my master résumé. Illustration is a conceptual architecture overview.',
  },
  {
    id: 'pulse', name: 'Pulse', eyebrow: 'Agentic IDE / Industrial workflows', status: 'Project', period: 'Jan 2026 - Present',
    summary: 'An agentic IDE for PLCs, combining specialist agents, streamed output, and human approval controls.',
    problem: 'Coordinate industrial-copilot agents and deliver their output in an interactive IDE for IEC 61131-3 workflows.',
    ownership: 'Multi-agent architecture, asynchronous backend, streamed interface, and human approval controls.',
    implementation: [
      'Built a hub-and-spoke architecture with LangGraph, CrewAI, and AutoGen, coordinating industrial-copilot subagents through structured tool calls.',
      'Applied ReAct and self-reflection patterns within the multi-agent workflows.',
      'Developed a FastAPI and WebSocket backend that streams output to an Electron and React interface; added human approval controls for industrial IEC 61131-3 workflows.',
    ],
    outcomes: [{ value: '~40%', label: 'higher code-generation throughput' }, { value: '~25%', label: 'lower time to first token' }],
    technologies: ['LangGraph', 'CrewAI', 'AutoGen', 'FastAPI', 'WebSockets', 'Electron', 'React'],
    repositoryUrl: 'https://github.com/Kathan03/Pulse-Agentic_IDE', illustration: '/assets/cases/pulse.png',
    illustrationAlt: 'Conceptual Pulse workflow: an industrial task is routed to specialist agents; streamed output reaches an IDE with human approval controls.',
    sourceNote: 'Reported improvements are from my master résumé. Illustration summarizes the workflow.',
  },
  {
    id: 'rightstaff', name: 'RightStaff', eyebrow: 'Candidate ranking / Retrieval systems', status: 'Project', period: 'Nov 2025 - Dec 2025',
    summary: 'Explainable candidate ranking and a multi-agent RAG assistant for skill extraction, summaries, and contextual Q&A.',
    problem: 'Make candidate screening more efficient with semantic retrieval, skill filters, and explainable ranking.',
    ownership: 'Candidate-ranking engine, seven-stage asynchronous pipeline, and LangGraph multi-agent RAG assistant.',
    implementation: [
      'Combined dual-embedding semantic search, ontology-based skill filters, and explainable score blending in a seven-stage asynchronous pipeline.',
      'Built a LangGraph multi-agent RAG assistant for named-entity skill extraction, candidate summaries, and contextual Q&A.',
      'Applied retrieval validation and safety guardrails with FastAPI, Qdrant, Redis, and Docker.',
    ],
    outcomes: [{ value: '<3s', label: 'p95 latency for 1,000+ profiles' }, { value: '70%', label: 'less manual screening effort' }, { value: '80%', label: 'recruiter satisfaction' }],
    technologies: ['FastAPI', 'LangGraph', 'Qdrant', 'Redis', 'Docker'],
    repositoryUrl: 'https://github.com/Kathan03/RightStaff-AI-Candidate-Ranking-Platform', illustration: '/assets/cases/rightstaff.png',
    illustrationAlt: 'Conceptual RightStaff workflow: candidate profiles pass through semantic retrieval, skill filters, and explainable score blending to produce ranked candidates.',
    sourceNote: 'Reported results are from my master résumé. Illustration summarizes the ranking workflow.',
  },
];

export const projects = [
  { id: 'pulse', name: 'Pulse: Agentic IDE for PLCs', description: 'Hub-and-spoke multi-agent workflows with ReAct, self-reflection, streamed output, and human approval controls.', image: '/assets/art/pulse.png', repositoryUrl: 'https://github.com/Kathan03/Pulse-Agentic_IDE' },
  { id: 'resumesense', name: 'ResumeSense: Multi-Agent ATS', description: 'A five-agent NLP workflow for resume parsing, semantic matching, summaries, and interview questions, with a guarded RAG assistant.', image: '/assets/art/resumesense.png', repositoryUrl: 'https://github.com/Kathan03/ResumeSense-Multi-AI-Agentic-Resume-Tracking' },
  { id: 'churn', name: 'Customer Churn Prediction', description: 'Five model comparisons, SHAP explanations, and a Power BI dashboard for exploring churn drivers and retention opportunities.', image: '/assets/art/churn.png', repositoryUrl: 'https://github.com/Kathan03/Churn-Prediction-Analysis' },
  { id: 'katnet', name: 'KATNet', description: 'A cross-attention 3D CNN in PyTorch for protein-ligand binding-affinity prediction on a PDBbind v2016 subset.', image: '/assets/art/katnet.png', repositoryUrl: 'https://github.com/Kathan03/KATNet' },
  { id: 'forex', name: 'ML-Enhanced Forex Signal Engine', description: 'A configuration-driven experiment workflow with 16 price-based features, four model families, and automated backtesting.', image: '/assets/art/forex.png', repositoryUrl: 'https://github.com/Kathan03/ML-Enhanced-Forex-Signal-Engine' },
  { id: 'fake-news', name: 'Fake News Detector', description: 'TensorFlow LSTM classification with optimized NLTK preprocessing, achieving 99.69% test accuracy.', image: '/assets/art/fake-news.png', repositoryUrl: 'https://github.com/Kathan03/Fake_News_Detection_using_LSTM' },
  { id: 'bert', name: 'BERT Sentiment Analyzer', description: 'Multiclass sentiment analysis on the SMILE Twitter dataset, with back translation and resampling for underrepresented classes.', image: '/assets/art/bert.png', repositoryUrl: 'https://github.com/Kathan03/Sentimental_Analysis_Using_BERT' },
  { id: 'chest', name: 'Chest Doctor', description: 'ResNet50 chest X-ray classification across four classes, with cross-validation and confusion-matrix evaluation.', image: '/assets/art/chest.png', repositoryUrl: 'https://github.com/Kathan03/Chest_Disease_Detection_Using_ResNet50' },
];

export const experience = [
  { id: 'orbcomm', company: 'ORBCOMM', title: 'Agentic AI Business Specialist', period: 'Feb 2026 - Present', location: 'Sterling, Virginia',
    summary: 'Embedded with business teams to discover, build, deploy, and support production AI workflows.',
    bullets: [
      'Owned CaseMate end to end, serving approximately 100 daily support users and resolving approximately 6,000 of 7,000 monthly cases; reduced MTTR by 55%, reopens by 64%, and escalations by 52%.',
      'Designed and delivered an AI architecture and governance framework for an 800-employee organization. Twelve internal agents have been built on the framework to date.',
      'Led a proactive sales-outreach agent adopted by approximately 20 users. It surfaced an approximately $50K opportunity converted by Sales, toward projected incremental revenue of $500K.',
      'Built Orbie with Microsoft Copilot Studio and Power Automate, serving approximately 50 employees daily with routine IT and HR questions.',
      'Built a custom MCP server and integrated existing MCP servers; used Codex, Claude Code, and GitHub CLI to accelerate development, testing, and delivery.',
      'Delivered discovery interviews, workshops, prototypes, solution-design sessions, user manuals, demonstrations, onboarding, and adoption programs.',
    ] },
  { id: 'winwin', company: 'WinWin Labs', title: 'AI Engineer', period: 'Aug 2025 - Feb 2026', location: 'Remote, USA',
    summary: 'AI engineering and AI product management for an agentic recruiting platform, from discovery to evaluation and release.',
    bullets: [
      'Translated stakeholder and user needs into PRDs, user stories, acceptance criteria, KPIs, OKRs, and sprint priorities. Achieved approximately 95% on-time delivery and reduced requirement churn by 20%.',
      'Built RAG workflows with LangChain, LangGraph, LlamaIndex, semantic retrieval, and tool calling, improving answer accuracy by 18% and recall@10 by 23%.',
      'Optimized Python and FastAPI services across AWS and GCP, reducing median inference latency by 28% while sustaining more than 99.5% uptime during traffic spikes.',
      'Built evaluation harnesses, A/B tests, redaction, filters, routing, and fallback policies. Reduced hallucinations by 15%, improved response quality by 12 percentage points, and lowered production incidents by 30%.',
      'Analyzed more than 50,000 candidate journeys, improving funnel conversion by 18%, apply-to-interview conversion by 14%, top-three match quality by 19%, and recruiter NPS by 12%.',
      'Reduced deployment lead time by 40% and increased development velocity by 25%. Enablement programs helped drive 80% feature adoption within two releases.',
    ] },
  { id: 'penn-state', company: 'Pennsylvania State University', title: 'Machine Learning Research Assistant / Teaching Assistant', period: 'Aug 2023 - May 2025', location: 'Pennsylvania, USA',
    summary: 'Healthcare machine learning research, reproducible data pipelines, and technical mentorship.',
    bullets: [
      'Analyzed more than 60 million de-identified HCUP records to study hospital length of stay and support capacity-planning research.',
      'Benchmarked seven models, improving R² from 0.43 to 0.61 and reducing RMSE from 2.11 to 1.34 days.',
      'Built a reproducible five-stage pipeline with automated QA and MLflow tracking, reducing data-quality inconsistencies by 30%.',
      'Delivered Tableau dashboards and SHAP interpretability reports, reducing time to insight by 40%. Co-authored a manuscript currently under review.',
      'Supported and mentored more than 200 students across NLP, Applied Machine Learning, Statistics, and Calculus.',
    ] },
  { id: 'safal', company: 'Safal Industries', title: 'Data Scientist', period: 'Aug 2022 - Jul 2023', location: 'Gujarat, India',
    summary: 'Forecasting, computer vision, sentiment analysis, and operational analytics for manufacturing.',
    bullets: [
      'Analyzed operational data to identify bottlenecks, increasing line productivity by approximately 11% and reducing operating costs by approximately 7%.',
      'Deployed LSTM demand forecasting for five SKUs, reducing weighted absolute percentage error from 11% to 7%.',
      'Built a Dockerized Spark Streaming and XGBoost pipeline, accelerating quality-control cycles by 20% and improving maintenance lead time by 15%.',
      'Deployed CNN defect detection with more than 92% accuracy and 30% less manual inspection effort; fine-tuned BERT on more than 6,000 reviews.',
    ] },
  { id: 'isro', company: 'Indian Space Research Organization', title: 'Data Scientist, Simulation & Visualization Intern', period: 'May 2022 - Aug 2022', location: 'Ahmedabad, Gujarat',
    summary: 'A 3D rover simulator and reinforcement learning for offline trajectory evaluation.',
    bullets: [
      'Developed a multi-physics simulator with Python and Vizard7, improving simulation fidelity by 20%.',
      'Tuned a Deep Q-Network that achieved 90% path completion on unseen simulated tracks after more than 50,000 episodes, reducing manual trajectory-design time by 25%.',
      'Built MySQL telemetry and Power BI dashboards tracking more than 10 metrics, increasing anomaly-diagnosis speed by 20%.',
      'Contributed to Python data-collection automation, documentation, onboarding workshops, and the autonomous-rover simulation prototype.',
    ] },
];

export const skillGroups = [
  { id: 'ai', name: 'AI & agentic systems', kind: 'technology', items: ['LangGraph', 'LangChain', 'CrewAI', 'AutoGen', 'LlamaIndex', 'RAG', 'LLMs', 'Prompt engineering', 'Agent orchestration', 'Tool calling', 'MCP', 'Azure AI Foundry', 'Microsoft Copilot Studio', 'Power Automate'] },
  { id: 'programming', name: 'Programming & web', kind: 'technology', items: ['Python', 'SQL', 'Java', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'FastAPI', 'Flask', 'REST APIs', 'Event-driven APIs', 'Object-oriented programming'] },
  { id: 'ml', name: 'Machine learning & data', kind: 'technology', items: ['TensorFlow', 'Keras', 'PyTorch', 'Hugging Face Transformers', 'BERT', 'scikit-learn', 'XGBoost', 'CatBoost', 'SHAP', 'MLflow', 'Dask', 'Apache Spark', 'Airflow', 'FAISS', 'Qdrant'] },
  { id: 'cloud', name: 'Cloud & DevOps', kind: 'technology', items: ['AWS: ECS, EC2, Fargate, ALB, ECR, RDS, SageMaker', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'CI/CD', 'Datadog'] },
  { id: 'databases', name: 'Databases & analytics', kind: 'technology', items: ['PostgreSQL', 'MySQL', 'Redis', 'MinIO', 'Power BI', 'Tableau', 'Microsoft Fabric', 'Pandas', 'NumPy'] },
  { id: 'product', name: 'Product & delivery', kind: 'practice', items: ['Product discovery', 'Stakeholder interviews', 'Workshops', 'Solution design', 'Prototyping', 'PRDs', 'Roadmaps', 'RICE prioritization', 'Agile / Scrum', 'A/B testing', 'Rollout', 'User enablement', 'Adoption'] },
  { id: 'tools', name: 'Developer tools', kind: 'technology', items: ['Git', 'GitHub CLI', 'Cursor', 'Claude Code', 'Codex', 'GitHub Copilot', 'VS Code', 'Jira', 'Confluence'] },
  { id: 'architecture', name: 'Agentic architecture patterns', kind: 'knowledge', items: ['Single-agent loops', 'Multi-agent systems', 'ReAct', 'Self-reflection', 'Hierarchical / supervisory orchestration', 'Orchestrator / router patterns', 'Agents-as-tools', 'Collaborative / swarm / federated systems', 'Network / peer-to-peer systems', 'Group-chat orchestration', 'Event-driven coordination', 'Blackboard / shared-memory coordination'] },
  { id: 'workflows', name: 'Agentic workflow patterns', kind: 'knowledge', items: ['Sequential workflows', 'Parallel workflows: fan-out / fan-in, sectioning, voting', 'Evaluator-optimizer feedback loops', 'Dynamic agent generation', 'Hybrid hierarchical-parallel architectures', 'Sequential workflows with dynamic routing', 'Single-agent systems with multi-agent escalation'] },
  { id: 'operations', name: 'Agent design & operations', kind: 'knowledge', items: ['Modular / composable design', 'Agent Skills', 'Task decomposition and planning', 'Context engineering and editing', 'Persistent memory', 'Inter-agent communication and conflict resolution', 'Human-in-the-loop controls', 'Prompt-chain and agent-interaction tracing', 'Evaluation criteria', 'Model selection', 'Token / cost / latency trade-offs', 'Security and AI governance'] },
  { id: 'frameworks', name: 'Additional agent frameworks', kind: 'knowledge', items: ['Mastra', 'Semantic Kernel'] },
];

export const education = [
  { id: 'psu', school: 'Pennsylvania State University', degree: 'M.S. Computer Science', period: 'Aug 2023 - May 2025', gpa: '3.67 / 4.00' },
  { id: 'au', school: 'Ahmedabad University', degree: 'B.Tech. Computer Science and Engineering', period: 'Aug 2019 - Jun 2023', gpa: '3.41 / 4.00' },
];
export const certifications = [
  { id: 'agentforce', name: 'Salesforce Certified Agentforce Specialist', issuer: 'Salesforce', date: 'Active · Issued Sep 2025 · Verify: Kathan Joshi', url: 'https://trailhead.salesforce.com/en/credentials/verification/' },
  { id: 'aws', name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', date: 'Issued Sep 2024 · Expires Sep 2027', url: 'https://www.credly.com/badges/f7f514eb-a509-4547-8aa4-ae9e8304c889/public_url' },
  { id: 'genai', name: 'Generative AI with Large Language Models', issuer: 'DeepLearning.AI and AWS via Coursera', date: 'Completed Feb 2025', url: 'https://www.coursera.org/account/accomplishments/verify/MR6XKB851YIJ' },
  { id: 'ml', name: 'Machine Learning Specialization', issuer: 'DeepLearning.AI and Stanford Online via Coursera', date: 'Completed Mar 2024', url: 'https://www.coursera.org/account/accomplishments/specialization/A9Z4GK2JUL9R' },
];
export const publications = [
  { id: 'icce', title: 'Data Augmentation in Convolutional Neural Networks for Channel Operating Margin Classification', authors: 'Kathan S. Joshi, Prithvi Choudhary, Sedig S. Agili, and Aldo W. Morales', venue: 'IEEE International Conference on Consumer Electronics (ICCE)', year: '2026', status: 'Published', url: 'https://doi.org/10.1109/ICCE67443.2026.11449703' },
  { id: 'rbc', title: 'Influence of Red Blood Cells on Channel Characterization in Cylindrical Vasculature', authors: 'Kathan S. Joshi et al.', venue: 'IEEE Transactions on NanoBioscience, 24(1), 113-119', year: '2025', status: 'Published', url: 'https://doi.org/10.1109/TNB.2024.3436022' },
  { id: 'cytokines', title: 'Modelling the Impact of Multiple Pro-inflammatory Cytokines Using Molecular Communication', authors: 'Kathan S. Joshi et al.', venue: 'National Conference on Communications (NCC), 291-296', year: '2022', status: 'Published', url: 'https://doi.org/10.1109/NCC55593.2022.9806804' },
  { id: 'neds', title: 'Leveraging Machine Learning to Predict Length of Stay for Hip Fractures in the Elderly: Insights from the Nationwide Emergency Department Sample (NEDS)', authors: 'Kathan S. Joshi, Sara Imanpour, and Md Faisal Kabir', venue: 'Manuscript', year: '', status: 'Under review', url: null },
];
