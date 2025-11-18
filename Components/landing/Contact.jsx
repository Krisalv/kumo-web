import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #8DA9C4 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8DA9C4] to-transparent opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A695E7] to-transparent opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 leading-tight">
            ¿Listo para optimizar
            <br />
            <span className="bg-gradient-to-r from-[#8DA9C4] to-[#A695E7] bg-clip-text text-transparent">
              tu inversión en AWS?
            </span>
          </h2>

          <p className="text-xl text-slate-600 font-light mb-12 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cuánto puedes ahorrar en tu factura de AWS
          </p>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-white via-white to-[#A695E7]/5 rounded-3xl p-12 shadow-2xl border border-slate-200/50 backdrop-blur-sm"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#8DA9C4] to-[#A695E7] hover:opacity-90 text-white px-10 py-7 text-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contactar Ahora
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-slate-700 hover:text-[#8DA9C4] px-8 py-7 text-lg rounded-full transition-all duration-300"
              >
                Ver Análisis Gratuito
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-light">
              <span>✓ Sin compromiso</span>
              <span className="hidden sm:inline">•</span>
              <span>✓ Respuesta en 24h</span>
              <span className="hidden sm:inline">•</span>
              <span>✓ Análisis inicial gratuito</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-400 font-light text-sm">
            © 2024 Kumo Cloud Consulting. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </section>
  );
}