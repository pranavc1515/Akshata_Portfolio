import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  title: {
    default: 'Akshata Gawali | Portfolio',
    template: 'Akshata Gawali | %s',
  },
  description:
    'Akshata Gawali is an AI Engineer and Agentic AI Developer with 2.5+ years of experience building production RAG pipelines, LangGraph agents, REST APIs, and Azure OpenAI solutions.',
  keywords: [
    'akshata gawali',
    'ai engineer',
    'agentic ai developer',
    'genai engineer',
    'software engineer',
    'rag pipeline',
    'langchain developer',
    'langgraph',
    'python developer',
    'fastapi',
    'azure openai',
    'akshata gawali portfolio',
  ],
  openGraph: {
    title: 'Akshata Gawali | AI Engineer · Agentic AI Developer',
    description:
      'AI Engineer building production RAG pipelines, LangGraph agents, and Python REST APIs on Azure.',
    url: 'https://akshata-gawali.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
