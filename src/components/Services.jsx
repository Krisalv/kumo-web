import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/Card';
import { TrendingDown, Zap, Shield, BarChart3, Cog, Lock } from 'lucide-react';

const services = [
  {
    icon: TrendingDown,
    title: 'Reducción de Costos',
    description: 'Análisis profundo de tu infraestructura AWS para identificar oportunidades de ahorro inmediatas y recurrentes.',
    color: '#8DA9C4',
  },
  {
    icon: Zap,
    title: 'Optimización de Cargas',
    description: 'Mejoramos el rendimiento de tus aplicaciones cloud con arquitecturas eficientes y escalables.',
    color: '#A695E7',
  },
  {
    icon: Shield,
    title: 'Seguridad Avanzada',
    description: 'Implementación de mejores prácticas de seguridad y compliance para proteger tus activos en la nube.',
    color: '#8DA9C4',
  },
  {
    icon: BarChart3,
    title: 'Dashboards Ejecutivos',
    description: 'Visualización clara de métricas clave para tomar decisiones informadas sobre tu gasto cloud.',
    color: '#A695E7',
  },
  {
    icon: Cog,
    title: 'Automatización de Gobernanza',
    description: 'Políticas y controles automáticos para mantener el orden y la eficiencia en tu entorno AWS.',
    color: '#8DA9C4',
  },
  {
    icon: Lock,
    title: 'FinOps Express',
    description: 'Análisis rápido de costos y recomendaciones accionables en días para tu equipo financiero.',
    color: '#A695E7',
  },
];

export default function Services() {
  return (
    <section className="py-32 px-6 relative">
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
            Nuestros Servicios
          </h2>
          <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
            Soluciones integrales para optimizar tu inversión en AWS
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm group">
                <CardContent className="p-8">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                    }}
                  >
                    <service.icon
                      className="w-8 h-8"
                      style={{ color: service.color }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-2xl text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-light">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
