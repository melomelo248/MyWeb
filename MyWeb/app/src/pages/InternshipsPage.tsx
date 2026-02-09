import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WatermarkBackground } from '@/components/WatermarkBackground';
import { InternshipTimelineItem } from '@/components/InternshipTimelineItem';
import { internships } from '@/data/internships';
import { AnimatedSection } from '@/components/AnimatedSection';

export function InternshipsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-lavender-gradient relative overflow-hidden">
      <WatermarkBackground />
      
      <div className="relative z-10 py-12 px-4">
        {/* 返回按钮 */}
        <div className="max-w-6xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-purple-600 hover:bg-purple-50"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首页
            </Button>
          </motion.div>
        </div>

        {/* 页面标题 */}
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Briefcase className="w-8 h-8 text-purple-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              实习经历
            </h1>
          </div>
          <p className="text-gray-500 text-lg">Internship Experience</p>
        </AnimatedSection>

        {/* 时间轴实习列表 */}
        <div className="max-w-6xl mx-auto relative">
          {/* 时间轴线 - 使用伪元素确保居中 */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-300 transform -translate-x-1/2" />

          {/* 移动端时间轴线 */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-purple-300" />

          {/* 实习列表 */}
          <div className="space-y-16 md:space-y-20">
            {internships.map((internship, index) => (
              <InternshipTimelineItem
                key={internship.id}
                internship={internship}
                index={index}
                isReversed={index % 2 === 1} // 奇数项反转（右边图片左边详情）
              />
            ))}
          </div>
        </div>

        {/* 底部返回按钮 */}
        <AnimatedSection className="text-center mt-20">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="outline"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-5 rounded-xl font-semibold"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首页
            </Button>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
}
