import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Stats from '../components/Stats';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Hero />
      <Services />
      <Stats />
      <Benefits />
      <Contact />
    </div>
  );
}
