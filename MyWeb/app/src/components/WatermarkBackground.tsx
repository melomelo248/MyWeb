import { motion } from 'framer-motion';

const watermarks = [
  { text: 'Think Big', x: '5%', y: '10%', size: '5rem', delay: 0 },
  { text: 'Analyze', x: '75%', y: '15%', size: '4rem', delay: 0.5 },
  { text: 'Smart', x: '15%', y: '35%', size: '3.5rem', delay: 1 },
  { text: 'Create', x: '80%', y: '40%', size: '4.5rem', delay: 1.5 },
  { text: 'Impact', x: '25%', y: '60%', size: '5rem', delay: 2 },
  { text: 'Data', x: '70%', y: '65%', size: '3rem', delay: 0.3 },
  { text: 'Science', x: '10%', y: '80%', size: '4rem', delay: 0.8 },
  { text: 'Innovation', x: '60%', y: '85%', size: '3.5rem', delay: 1.3 },
];

export function WatermarkBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {watermarks.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-purple-200 font-bold select-none"
          style={{
            left: item.x,
            top: item.y,
            fontSize: item.size,
            opacity: 0.06,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.06,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: item.delay },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: item.delay,
            },
          }}
        >
          {item.text}
        </motion.div>
      ))}
    </div>
  );
}
