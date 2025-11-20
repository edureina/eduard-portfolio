import React from "react";

const projects = [
  { title: "Inverter for electric motor", role: "SW Technical Project Manager / Architect", desc: "Led 12-person team for software architecture and delivery." },
  { title: "Smart seat unit", role: "SW Technical Project Manager / Architect", desc: "Responsible for embedded software and integration." },
  { title: "Surround view camera system", role: "SW Technical Project Manager / Architect", desc: "System architect and project lead." },
  { title: "Rear camera system", role: "Embedded SW Developer / PM", desc: "Embedded development and later project leadership." }
];

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-bold mb-6">Selected Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p,i)=>(
          <div key={i} className="p-4 border rounded-lg bg-white/60 dark:bg-slate-800/50">
            <div className="font-semibold">{p.title}</div>
            <div className="text-sm opacity-80">{p.role}</div>
            <p className="mt-2 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
