import { Project, BlogPost, Experience, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'cloud-resume-challenge',
    title: 'Cloud Resume Challenge',
    shortDescription: 'Built a serverless personal resume site on AWS with Terraform-managed infrastructure, CI/CD, and a live visitor counter.',
    fullDescription: 'A cloud-native resume project that serves a static frontend through S3 and CloudFront, uses API Gateway, Lambda, and DynamoDB for a visitor counter backend, and is deployed through GitHub Actions with Terraform and OIDC-based AWS authentication.',
    problem: 'I wanted a portfolio project that demonstrated real cloud engineering skills beyond a static resume, including infrastructure as code, serverless backend integration, secure AWS hosting, and automated deployment.',
    solution: ' designed and deployed a static website on Amazon S3 behind CloudFront with a custom domain and ACM certificate, built a serverless visitor counter using API Gateway, Lambda, and DynamoDB, and managed the infrastructure with Terraform. I also set up GitHub Actions for CI/CD with Playwright tests, remote Terraform state, and OIDC-based AWS authentication.',
    impact: 'Reduced deployment from a multi-step manual process to a single automated CI/CD workflow, while combining 8+ AWS services into one end-to-end project that demonstrates real cloud, serverless, and infrastructure-as-code skills.',
    techStack: ['AWS', 'Terraform', 'Python', 'GitHub Actions', 'Git'],
    githubUrl: 'https://github.com/rayan-hmd/digital-resume',
    challenges: 'Setting up S3 Remote State with DynamoDB locking.'
  },
  
];

export const BLOG_POSTS: BlogPost[] = [

];

export const EXPERIENCES: Experience[] = [
  {
    company: 'RMIT Information Security Collective',
    role: 'General Committee Member: Marketing & Events',
    period: '2026 - Present',
    description: [
      'Support the executive team with event setup, coordination, and on-the-day delivery for club activities.',
      'Contribute to communications and marketing efforts to improve member engagement and increase event visibility.',
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    school: 'RMIT University',
    degree: 'Bachelor of Information Technology (Cyber Assurance)',
    period: '2024-2026',
    description: [
      'Focused on cyber assurance, with studies in information security, risk management, and secure technology practices.',
      'Built a foundation in cloud, networking, and security concepts that support my interest in DevOps and cloud engineering.',
    ]
  }
];

export const SKILLS = {
  cloud: ['AWS', 'Azure'],
  programming: ['Python', 'Bash', 'Java', 'JavaScript'],
  tools: ['Terraform', 'Docker', 'GitHub Actions', 'Wireshark', 'Linux', 'VirusTotal', 'Phishing Analysis'],
  security: ['Networking', 'Attack Analysis', 'Malware Analysis', 'Cryptography', 'IAM'],
  frameworks: ['MITRE ATT&CK', 'OWASP Top 10', 'NIST Cybersecurity Framework', 'ASD Information Security Manual'],
};

export const LEARNING_TOPICS = [
  'Kubernetes & Container Orchestration',
  'AWS Certified Solutions Architect - Associate',
];
