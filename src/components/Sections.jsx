import React from 'react';
import { Bot, PhoneCall, Calendar, Shield, Workflow } from 'lucide-react';

export default function Sections() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Services Overview */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold">Services & Automations</h2>
          <p className="text-black/70 max-w-prose">
            We design, deploy, and maintain AI systems that reduce front-desk load and elevate patient experience.
            Our highlights are shown in bold black so you can quickly see where we drive the most impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="AI Receptionist" icon={Bot}>
              Answers calls, handles FAQs, books/changes appointments, and routes urgent cases.
            </Card>
            <Card title="Smart Scheduling" icon={Calendar}>
              Waitlist fill, no-show recovery, automated reminders across SMS, email, and voice.
            </Card>
            <Card title="Call & Lead Capture" icon={PhoneCall}>
              24/7 intake for new patients with insurance pre-check and triage questions.
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Workflow Automation" icon={Workflow}>
              Post-visit follow-ups, treatment-plan nudges, payment links, and satisfaction surveys.
            </Card>
            <Card title="Privacy & Security" icon={Shield}>
              HIPAA-aware pipelines, role-based access, and audit-ready logging.
            </Card>
          </div>
        </div>

        {/* Process */}
        <div id="process" className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">Our Process</h2>
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-6 list-decimal md:list-none">
            <Step index={1} title="Assess">
              We map front-desk tasks, call flows, and patient touchpoints.
            </Step>
            <Step index={2} title="Prototype">
              Quick pilot that plugs into your calendar and phone system.
            </Step>
            <Step index={3} title="Deploy">
              Go live with guardrails, analytics, and team training.
            </Step>
            <Step index={4} title="Optimize">
              Continuous improvement to boost conversion and satisfaction.
            </Step>
          </ol>
        </div>

        {/* Case Study + Philosophy */}
        <div id="case-study" className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">Case Study</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Urban Smile Dental — AI Receptionist Rollout</h3>
              <ul className="list-disc pl-5 space-y-2 text-black/80">
                <li><strong className="text-black">42% faster</strong> average call resolution within 3 weeks</li>
                <li><strong className="text-black">18% increase</strong> in booked consults from web leads</li>
                <li><strong className="text-black">35% fewer</strong> no-shows via automated reminders</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-black/10 p-6 bg-black text-white">
              <p className="text-sm opacity-90">Our philosophy</p>
              <h3 className="text-2xl font-extrabold mb-2">Human-first automation</h3>
              <p className="text-white/90">
                Automation should feel personal, not robotic. We combine reliable guardrails with empathetic dialog
                so your patients always feel cared for while your team wins back time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, icon: Icon, children }) {
  return (
    <div className="rounded-2xl border border-black/10 p-6 hover:shadow-sm transition-shadow">
      <div className="flex items-center gap-3 mb-3">
        <div className="size-9 rounded-full bg-black text-white flex items-center justify-center">
          <Icon className="size-5" />
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="text-black/70">{children}</p>
    </div>
  );
}

function Step({ index, title, children }) {
  return (
    <li className="rounded-2xl border border-black/10 p-6">
      <div className="flex items-center gap-3 mb-2">
        <span className="inline-flex items-center justify-center size-8 rounded-full bg-black text-white text-sm font-bold">{index}</span>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="text-black/70">{children}</p>
    </li>
  );
}
