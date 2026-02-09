import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FolderOpen, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WatermarkBackground } from '@/components/WatermarkBackground';
import { EducationCard } from '@/components/EducationCard';
import { ContactBar } from '@/components/ContactBar';
import { StaggerContainer, StaggerItem } from '@/components/StaggerContainer';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-lavender-gradient relative overflow-hidden">
      <WatermarkBackground />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <StaggerContainer className="max-w-3xl w-full mx-auto text-center">
          {/* 圆形照片 */}
          <StaggerItem className="flex justify-center mb-6">
            <motion.div
              className="relative"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(124, 58, 237, 0.3)',
                  '0 0 40px rgba(124, 58, 237, 0.5)',
                  '0 0 20px rgba(124, 58, 237, 0.3)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-purple-600">
                <img
                  src="/images/avatar.jpg"
                  alt="何雨飞"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </StaggerItem>

          {/* 姓名 */}
          <StaggerItem className="mb-3">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              何雨飞
            </h1>
          </StaggerItem>

          {/* Slogan */}
          <StaggerItem className="mb-4">
            <p className="text-lg md:text-xl italic text-purple-600 font-medium">
              "Think Big, Analyze Smart, Create Impact"
            </p>
          </StaggerItem>

          {/* 个人简介 */}
          <StaggerItem className="mb-8">
            <p className="text-base text-gray-600 max-w-lg mx-auto">
              一个正在努力学习数据分析、热爱一切技术内容分享的健身狂魔💪
            </p>
          </StaggerItem>

          {/* 教育经历双卡片 */}
          <StaggerItem className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <EducationCard
                school="南京理工大学"
                degree="自动化（本科）"
                period="2020.09 - 2024.06"
                gpa="3.54 / 4.0"
                isLeft={true}
              />
              <EducationCard
                school="布里斯托大学"
                degree="数据科学（硕士）"
                period="2024.09 - 2025.11"
                honor="Distinction"
                isLeft={false}
              />
            </div>
          </StaggerItem>

          {/* 双导航按钮 */}
          <StaggerItem className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="bg-purple-gradient hover:bg-purple-gradient-hover text-white px-8 py-6 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => navigate('/projects')}
                >
                  <FolderOpen className="w-5 h-5 mr-2" />
                  项目经历
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 rounded-xl font-semibold text-base transition-all duration-300"
                  onClick={() => navigate('/internships')}
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  实习经历
                </Button>
              </motion.div>
            </div>
          </StaggerItem>

          {/* 底部联系栏 */}
          <StaggerItem>
            <ContactBar />
          </StaggerItem>
        </StaggerContainer>
      </div>
    </div>
  );
}
