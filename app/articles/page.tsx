import { Metadata } from 'next';
import { VscShield, VscLinkExternal } from 'react-icons/vsc';

import CertificationsGrid, { Cert } from '@/components/CertificationsGrid';
import styles from '@/styles/ArticlesPage.module.css';

export const metadata: Metadata = {
  title: 'Certifications',
};

const certifications: Cert[] = [
  {
    name: 'Microsoft Azure AI-102 (AI Engineer Associate)',
    issuer: 'Microsoft',
    platform: 'Microsoft',
    date: 'Mar 2026',
    credentialId: 'AI-102',
    credentialUrl: 'https://www.linkedin.com/in/akshata-gawali/',
    skills: ['Azure AI', 'Azure OpenAI', 'Cognitive Services', 'AI Solutions'],
    description:
      'Microsoft Azure AI Engineer Associate certification covering design and implementation of AI solutions on Azure including Azure OpenAI and cognitive services.',
    color: '#0078d4',
  },
  {
    name: 'Microsoft Azure AI-900 (AI Fundamentals)',
    issuer: 'Microsoft',
    platform: 'Microsoft',
    date: 'Aug 2025',
    credentialId: 'AI-900',
    credentialUrl: 'https://www.linkedin.com/in/akshata-gawali/',
    skills: ['Azure AI Fundamentals', 'Machine Learning', 'Computer Vision', 'NLP'],
    description:
      'Foundational certification covering Azure AI concepts, machine learning workloads, computer vision, and natural language processing on Azure.',
    color: '#50e6ff',
  },
  {
    name: 'Mastering GenAI Course',
    issuer: 'Sunbeam Institution',
    platform: 'Sunbeam',
    date: 'Aug 2025',
    credentialId: 'GENAI-SB',
    credentialUrl: 'https://www.linkedin.com/in/akshata-gawali/',
    skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'RAG'],
    description:
      'Hands-on Generative AI course covering LLMs, prompt engineering, RAG pipelines, and production GenAI application patterns.',
    color: '#2db55d',
  },
  {
    name: 'Python Novice to Pythonista',
    issuer: 'Percipio',
    platform: 'Percipio',
    date: 'Sep 2024',
    credentialId: 'PY-PERCIPIO',
    credentialUrl: 'https://www.linkedin.com/in/akshata-gawali/',
    skills: ['Python', 'OOP', 'Data Structures', 'Scripting'],
    description:
      'Comprehensive Python skill path from fundamentals to advanced Pythonista-level programming practices.',
    color: '#3776ab',
  },
];

export default function CertificationsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerMain}>
            <div className={styles.iconWrapper}>
              <VscShield className={styles.icon} size={24} />
            </div>

            <div className={styles.headerContent}>
              <div className={styles.headerTop}>
                <h1 className={styles.title}>Certifications</h1>
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <span>{certifications.length} credentials</span>
                  </div>
                  <div className={styles.divider} />
                  <div className={styles.stat}>
                    <span>Microsoft · Sunbeam · Percipio</span>
                  </div>
                </div>
              </div>

              <p className={styles.subtitle}>
                Professional certifications spanning Azure AI, Generative AI, and Python development.
                Click any card to view profile details.
              </p>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/akshata-gawali/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.profileLink}
          >
            <span>LinkedIn Profile</span>
            <VscLinkExternal size={14} />
          </a>
        </header>

        <CertificationsGrid certifications={certifications} />
      </div>
    </div>
  );
}
