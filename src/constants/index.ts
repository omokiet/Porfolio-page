import { Settings, Palette, Database, Lock, Rocket } from 'lucide-react';
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
  languages: 'C++, C#, Python, JS, TS',
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
    description: 'Xây dựng hệ thống RESTful API hiệu năng cao với xác thực JWT, tích hợp cổng thanh toán trực tuyến, quản lý bộ nhớ đệm (caching) và tối ưu hóa hiệu suất truy vấn dữ liệu phức tạp.',
    icon: Settings,
    tags: ['NestJS', 'FastAPI', 'Node.js', 'PostgreSQL', 'Python'],
  },
  {
    id: 2,
    title: 'Frontend Development',
    description: 'Phát triển giao diện người dùng (UI/UX) hiện đại, tương thích hoàn hảo trên đa thiết bị, quản lý trạng thái ứng dụng đồng bộ và tối ưu hóa tốc độ tải trang phía Client-side.',
    icon: Palette,
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material-UI'],
  },
  {
    id: 3,
    title: 'Database & ORM',
    description: 'Thiết kế và chuẩn hóa mô hình dữ liệu quan hệ và phi quan hệ, viết các truy vấn SQL tối ưu và quản lý cấu trúc schema linh hoạt thông qua các thư viện ORM mạnh mẽ.',
    icon: Database,
    tags: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL Server', 'MySQL','Neo4J','SQLAlchemy'],
  },
  {
    id: 4,
    title: 'Auth & Security',
    description: 'Triển khai hệ thống xác thực bảo mật đa tầng, quản lý phân quyền người dùng chi tiết (RBAC), bảo vệ định tuyến API và áp dụng các tiêu chuẩn bảo mật Web OWASP.',
    icon: Lock,
    tags: ['JWT', 'RBAC', 'OAuth2', 'Security'],
  },
  {
    id: 5,
    title: 'DevOps & Tools',
    description: 'Đóng gói ứng dụng bằng Docker, thiết lập quy trình tự động hóa triển khai, quản lý hạ tầng mã nguồn chuyên nghiệp và tối ưu hóa quy trình release sản phẩm.',
    icon: Rocket,
    tags: ['Docker', 'Git', 'GitHub Actions', 'CI/CD'],
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
    title: 'Vul-Scanner',
    category: 'Security',
    subtitle: 'VULNERABILITY SCANNER',
    description: 'Hệ thống quét lỗ hổng bảo mật toàn diện: rà soát cổng mạng (port scanning), kiểm tra chứng chỉ SSL/TLS, đánh giá cấu hình header bảo mật, quét thư mục ẩn và tự động tìm kiếm tên miền phụ (subdomain) cho website.',
    image: '../public/Vul-scanner.png',
    tags: ['Python', 'Nmap', 'Docker'],
    link: 'https://vul-scanner.onrender.com', // TODO: Replace with actual project URL
    github: 'https://github.com/omokiet/Vul-scanner.git', // TODO: Replace with actual GitHub repository URL
  },
  {
    id: 2,
    title: 'TodoApp',
    category: 'Web',
    subtitle: 'TASK MANAGER',
    description: 'Ứng dụng quản lý công việc và thời gian cá nhân với giao diện trực quan, hỗ trợ phân loại mức độ ưu tiên, theo dõi tiến độ và tối ưu hóa hiệu suất làm việc hàng ngày.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=2064&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#', // TODO: Replace with actual project URL
    github: '#', // TODO: Replace with actual GitHub repository URL
  },
  {
    id: 3,
    title: 'Coffee Manager',
    category: 'Web',
    subtitle: 'COFFEE SHOP MANAGEMENT',
    description: 'Giải pháp quản lý quán cà phê hiện đại: điều hành nhân sự, kiểm soát kho hàng và sản phẩm, xử lý đơn hàng thời gian thực, tích hợp hệ thống báo cáo doanh thu và chăm sóc khách hàng.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    tags: ['FastAPI', 'React', 'PostgreSQL'],
    link: 'https://github.com/MrT223/Coffee-Manager.git', // TODO: Replace with actual project URL
    github: 'https://github.com/MrT223/Coffee-Manager.git', // TODO: Replace with actual GitHub repository URL
  }
];

export const CERTIFICATES_DATA = [
  {
    id: 1,
    title: 'Basic of Cloud Compute',
    organization: 'Google',
    year: '2025',
  },
  {
    id: 2,
    title: 'Cloud Computing Fundemental',
    organization: 'Google',
    year: '2025',
  },
  {
    id: 3,
    title: 'Getting Started with DevOps on AWS',
    organization: 'AWS',
    year: '2025',
  },
  {
    id: 4,
    title: 'AI Boost Bite: Your Personal AI Study Partner',
    organization: 'Google',
    year: '2025',
  },
  {
    id: 5,
    title: 'AI Boost Bite: Presentation Script with Gemini',
    organization: 'Google',
    year: '2025',
  },
  {
    id: 6,
    title: 'AI Boost Bite: Project Notebooks',
    organization: 'Google',
    year: '2025',
  },
  {
    id: 7,
    title: 'Gemini Certified Student',
    organization: 'Google',
    year: '2025',
  },
];

export const CONTACT_DATA = {
  email: 'kiettuanvocao2005@gmail.com',
  links: [
    { label: 'Liên Hệ', url: 'mailto:kiettuanvocao2005@gmail.com' },
  ],
};
