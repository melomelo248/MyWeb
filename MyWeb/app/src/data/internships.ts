export interface Internship {
  id: string;
  company: string;
  position: string;
  timeRange: string;
  summary: string;
  skills: string[];
  image: string;
  link: string;
}

export const internships: Internship[] = [
  {
    id: 'casia',
    company: '中国科学院自动化研究所',
    position: '暑期实习生',
    timeRange: '2024.08',
    summary: '参与基于深度学习的电价预测项目，参与前期模型调研和文稿撰写。帮助团队调研两种创新预测模型: N-BEATS 和 MLP，并完成了两份关于模型性能和潜在应用的研究报告。',
    skills: ['Deep Learning', 'Research', 'Python', 'N-BEATS', 'MLP'],
    image: '/images/internships/casia.jpg',
    link: 'https://www.casia.ac.cn'
  },
  {
    id: 'netease',
    company: '网易清流工作室',
    position: '内容/运营实习生',
    timeRange: '2023.03 - 2023.06',
    summary: 'ESG新频道运营和内容创作，撰写深度稿，进行内容发布、流量监测和流量调整。网易清流工作室内容深度稿撰写，提升内容质量和用户 engagement。',
    skills: ['Content Creation', 'Data Analysis', 'Operations', 'ESG'],
    image: '/images/internships/netease.jpg',
    link: 'https://www.163.com'
  },
  {
    id: 'nofashion',
    company: '无时尚中文网',
    position: '内容/运营实习生',
    timeRange: '2023.02 - 2023.09',
    summary: '奢侈品行业财报分析，撰写分析稿，为高净值人士提供信息。平台运营、内容发布、数据整理，提升平台内容质量和用户体验。',
    skills: ['Financial Analysis', 'Content Writing', 'Operations', 'Luxury'],
    image: '/images/internships/nofashion.jpg',
    link: 'https://www.nofashion.cn'
  }
];
