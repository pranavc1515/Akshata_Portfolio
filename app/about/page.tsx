'use client';

import { motion } from 'framer-motion';
import { VscMail, VscLinkExternal } from 'react-icons/vsc';
import Link from 'next/link';

import AnimatedSection from '@/components/AnimatedSection';
import DownloadResume from '@/components/DownloadResume';
import styles from '@/styles/AboutPage.module.css';

const experiences = [
  {
    period: 'Dec 2023 – Present',
    role: 'Application Developer',
    company: 'Genpact India Private Limited (Client: Kroll)',
    location: 'India · On-site',
    type: 'ai',
    bullets: [
      'Cora Agent Assist: production RAG pipelines with Python, LangChain, Azure OpenAI, and Azure AI Search — retrieval, context construction, and grounding to cut hallucinations',
      'Built document ingestion for PDF/DOCX/PPTX via Docling: chunking, embeddings, metadata enrichment, and Azure AI Search indexing',
      'Implemented semantic routing so FAQ queries bypass LLM calls, reducing token cost and latency',
      'Engineered prompts and structured outputs; integrated Presidio for PII anonymization before LLM calls',
      'Shipped GenAI REST APIs and Azure Functions / FastAPI-style Python backends for chatbot services',
      'Network Agentic Solution: LangGraph agent with 9 tools (ping, traceroute, ServiceNow, Ansible AWX) using function calling',
      'PostgreSQL agent memory (last 4 turns); Ansible AWX log parsing to JSON for LLM-ready context',
      'ServiceNow & Ansible REST API integrations with retries/timeouts; reduced false ticket creation by 70%',
      'Delivered ReAct-style plan → tool call → observe → respond agent loops for network diagnostics',
    ],
    tech: [
      'Python',
      'LangChain',
      'LangGraph',
      'Azure OpenAI',
      'Azure AI Search',
      'FastAPI',
      'Azure Functions',
      'PostgreSQL',
      'Presidio',
      'Docling',
      'ServiceNow API',
      'Ansible AWX',
    ],
  },
];

const skillGroups = [
  {
    label: 'AI Engineering',
    skills: [
      'LLMs',
      'RAG',
      'LangChain',
      'LangGraph',
      'LlamaIndex',
      'CrewAI',
      'AI Agents',
      'Tool Calling',
      'MCP',
      'Prompt Engineering',
      'Semantic Routing',
      'Vector Search',
      'Azure AI Search',
      'Presidio (PII)',
      'Docling',
    ],
  },
  {
    label: 'Backend & APIs',
    skills: ['Python', 'FastAPI', 'REST APIs', 'Azure Functions', 'PostgreSQL', 'MySQL', 'JWT / Auth', 'Retry Patterns'],
  },
  {
    label: 'Cloud & Azure AI',
    skills: ['Azure OpenAI', 'Azure AI Search', 'Azure Storage', 'Azure Document Intelligence', 'Azure Functions'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Jupyter', 'Docker', 'CI/CD'],
  },
];

const certifications = [
  {
    name: 'Microsoft Azure AI-102 (AI Engineer Associate)',
    issuer: 'Microsoft',
    date: 'Mar 2026',
    url: 'https://www.linkedin.com/in/akshata-gawali/',
  },
  {
    name: 'Microsoft Azure AI-900 (AI Fundamentals)',
    issuer: 'Microsoft',
    date: 'Aug 2025',
    url: 'https://www.linkedin.com/in/akshata-gawali/',
  },
  {
    name: 'Mastering GenAI Course',
    issuer: 'Sunbeam Institution',
    date: 'Aug 2025',
    url: 'https://www.linkedin.com/in/akshata-gawali/',
  },
  {
    name: 'Python Novice to Pythonista',
    issuer: 'Percipio',
    date: 'Sep 2024',
    url: 'https://www.linkedin.com/in/akshata-gawali/',
  },
];

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className={styles.headerContent}>
            <motion.div
              className={styles.avatar}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ scale: 1.06 }}
            >
              AG
            </motion.div>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Akshata Gawali</h1>
              <p className={styles.role}>Application Developer @ Genpact (Kroll)</p>
              <div className={styles.location}>
                <span className={styles.dot} />
                India · Open to Remote / Hybrid
              </div>
            </div>
          </div>

          <div className={styles.headerActions}>
            <motion.a
              href="https://www.linkedin.com/in/akshata-gawali/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconButton}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              in
            </motion.a>
            <motion.div whileHover={{ y: -2, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className={styles.iconButton}>
                <VscMail size={20} />
              </Link>
            </motion.div>
          </div>
        </motion.header>

        <div className={styles.content}>
          <AnimatedSection>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>01</span>
                <h2 className={styles.sectionTitle}>About</h2>
              </div>

              <div className={styles.sectionBody}>
                <p className={styles.paragraph}>
                  AI Engineer, Agentic AI Developer, and Software Engineer with 2.5+ years of experience
                  building production Generative AI systems in Python. Currently shipping enterprise GenAI
                  for Kroll at Genpact — RAG chatbots, LangGraph multi-tool agents, REST APIs, and Azure
                  OpenAI integrations.
                </p>
                <p className={styles.paragraph}>
                  Focused on prompt engineering, vector search, tool calling, PII-safe LLM apps, and
                  end-to-end agentic product delivery. Reduced false ServiceNow ticket creation by 70%
                  through intelligent agent orchestration.
                </p>
                <p className={styles.paragraph}>
                  Particularly interested in RAG systems, agent architectures, and teams shipping AI that
                  works in production — not just demos.
                </p>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={50}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>02</span>
                <h2 className={styles.sectionTitle}>Experience</h2>
              </div>

              <div className={styles.sectionBody}>
                {experiences.map((exp, i) => (
                  <AnimatedSection key={i} delay={i * 60}>
                    <motion.div
                      className={styles.experienceCard}
                      whileHover={{ x: 4, transition: { duration: 0.2, ease: 'easeOut' } }}
                    >
                      <div className={styles.expMeta}>
                        <span className={styles.expPeriod}>{exp.period}</span>
                        <span className={styles.expLocation}>{exp.location}</span>
                      </div>
                      <h3 className={styles.expRole}>{exp.role}</h3>
                      <p className={styles.expCompany}>{exp.company}</p>
                      <ul className={styles.expList}>
                        {exp.bullets.map((b, j) => (
                          <li key={j}>{b}</li>
                        ))}
                      </ul>
                      <div className={styles.expTech}>
                        {exp.tech.map((t) => (
                          <span key={t} className={styles.techTag}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={80}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>03</span>
                <h2 className={styles.sectionTitle}>Skills</h2>
              </div>

              <div className={styles.sectionBody}>
                <div className={styles.skillsGrid}>
                  {skillGroups.map((group, i) => (
                    <AnimatedSection key={group.label} delay={i * 60}>
                      <div className={styles.skillCategory}>
                        <h4 className={styles.skillTitle}>{group.label}</h4>
                        <div className={styles.skillTags}>
                          {group.skills.map((skill) => (
                            <span key={skill} className={styles.skillTag}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={60}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>04</span>
                <h2 className={styles.sectionTitle}>Education</h2>
              </div>

              <div className={styles.sectionBody}>
                <div className={styles.experienceCard}>
                  <div className={styles.expMeta}>
                    <span className={styles.expPeriod}>Graduated Jun 2023</span>
                  </div>
                  <h3 className={styles.expRole}>Bachelor of Engineering — Information Technology</h3>
                  <p className={styles.expCompany}>VPKBIET, Baramati · CGPA: 9.1</p>
                </div>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={70}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>05</span>
                <h2 className={styles.sectionTitle}>Certifications</h2>
              </div>

              <div className={styles.sectionBody}>
                <div className={styles.certGrid}>
                  {certifications.map((cert, i) => (
                    <a
                      key={i}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.certCard}
                      style={{ animationDelay: `${i * 40}ms` }}
                    >
                      <div className={styles.certHeader}>
                        <span className={styles.certDate}>{cert.date}</span>
                        <VscLinkExternal size={10} className={styles.certExtIcon} />
                      </div>
                      <p className={styles.certName}>{cert.name}</p>
                      <p className={styles.certIssuer}>{cert.issuer}</p>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={60}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>06</span>
                <h2 className={styles.sectionTitle}>Languages</h2>
              </div>

              <div className={styles.sectionBody}>
                <div className={styles.skillsGrid}>
                  <div className={styles.skillCategory}>
                    <h4 className={styles.skillTitle}>English</h4>
                    <div className={styles.skillTags}>
                      <span className={styles.skillTag}>Full Professional Proficiency</span>
                    </div>
                  </div>
                  <div className={styles.skillCategory}>
                    <h4 className={styles.skillTitle}>Hindi</h4>
                    <div className={styles.skillTags}>
                      <span className={styles.skillTag}>Full Professional Proficiency</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerActions}>
            <Link href="/projects" className={styles.footerLink}>
              View my projects →
            </Link>
            <DownloadResume variant="outline" size="sm" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
