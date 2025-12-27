import { IBlogPost } from "../types/blog";
import { IProduct } from "../types/product";
import { ITeamMember } from "../types/team";

export const PRODUCT_DATA: IProduct[] = [
  {
    id: 1,
    tag: "DocSim",
    title: "AI-Powered Document Similarity Engine",
    image: "/images/products/img1.svg",
    features: [
      "Detects near-duplicates and tampered documents.",
      "Identifies fraudulent patterns across large repositories.",
      "Multi-language support for global adaptability.",
    ],
    benefits: [
      "Save 30% time on manual checks.",
      "Reduce document fraud by up to 40%.",
    ],
  },
  {
    id: 2,
    tag: "DocPilot",
    title: "Streamline Document Workflows with Automation",
    image: "/images/products/img2.svg",
    features: [
      "Automates document collection, routing, and task assignments.",
      "Real-time tracking with advanced dashboards.",
      "Seamless integration with enterprise systems via APIs.",
    ],
    benefits: [
      "Reduce turnaround times by 50%.",
      "Improve operational efficiency with minimal manual effort.",
    ],
  },
  {
    id: 3,
    tag: "Doxtract",
    title: "Extract, Validate, and Process Documents with Ease",
    image: "/images/products/img3.svg",
    features: [
      "OCR and NLP-based data extraction.",
      "Handles unstructured documents across industries.",
      "Validates fields using external data sources.",
    ],
    benefits: [
      "Process 10,000+ documents in minutes.",
      "Achieve 99% data accuracy with AI-driven validation.",
    ],
  },
];


export const BLOG_POSTS: IBlogPost[] = [
  {
    id: '1',
    title: 'How AI is Revolutionizing Document Management for Enterprises',
    date: '24 July, 2023',
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
  },
  {
    id: '2',
    title: 'Top 5 Fraud Prevention Strategies for Financial Institutions',
    date: '24 July, 2023',
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
  },
  {
    id: '3',
    title: 'The Future of OCR: From Basic Extraction to AI-Driven Intelligence',
    date: '24 July, 2023',
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
  },
  {
    id: '4',
    title: 'Implementing Machine Learning in Legacy Systems',
    date: '15 August, 2023',
    excerpt: "In the evolving landscape of enterprise technology, bridging the gap between legacy systems and modern AI solutions is the next big challenge...",
  },
  {
    id: '5',
    title: 'Scalable Architecture for High-Volume Data Processing',
    date: '02 September, 2023',
    excerpt: "Processing millions of documents daily requires a robust, distributed architecture that can scale dynamically based on demand...",
  }
];


export const TEAM_DATA: ITeamMember[] = [
  {
    id: 1,
    name: 'Mansi Shukla',
    role: 'CEO FutureSphere',
    quote: 'For this time-constrained generation in a NOW economy, we intend to make Banking not feel out of place.',
    image: '/images/team/img1.jpg',
  },
  {
    id: 2,
    name: 'John Carter',
    role: 'CTO',
    quote: 'For this time-constrained generation in a NOW economy, we intend to make Banking not feel out of place.',
    image: '/images/team/img2.jpg',
  },
  {
    id: 3,
    name: 'Alex Morgan',
    role: 'Head of Design',
    quote: 'For this time-constrained generation in a NOW economy, we intend to make Banking not feel out of place.',
    image: '/images/team/img3.jpg',
  },
  {
    id: 4,
    name: 'Mansi Shukla',
    role: 'CEO FutureSphere',
    quote: 'For this time-constrained generation in a NOW economy, we intend to make Banking not feel out of place.',
    image: '/images/team/img1.jpg',
  },
  {
    id: 5,
    name: 'John Carter',
    role: 'CTO',
    quote: 'For this time-constrained generation in a NOW economy, we intend to make Banking not feel out of place.',
    image: '/images/team/img2.jpg',
  },
  {
    id: 6,
    name: 'Alex Morgan',
    role: 'Head of Design',
    quote: 'For this time-constrained generation in a NOW economy, we intend to make Banking not feel out of place.',
    image: '/images/team/img3.jpg',
  },
];
