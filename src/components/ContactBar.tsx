import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

function ContactItem({ icon, text, href }: ContactItemProps) {
  const content = (
    <motion.div
      className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors duration-300 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <span className="text-purple-500">{icon}</span>
      <span className="text-sm">{text}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="no-underline">
        {content}
      </a>
    );
  }

  return content;
}

// 小红书图标组件
function XiaohongshuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      width="18"
      height="18"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
    </svg>
  );
}

export function ContactBar() {
  return (
    <motion.div
      className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.6 }}
    >
      <ContactItem
        icon={<Mail className="w-4 h-4" />}
        text="yufei_he@126.com"
        href="mailto:yufei_he@126.com"
      />
      <ContactItem
        icon={<Phone className="w-4 h-4" />}
        text="19813420408"
        href="tel:19813420408"
      />
      <ContactItem
        icon={<XiaohongshuIcon className="w-4 h-4" />}
        text="小红书"
        href="https://www.xiaohongshu.com"
      />
      <ContactItem
        icon={<Linkedin className="w-4 h-4" />}
        text="LinkedIn"
        href="https://www.linkedin.com"
      />
    </motion.div>
  );
}
