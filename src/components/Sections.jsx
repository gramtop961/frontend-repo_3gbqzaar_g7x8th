import React, { useState } from 'react';

function SectionWrapper({ id, title, children, subtitle }) {
  return (
    <section id={id} className="w-full py-16 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black">{title}</h2>
          {subtitle ? (
            <p className="mt-2 text-gray-600 max-w-3xl">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export default function Sections() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What problems do you solve?',
      a: 'We design and deploy AI copilots and automations that reduce handle time, improve CSAT, and unlock new revenue across support, sales, and ops.'
    },
    {
      q: 'How fast can we launch?',
      a: 'Most pilots go live in 2–3 weeks with iterative improvements shipped weekly after baseline KPIs are met.'
    },
    {
      q: 'How do you measure success?',
      a: 'We establish a shared scorecard covering CSAT, resolution rate, AHT, and deflection, and instrument every flow end-to-end.'
    },
  ];

  return (
    <div className="bg-white text-black">
      <SectionWrapper
        id="services"
        title="Services"
        subtitle="Strategy, implementation, and ongoing optimization—tailored to your stack and goals."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'AI Assistants',
              desc: 'Custom copilots for support, sales, and internal ops with retrieval and tool use.'
            },
            {
              title: 'Automation',
              desc: 'Workflow automation that connects your CRM, helpdesk, data warehouse, and apps.'
            },
            {
              title: 'Analytics',
              desc: 'Dashboards and evaluations that track impact, quality, and safety.'
            },
          ].map((card) => (
            <div key={card.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="process"
        title="Process"
        subtitle="A pragmatic, outcome-focused approach that derisks deployment."
      >
        <ol className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '1. Discover', desc: 'Scope goals, constraints, and integration points.' },
            { step: '2. Design', desc: 'Craft flows, prompts, and safety rails with evals.' },
            { step: '3. Ship', desc: 'Implement, integrate, and launch a production pilot.' },
            { step: '4. Scale', desc: 'Iterate, automate, and expand coverage with guardrails.' },
          ].map((s) => (
            <li key={s.step} className="rounded-xl border border-gray-200 p-5 bg-white">
              <p className="text-sm font-medium text-gray-500">{s.step}</p>
              <p className="mt-1 text-sm text-gray-700">{s.desc}</p>
            </li>
          ))}
        </ol>
      </SectionWrapper>

      <SectionWrapper
        id="faq"
        title="Client FAQ"
        subtitle="Clear answers to the most common questions we hear."
      >
        <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
          {faqs.map((item, idx) => (
            <div key={item.q} className="p-5">
              <button
                className="w-full flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="font-medium">{item.q}</span>
                <span className="ml-4 text-gray-500">{openIndex === idx ? '−' : '+'}</span>
              </button>
              {openIndex === idx && (
                <p className="mt-3 text-sm text-gray-700">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="philosophy"
        title="Our Philosophy"
        subtitle="Ship value fast, measure honestly, and earn the right to scale."
      >
        <div className="prose prose-sm max-w-none text-gray-700">
          <p>
            We believe AI belongs in production—measured, safe, and customer-first. We prioritize
            reliability over hype and transparency over black boxes. Every engagement is designed to
            create compounding leverage for your team.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="cases"
        title="Case Studies"
        subtitle="A sampling of outcomes from recent deployments."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { kpi: '−43% AHT', company: 'B2C Support', blurb: 'Virtual agent handles Tier-1 across 6 channels.' },
            { kpi: '+22% Win Rate', company: 'SaaS Sales', blurb: 'Lead qual copilot accelerates discovery.' },
            { kpi: '95% CSAT', company: 'Fintech Ops', blurb: 'Automations resolve routine tasks end-to-end.' },
          ].map((c) => (
            <article key={c.kpi} className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
              <p className="text-sm font-semibold">{c.kpi}</p>
              <p className="text-sm text-gray-500">{c.company}</p>
              <p className="mt-2 text-sm text-gray-700">{c.blurb}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="testimonials"
        title="Testimonials"
        subtitle="What partners say about working with us."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              quote: 'The team delivered measurable impact in weeks, not months—our customers noticed immediately.',
              name: 'VP of Support, Consumer App'
            },
            {
              quote: 'They balanced safety and speed perfectly. The automation ROI was undeniable.',
              name: 'Head of Ops, Fintech'
            },
          ].map((t, i) => (
            <blockquote key={i} className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
              <p className="text-sm text-gray-800">“{t.quote}”</p>
              <p className="mt-3 text-xs text-gray-500">{t.name}</p>
            </blockquote>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
