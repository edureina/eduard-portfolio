import React from "react";

const skillBuckets = [
  { title: "Languages / Tools", items: ["C", "C++", "Python", "Java", "MATLAB", "Assembler", "git", "Jira"] },
  { title: "Embedded", items: ["Embedded Linux", "Drivers", "Legato", "Microcontrollers", "Debugging"] },
  { title: "Networking / Cloud", items: ["SDN", "OpenDaylight", "Mininet", "NFV", "OpenStack"] },
  { title: "Electronics", items: ["Altium", "PSpice", "Cadence", "LabView"] },
  { title: "Processes", items: ["ASPICE", "Requirements", "System Architecture", "Project Mgmt"] },
  { title: "Languages", items: ["Spanish (native)", "English (C1+)", "German (C1)", "Italian (C1+)", "French (A2)", "Catalan (native)"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillBuckets.map(bucket => (
          <div key={bucket.title} className="p-4 rounded-lg bg-white/70 dark:bg-slate-800/60 border">
            <h3 className="font-semibold mb-2">{bucket.title}</h3>
            <ul className="text-sm space-y-1">
              {bucket.items.map(i => <li key={i}>• {i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
