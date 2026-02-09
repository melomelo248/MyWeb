import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

interface EducationCardProps {
  school: string;
  degree: string;
  period: string;
  gpa?: string;
  honor?: string;
  isLeft?: boolean;
}

export function EducationCard({
  school,
  degree,
  period,
  gpa,
  honor,
  isLeft = true,
}: EducationCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 flex-1 min-w-[280px]"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
          {isLeft ? (
            <GraduationCap className="w-5 h-5 text-purple-600" />
          ) : (
            <Award className="w-5 h-5 text-purple-600" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 text-base mb-1">{school}</h3>
          <p className="text-purple-600 text-sm font-medium mb-1">{degree}</p>
          <p className="text-gray-500 text-xs mb-2">{period}</p>
          {gpa && (
            <div className="inline-flex items-center gap-1 bg-purple-50 px-2 py-1 rounded-full">
              <span className="text-purple-700 text-xs font-medium">GPA: {gpa}</span>
            </div>
          )}
          {honor && (
            <div className="inline-flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-full ml-2">
              <Award className="w-3 h-3 text-amber-600" />
              <span className="text-amber-700 text-xs font-medium">{honor}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
