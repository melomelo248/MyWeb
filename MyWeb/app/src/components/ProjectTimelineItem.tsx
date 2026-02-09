import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectTimelineItemProps {
  project: Project;
  index: number;
  isReversed: boolean;
}

export function ProjectTimelineItem({ project, index, isReversed }: ProjectTimelineItemProps) {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
      {/* 左侧内容 */}
      <motion.div
        className={`${isReversed ? 'md:order-3' : 'md:order-1'}`}
        initial={{ 
          opacity: 0, 
          x: isReversed ? 50 : -50 
        }}
        whileInView={{ 
          opacity: 1, 
          x: 0 
        }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1,
          ease: 'easeOut' 
        }}
      >
        {isReversed ? (
          <ConceptImage image={project.image} title={project.title} />
        ) : (
          <DetailBox project={project} />
        )}
      </motion.div>

      {/* 中间时间轴节点 */}
      <motion.div
        className="hidden md:flex md:order-2 justify-center items-center relative"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.15 }}
      >
        <div className="w-4 h-4 rounded-full bg-purple-600 border-4 border-white shadow-lg z-10" />
      </motion.div>

      {/* 移动端时间轴节点 */}
      <motion.div
        className="md:hidden absolute left-4 top-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.15 }}
      >
        <div className="w-3 h-3 rounded-full bg-purple-600 border-2 border-white shadow-lg" />
      </motion.div>

      {/* 右侧内容 */}
      <motion.div
        className={`${isReversed ? 'md:order-1' : 'md:order-3'}`}
        initial={{ 
          opacity: 0, 
          x: isReversed ? -50 : 50 
        }}
        whileInView={{ 
          opacity: 1, 
          x: 0 
        }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1 + 0.1,
          ease: 'easeOut' 
        }}
      >
        {isReversed ? (
          <DetailBox project={project} />
        ) : (
          <ConceptImage image={project.image} title={project.title} />
        )}
      </motion.div>
    </div>
  );
}

// 概念图组件
function ConceptImage({ image, title }: { image: string; title: string }) {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden shadow-xl"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={image}
        alt={title}
        className="w-full aspect-[4/3] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </motion.div>
  );
}

// 详情框组件
function DetailBox({ project }: { project: Project }) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* 时间标签 */}
      <div className="mb-3">
        <span className="inline-block px-4 py-1.5 text-sm font-medium bg-purple-100 text-purple-700 rounded-full">
          {project.timeRange}
        </span>
      </div>

      {/* 分类标签 */}
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-sm text-gray-500"
          >
            {tag}{idx < project.tags.length - 1 && ' / '}
          </span>
        ))}
      </div>

      {/* 项目名称 */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
        {project.title}
      </h3>

      {/* 项目描述 */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
        {project.summary}
      </p>

      {/* 技能标签 */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.skills.map((skill, idx) => (
          <motion.span
            key={idx}
            className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
            whileHover={{ scale: 1.05, backgroundColor: '#ede9fe' }}
            transition={{ duration: 0.2 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>

      {/* 项目详情按钮 */}
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block"
      >
        <motion.button
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          项目详情
          <ArrowUpRight className="w-4 h-4" />
        </motion.button>
      </a>
    </motion.div>
  );
}
