import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    value: '40%',
    label: 'Reducción promedio de costos AWS',
  },
  {
    value: '72h',
    label: 'Tiempo promedio de implementación',
  },
];

export default function Stats() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8DA9C4]/5 via-[#A695E7]/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-3">
                <span
                  className="text-5xl md:text-6xl font-extralight bg-gradient-to-r from-[#8DA9C4] to-[#A695E7] bg-clip-text text-transparent"
                >
                  {stat.value}
                </span>
              </div>
              <p className="text-slate-600 font-light text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}