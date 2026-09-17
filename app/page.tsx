'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { VscArrowRight, VscGithub, VscMail, VscCode } from 'react-icons/vsc';

import DownloadResume from '@/components/DownloadResume';
import styles from '@/styles/HomePage.module.css';

const techStack = ['Python', 'LangChain', 'LangGraph', 'RAG', 'Azure OpenAI', 'FastAPI', 'Agents', 'Azure AI Search'];

const stats = [
  { number: '2.5+', label: 'Years Exp.' },
  { number: '1', label: 'Company' },
  { number: '4', label: 'Certifications' },
  { number: '70%', label: 'Ticket Cut' },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
  },
};

const pillContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.35 },
  },
};

const pill: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 6 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] },
  },
};

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item} className={styles.header}>
            <div className={styles.icon}>
              <VscCode size={28} />
            </div>
            <span className={styles.statusBadge}>
              <span className={styles.statusDot} />
              Open to Work
            </span>
          </motion.div>

          <motion.div variants={item} className={styles.intro}>
            <p className={styles.greeting}>Hello, I&apos;m</p>

            <motion.h1
              className={styles.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
            >
              Akshata Gawali
            </motion.h1>

            <div className={styles.roleWrap}>
              <p className={styles.role}>AI Engineer · Agentic AI Developer · Software Engineer</p>
            </div>

            <div className={styles.divider} />

            <p className={styles.description}>
              Building production GenAI systems — RAG pipelines, LangGraph agents, REST APIs, and
              Azure OpenAI integrations. 2.5+ years shipping Python AI products at Genpact (Kroll).
            </p>
          </motion.div>

          <motion.div
            className={styles.techStack}
            variants={pillContainer}
            initial="hidden"
            animate="visible"
          >
            {techStack.map((tech) => (
              <motion.span
                key={tech}
                className={styles.techPill}
                variants={pill}
                whileHover={{ y: -3, scale: 1.06, transition: { duration: 0.18 } }}
                whileTap={{ scale: 0.96 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.div variants={item} className={styles.statsRow}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className={styles.statItem}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.07, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
              >
                <span className={styles.statNumber}>{s.number}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={item} className={styles.actions}>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link href="/projects" className={styles.primaryAction}>
                <span>View Projects</span>
                <VscArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}>
              <Link href="/about" className={styles.secondaryAction}>
                <span>About Me</span>
              </Link>
            </motion.div>

            <DownloadResume variant="outline" size="md" />
          </motion.div>

          <motion.div variants={item} className={styles.links}>
            {[
              { href: 'https://www.linkedin.com/in/akshata-gawali/', icon: null, label: 'LinkedIn', external: true },
              { href: 'mailto:gawaliakshata1@gmail.com', icon: <VscMail size={15} />, label: 'Email', external: true },
              { href: '/contact', icon: <VscGithub size={15} />, label: 'Contact', external: false },
            ].map((link, i) => (
              <span key={link.label} style={{ display: 'contents' }}>
                {i > 0 && <span className={styles.linkSeparator}>/</span>}
                <motion.div whileHover={{ y: -1 }}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      {link.icon}
                      <span>{link.label}</span>
                    </a>
                  ) : (
                    <Link href={link.href} className={styles.link}>
                      {link.icon}
                      <span>{link.label}</span>
                    </Link>
                  )}
                </motion.div>
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
