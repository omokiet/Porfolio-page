import { Mail, Globe, Share2, Settings, Palette, Database, Lock, Gamepad2, Rocket } from 'lucide-react';
import kietImg from '../assets/kiet.jpg';

export const USER_INFO = {
  name: 'Cao Võ Tuấn Kiệt',
  nickname: 'kietcvt',
  avatar: kietImg, // Replaced absolute OS path with Vite import
  status: 'Đang học hỏi...',
  headline: 'Xin chào, tôi là',
  gpa: '3.11',
  year: '3',
  passions: 'DevOps| Cloud| Security| Database',
  full_name: 'Cao Võ Tuấn Kiệt',
  role_desc: 'Sinh viên năm 3 | Công nghệ Thông tin',
  about_text: 'Hiện tại, tôi đang là sinh viên năm 3 chuyên ngành Công nghệ thông tin tại Trường Đại học Sư phạm TP.HCM. Với niềm đam mê mãnh liệt dành cho lập trình web, thiết kế hạ tầng.',
  about_strengths: 'Điểm mạnh: Có khả năng tự học tốt, tư duy logic nhạy bén và sự tỉ mỉ trong việc thiết kế hạ tầng. Tôi yêu thích Công nghệ, đặc biệt là về bảo mật và tự động hóa, tôi luôn tìm cách để có thể đảm bảo được 2 vấn đề này trong các dự án của mình.',
  education: 'Đại học Sư phạm TP.HCM 2023-2027',
  major: 'Fullstack Development / Database Designer/ DevOps Engineer',
  languages: 'C++, C#, Python, Dart, JS, TS',
};

export const NAV_LINKS = [
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Kỹ năng', href: '#skills' },
  { label: 'Dự án', href: '#projects' },
  { label: 'Chứng chỉ', href: '#certificates' },
];

export const SKILLS_DATA = [
  {
    id: 1,
    title: 'Backend Engineering',
    description: 'Building REST APIs with JWT authentication, payment integration, caching, and query optimization.',
    icon: Settings,
    tags: ['NestJS', 'FastAPI', 'Node.js', 'REST API', 'Python'],
  },
  {
    id: 2,
    title: 'Frontend Development',
    description: 'Creating responsive UIs with React, Tailwind css, state management, Material-UI, and Client-side optimization.',
    icon: Palette,
    tags: ['React + Vite', 'Next.js', 'TypeScript', 'Tailwind css', 'Material-UI'],
  },
  {
    id: 3,
    title: 'Database & ORM',
    description: 'Designing data models, writing optimized queries, and managing database schemas with ORMs.',
    icon: Database,
    tags: ['PostgreSQL', 'MySQL', 'SQL Server', 'Redis', 'MongoDB','Neo4J','SQLAlchemy'],
  },
  {
    id: 4,
    title: 'Auth & Security',
    description: 'Implementing JWT authentication, RBAC, protected routing, and security best practices.',
    icon: Lock,
    tags: ['JWT', 'RBAC', 'OAuth2'],
  },
  {
    id: 5,
    title: 'DevOps & Tools',
    description: 'Containerization, version control, and deployment workflows for modern applications.',
    icon: Rocket,
    tags: ['Docker', 'Git', 'GitHub', 'Docker Compose'],
  },
];

export const TECH_STACK = [
  { name: 'JavaScript', slug: 'javascript' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'Python', slug: 'python' },
  { name: 'C++', slug: 'cplusplus' },
  { name: 'C#', slug: 'dotnet' },
  { name: 'React', slug: 'react' },
  { name: 'Next.js', slug: 'nextdotjs' },
  { name: 'NestJS', slug: 'nestjs' },
  { name: 'PHP', slug: 'php' },
  { name: 'Laravel', slug: 'laravel' },
  { name: 'MongoDB', slug: 'mongodb' },
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'Redis', slug: 'redis' },
  { name: 'Docker', slug: 'docker' },
  { name: 'Git', slug: 'git' }
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Mirai Store',
    category: 'Web',
    subtitle: 'E-COMMERCE PLATFORM',
    description: 'Hệ thống bán game bản quyền tích hợp AI Chatbot, gợi ý game thông minh và thanh toán MoMo/PayPal.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop',
    tags: ['Laravel 11', 'MongoDB', 'TailwindCSS', 'Docker', 'AI Chatbot'],
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'TodoApp AI',
    category: 'Web',
    subtitle: 'AI TASK MANAGER',
    description: 'Quản lý công việc thông minh với Trợ lý ảo Miku (Gemini AI), tích hợp Redis để tối ưu hiệu suất.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=2064&auto=format&fit=crop',
    tags: ['React 19', 'Node.js', 'Redis', 'Gemini AI'],
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Basic Platformer',
    category: 'Game',
    subtitle: '2D GAME DEVELOPMENT',
    description: 'Game 2D Platformer cơ bản tập trung vào xử lý vật lý, hệ thống mạng sống và animation nhân vật mượt mà.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    tags: ['Unity', 'C#', '2D Physics', 'Animation', 'Double Jump'],
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Ciname Galyxa',
    category: 'Web',
    subtitle: 'FULL-STACK MOVIE BOOKING',
    description: 'Nền tảng đặt vé xem phim trực tuyến hiện đại với lịch chiếu realtime.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop',
    tags: ['React', 'Express', 'MongoDB'],
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'OOP Lookup System',
    category: 'Software/App',
    subtitle: 'EDUCATION & DEV TOOLS',
    description: 'Hệ thống tra cứu thuật ngữ Lập trình Hướng đối tượng.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
    tags: ['C#', '.NET', 'SQLite'],
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'CyberOps Manager',
    category: 'Software/App',
    subtitle: 'CYBER GAME MANAGEMENT',
    description: 'Phần mềm quản lý phòng máy Cyber Game tích hợp thanh toán.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop',
    tags: ['C++', 'Qt Framework', 'SQL Server'],
    link: '#',
    github: '#',
  },
];

export const CERTIFICATES_DATA = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    year: '2025',
  },
  {
    id: 2,
    title: 'Certified Kubernetes Administrator',
    organization: 'CNCF',
    year: '2024',
  },
];

export const CONTACT_DATA = {
  email: 'hello@example.com',
  links: [
    { label: 'Liên Hệ', url: 'mailto:hello@example.com' },
  ],
};
