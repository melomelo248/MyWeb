export interface Project {
  id: string;
  title: string;
  timeRange: string;
  tags: string[];
  summary: string;
  skills: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 'alzheimer',
    title: '基于深度学习的阿尔兹海默症相关细胞表型研究',
    timeRange: '2025.06 - 2025.09',
    tags: ['医疗AI', '深度学习'],
    summary: '搭建大规模细胞图像数据分析平台，基于PyTorch和TensorFlow开发深度学习模型，实现细胞图像数据的相似性分析与多维度特征提取，辅助理解有关阿尔兹海默症的潜在生物学机制。',
    skills: ['Python', 'PyTorch', 'TensorFlow', 'MobileNetV2', 'DINOv3', 'XGBoost'],
    image: '/images/projects/alzheimer.jpg',
    link: 'https://github.com'
  },
  {
    id: 'gender-analysis',
    title: '英国居民工作情况与性别差异数据分析及可视化',
    timeRange: '2025.05 - 2025.06',
    tags: ['数据分析', '可视化'],
    summary: '通过英国官方API批量获取2011以及2021年普查数据（覆盖2000万+样本），使用Python进行数据清洗与特征提取，通过Tableau实现高级可视化，构建包含5个交互式仪表板的Story。',
    skills: ['Python', 'Pandas', 'Tableau', 'PCA', 'UMAP'],
    image: '/images/projects/data-analysis.jpg',
    link: 'https://github.com'
  },
  {
    id: 'protein',
    title: '基于神经网络的蛋白质相互作用核心残基预测',
    timeRange: '2025.01 - 2025.05',
    tags: ['生物信息', '神经网络'],
    summary: '基于海量蛋白质结合位点数据，训练CIRNet神经网络模型进行蛋白质作用过程中的核心残基预测。领导三人团队，合理分配任务、定期组织会议，项目获得优秀（Distinction）等级。',
    skills: ['Python', 'Neural Networks', 'Data Analysis', 'GitHub'],
    image: '/images/projects/protein.jpg',
    link: 'https://github.com'
  }
];
