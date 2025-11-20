import React from "react";
import { motion } from "framer-motion";
import Foto from "../assets/foto_edu.jpg";

export default function Hero() {
  return (
    <section className="pt-12 pb-8 text-center">
      <motion.img
        src={Foto}
        alt="Eduard Reina"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-40 h-40 object-cover avatar-frame"
      />
      <motion.h1
        className="mt-6 text-3xl sm:text-4xl font-bold"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Eduard Reina
      </motion.h1>
      <motion.p
        className="mt-2 text-lg opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
      >
        Software Team Leader · Embedded Systems · Automotive · SDN researcher
      </motion.p>
      <div className="mt-4 flex justify-center gap-3">
        <a className="px-4 py-2 border rounded hover:shadow" href="mailto:eduard.reina@gmail.com">Contact</a>
        <a className="px-4 py-2 border rounded hover:shadow" href="https://github.com/edureina" target="_blank" rel="noreferrer">GitHub</a>
        <a className="px-4 py-2 border rounded hover:shadow" href="https://www.linkedin.com/in/eduard-reina-fuente-692107a3/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}
