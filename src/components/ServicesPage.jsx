import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Shield, Workflow, PhoneCall, Calendar, PieChart } from 'lucide-react';

const services = [
  { title: 'AI Voice Agent', icon: Bot, desc: 'Answers calls, qualifies leads, books and reschedules — 24/7 with guardrails.' },
  { title: 'Security & Privacy', icon: Shield, desc: 'Granular access, encryption, and audit-ready logging. Built for compliance.' },
  { title: 'Workflow Automation', icon: Workflow, desc: 'Follow-ups, reminders, approvals, and reporting with human-in-the-loop.' },
  { title: 'Call Intelligence', icon: PhoneCall, desc: 'Transcripts, sentiment, and outcomes piped into your CRM for action.' },
  { title: 'Smart Scheduling', icon: Calendar, desc: 'Real-time availability, waitlist fill, and no-show recovery across channels.' },
];

const tiles = [
  'AI Voice Agent', 'Call Routing', 'Voicemail AI', 'Follow-up SMS', 'Agent QA', 'Transcription',
  'Sentiment', 'Intent Detection', 'RAG Search', 'Knowledge Base', 'HIPAA Controls', 'RBAC',
  'Audit Logs', 'Analytics', 'A/B Testing', 'Call Scoring', 'Scheduler', 'Reminders',
  'Survey CSAT', 'Lead Capture', 'CRM Sync', 'Ticket Sync', 'Webhooks', 'Automation'
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Services</h1>
            <p className="mt-2 text-black/70 max-w-prose">Modular capabilities designed to integrate with your stack and scale with your needs.</p>
          </div>
          <a href="/#book" className="inline-flex items-center rounded-full bg-black text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90">Schedule a Call</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-black/10 p-6 bg-white hover:shadow-sm transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="size-10 rounded-xl bg-black text-white flex items-center justify-center">
                  <s.icon className="size-5" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="text-black/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold">Capabilities</h2>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {tiles.map((t) => (
              <div key={t} className="rounded-xl border border-black/10 p-3 bg-white hover:shadow-sm transition-shadow">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{t}</p>
                  <PieChart className="size-4 text-black/50" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
