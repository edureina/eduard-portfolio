import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-12">
      <motion.h2 className="text-2xl font-bold mb-3" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}>About</motion.h2>
      <motion.p className="opacity-90 leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.05 } }}>
        Telecom and Electronics Engineer with 10+ years of international experience in embedded software, automotive ECUs,
        technical leadership and project management. Experienced in system architecture, ASPICE processes and cross-country team leadership.
        Comfortable with low-level drivers, embedded Linux, Python tooling and SDN research.
      </motion.p>
    </section>
  );
}
