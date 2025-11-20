import React from "react";

const experiences = [
  {
    role: "Software Team Leader",
    company: "AVL — Stuttgart, Germany",
    period: "10/2020 - Present",
    bullets: [
      "Lead BSW software team (10 people). Oversaw technical and organisational growth.",
      "Supervised development, requirements engineering and validation under ASPICE V-model.",
      "Led hiring (>10), RFQs and technical requirement definitions."
    ]
  },
  {
    role: "Technical SW Project Manager",
    company: "AVL — Stuttgart, Germany",
    period: "12/2019 - Present",
    bullets: [
      "Managed software projects for automotive ECUs (>5M€), international coordination.",
      "Responsible for software architecture and supplier management across Germany, Spain, India, Egypt, China."
    ]
  },
  {
    role: "SW Technical Team Lead",
    company: "FICOSA — Barcelona, Spain",
    period: "10/2018 - 11/2019",
    bullets: ["Technical leadership, system architecture, supplier & client contact."]
  },
  {
    role: "Embedded Software Engineer",
    company: "FICOSA — Barcelona, Spain",
    period: "01/2016 - 10/2018",
    bullets: [
      "Embedded software for communication & control units.",
      "Drivers, Legato integration, Python automation tools, debugging and tests."
    ]
  },
  {
    role: "Researcher SDN",
    company: "UNIBO — Bologna, Italy",
    period: "2015",
    bullets: ["SDN/NFV research, OpenDaylight controller implementation (Java)."]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((e, idx) => (
          <div key={idx} className="p-4 border-l-4 border-primary/50 pl-4 bg-white/50 dark:bg-slate-800/40 rounded">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-lg font-semibold">{e.role}</div>
                <div className="text-sm opacity-80">{e.company}</div>
              </div>
              <div className="text-sm opacity-70">{e.period}</div>
            </div>
            <ul className="mt-3 list-disc ml-5 text-sm space-y-1">
              {e.bullets.map((b,i)=> <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
