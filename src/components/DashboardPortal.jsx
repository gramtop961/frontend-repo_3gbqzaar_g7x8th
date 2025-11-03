import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BarChart3, Cpu, Activity } from 'lucide-react';

export default function DashboardPortal() {
  return (
    <section id="dashboard" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Dashboard Portal</h2>
            <p className="mt-2 text-black/70 max-w-prose">A secure command center for real-time operations, analytics, and controls.</p>
          </div>
          <a href="#book" className="inline-flex items-center rounded-full bg-black text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90">Request Access</a>
        </div>

        {/* Mock dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl border border-black/10 bg-white shadow-sm overflow-hidden"
        >
          <div className="border-b border-black/10 px-6 py-3 flex items-center gap-2 text-sm">
            <div className="size-2 rounded-full bg-rose-400" />
            <div className="size-2 rounded-full bg-amber-400" />
            <div className="size-2 rounded-full bg-emerald-400" />
            <span className="ml-3 text-black/60">portal.velodent.ai</span>
          </div>

          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card title="Operational Health" icon={Activity}>
                <div className="h-36 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl" />
                <MetricsRow />
              </Card>
              <Card title="Call Analytics" icon={BarChart3}>
                <div className="h-36 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-xl" />
                <MetricsRow />
              </Card>
              <Card title="Compliance" icon={Shield}>
                <ul className="text-sm text-black/70 space-y-2">
                  <li>• Role-based access (RBAC)</li>
                  <li>• PHI masking on export</li>
                  <li>• Audit log streaming</li>
                </ul>
              </Card>
              <Card title="Automation Runs" icon={Cpu}>
                <div className="h-36 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl" />
                <MetricsRow />
              </Card>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-1 rounded-2xl border border-black/10 p-5 bg-white sticky top-24 self-start"
            >
              <h3 className="text-lg font-semibold">Why this matters</h3>
              <p className="mt-2 text-sm text-black/70">Real-time insights, controls, and safety rails keep operations smooth while maintaining privacy and trust.</p>
              <a href="#book" className="mt-5 inline-flex items-center rounded-full border border-black px-4 py-2 text-sm font-semibold hover:bg-black hover:text-white">See it live</a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Card({ title, icon: Icon, children }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="rounded-2xl border border-black/10 p-5 bg-white hover:shadow-sm"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="size-9 rounded-xl bg-black text-white flex items-center justify-center">
          <Icon className="size-4" />
        </div>
        <h4 className="text-base font-semibold">{title}</h4>
      </div>
      {children}
    </motion.div>
  );
}

function MetricsRow() {
  return (
    <div className="mt-4 grid grid-cols-3 gap-3">
      {["Uptime", "NPS", "SLAs"].map((k, i) => (
        <div key={k} className="rounded-xl border border-black/10 p-3 text-sm">
          <p className="text-black/60">{k}</p>
          <p className="mt-1 font-semibold">{["99.99%", "+72", "100%"][i]}</p>
        </div>
      ))}
    </div>
  );
}
