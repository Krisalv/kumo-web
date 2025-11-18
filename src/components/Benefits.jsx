import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Users, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Velocidad de Implementación',
    description: 'No esperamos meses. Configuramos dashboards y análisis en días para que veas resultados inmediatos.',
  },
  {
    icon: Users,
    title: 'Equipo Experto',
    description: 'Profesionales certificados en AWS con años de experiencia en optimización de costos y FinOps.',
  },
  {
    icon: Sparkles,
    title: 'Enfoque Personalizado',
    description: 'Cada empresa es única. Diseñamos soluciones adaptadas a tu infraestructura y objetivos específicos.',
  },
  {
    icon: CheckCircle2,
    title: 'ROI Garantizado',
    description: 'Nuestra inversión se paga sola. Los ahorros generados superan ampliamente el costo de nuestros servicios.',
  },
];

export default function Benefits() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
            ¿Por qué elegir Kumo?
          </h2>
          <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
            Más que una consultoría, somos tu socio estratégico en la nube
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex gap-6 group"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8DA9C4]/20 to-[#A695E7]/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
                  <benefit.icon
                    className="w-7 h-7 text-[#A695E7]"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}