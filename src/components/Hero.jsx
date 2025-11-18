import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #A695E7 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-[30rem] h-[30rem] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #8DA9C4 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex items-center justify-center"
        >
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/691cc056a710ec9a02f30c5d/5b7e8df48_logo-degradado-color-horizontal.png"
            alt="Kumo Logo"
            className="h-20 md:h-24 w-auto"
          />
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl text-slate-900 mb-6 leading-tight"
        >
          Cloud & FinOps
          <br />
          <span className="bg-gradient-to-r from-[#8DA9C4] to-[#A695E7] bg-clip-text text-transparent">
            Consulting
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-slate-600 font-light max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Ayudamos a empresas a reducir costos en AWS, optimizar sus cargas
          y mejorar seguridad.
        </motion.p>

        {/* Key value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-10 max-w-4xl mx-auto mb-12 border border-slate-200/50 shadow-xl"
        >
          <p className="text-xl md:text-2xl text-slate-700 font-light leading-relaxed">
            Implementamos <span className="font-medium text-[#A695E7]">dashboards ejecutivos</span>,
            {' '}<span className="font-medium text-[#8DA9C4]">análisis FinOps express</span> y
            {' '}<span className="font-medium text-[#A695E7]">automatización de gobernanza</span>
            {' '}en <span className="font-semibold">días, no meses</span>.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#8DA9C4] to-[#A695E7] hover:opacity-90 text-white px-10 py-7 text-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Comenzar Ahora
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-slate-300 hover:border-[#8DA9C4] hover:bg-slate-50 px-10 py-7 text-lg rounded-full transition-all duration-300"
          >
            Ver Casos de Éxito
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-slate-400"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            <span className="text-sm font-light">Implementación Express</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
