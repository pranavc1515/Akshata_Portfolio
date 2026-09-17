export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    title: 'Cora Agent Assist',
    description:
      'Production RAG chatbot for enterprise support at Genpact (Kroll). Python + LangChain + Azure OpenAI + Azure AI Search with Docling ingestion, semantic routing, and Presidio PII anonymization.',
    logo: '/logos/chatbot_icon.svg',
    link: 'https://www.linkedin.com/in/akshata-gawali/',
    slug: 'cora-agent-assist',
    tags: ['Python', 'LangChain', 'Azure OpenAI', 'Azure AI Search', 'RAG', 'Presidio', 'Docling'],
  },
  {
    title: 'Network Agentic Solution',
    description:
      'LangGraph multi-tool agent for network operations automation. 9 tools (ping, traceroute, ServiceNow, Ansible AWX) with function calling, PostgreSQL chat memory, and 70% reduction in false ticket creation.',
    logo: '/logos/rag_icon.svg',
    link: 'https://www.linkedin.com/in/akshata-gawali/',
    slug: 'network-agentic-solution',
    tags: ['Python', 'LangGraph', 'Azure OpenAI', 'ServiceNow API', 'Ansible AWX', 'PostgreSQL'],
  },
  {
    title: 'Document Ingestion & Vector Search',
    description:
      'End-to-end ingestion pipeline for PDF, DOCX, and PPTX — parsing, chunking, embeddings, metadata enrichment, and indexing into Azure AI Search for scalable semantic retrieval.',
    logo: '/logos/docs_icon.svg',
    link: 'https://www.linkedin.com/in/akshata-gawali/',
    slug: 'document-ingestion-pipeline',
    tags: ['Python', 'Docling', 'Embeddings', 'Azure AI Search', 'Chunking'],
  },
  {
    title: 'GenAI REST APIs & Azure Functions',
    description:
      'FastAPI-style Python backends and Azure Functions powering chatbot endpoints, tool integrations, retries/timeouts, and production GenAI service orchestration.',
    logo: '/logos/vercel.svg',
    link: 'https://www.linkedin.com/in/akshata-gawali/',
    slug: 'genai-rest-apis',
    tags: ['Python', 'FastAPI', 'REST APIs', 'Azure Functions', 'Retry Patterns'],
  },
];
