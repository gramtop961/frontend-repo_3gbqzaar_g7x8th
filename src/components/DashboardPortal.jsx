import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BarChart3, Cpu, Activity, Database, Headphones, Clock, PieChart } from 'lucide-react';

export default function DashboardPortal() {
  return (
    <section id="dashboard" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Dashboard Portal</h2>
            <p className="mt-2 text-black/70 max-w-prose">A minimalist, data-rich command center for operations, analytics, and controls.</p>
          </div>
          <a href="#book" className="inline-flex items-center rounded-full bg-black text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90">Request Access</a>
        </div>

        {/* Dense dashboard preview */}
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
                <div className="h-40 rounded-xl border border-black/10 p-3">
                  <AreaSparkline />
                </div>
                <MetricsRow labels={["Uptime","Tickets","Latency"]} values={["99.99%","-18%","142ms"]} />
              </Card>

              <Card title="Call Analytics" icon={BarChart3}>
                <div className="h-40 rounded-xl border border-black/10 p-3">
                  <LineChart />
                </div>
                <MetricsRow labels={["Volume","CSAT","AHT"]} values={["2.3k","4.8/5","03:42"]} />
              </Card>

              <Card title="Compliance" icon={Shield}>
                <ul className="text-sm text-black/70 space-y-2">
                  <li>• Role-based access (RBAC)</li>
                  <li>• PHI masking on export</li>
                  <li>• Audit log streaming</li>
                </ul>
              </Card>

              <Card title="Automation Runs" icon={Cpu}>
                <div className="h-40 rounded-xl border border-black/10 p-3">
                  <MiniBars />
                </div>
                <MetricsRow labels={["Today","Success","Retries"]} values={["186","99.1%","2"]} />
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
              <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-black/70">
                <Badge icon={Database} label="HIPAA" />
                <Badge icon={Headphones} label="Voice AI" />
                <Badge icon={Clock} label="24/7" />
              </div>
              <a href="#book" className="mt-5 inline-flex items-center rounded-full border border-black px-4 py-2 text-sm font-semibold hover:bg-black hover:text-white">See it live</a>
            </motion.div>
          </div>
        </motion.div>

        {/* Services & CRM logos */}
        <motion.div id="services" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mt-20">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Services</h3>
              <p className="mt-2 text-black/70 max-w-prose">Built to integrate with your stack — Open Dental and leading CRMs — with a clean black & white aesthetic.</p>
            </div>
            <a href="#book" className="inline-flex items-center rounded-full border border-black px-4 py-2 text-sm font-semibold hover:bg-black hover:text-white">Get a demo</a>
          </div>

          {/* CRM badges (monochrome) */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
            {['Open Dental','Dentrix','Eaglesoft','Salesforce','HubSpot','Zendesk','Freshdesk','Zoho'].map((n) => (
              <span key={n} className="px-3 py-1 rounded-full border border-black/10 text-black bg-white">{n}</span>
            ))}
          </div>

          {/* 24 minimalist service tiles */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {services24.map((s) => (
              <div key={s} className="rounded-xl border border-black/10 p-3 bg-white hover:shadow-sm transition-shadow">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{s}</p>
                  <PieChart className="size-4 text-black/50" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Case studies with horizontal short videos */}
        <motion.div id="cases" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mt-20">
          <h3 className="text-2xl font-semibold tracking-tight">Case Studies</h3>
          <p className="mt-2 text-black/70">Short, visual stories of outcomes. Swipe horizontally.</p>
          <div className="mt-6 overflow-x-auto [-webkit-overflow-scrolling:touch]">
            <div className="flex gap-4 min-w-max">
              {shorts.map((id) => (
                <div key={id} className="w-[320px] flex-none rounded-2xl border border-black/10 bg-white overflow-hidden">
                  <div className="relative w-full aspect-[16/9] bg-black">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${id}`}
                      title="Case study video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4 text-sm">
                    <p className="font-semibold">Outcome highlight</p>
                    <p className="mt-1 text-black/70">Conversion lift, wait-time drop, and quality increases.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Video testimonials (ordered) + FAQ */}
        <motion.div id="testimonials" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold tracking-tight">Video Testimonials</h3>
            <ol className="mt-6 space-y-4 list-decimal list-inside">
              {testimonialIds.map((id, i) => (
                <li key={id} className="rounded-2xl border border-black/10 bg-white overflow-hidden">
                  <div className="relative w-full aspect-video">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${id}`}
                      title={`Testimonial ${i+1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4 text-sm">
                    <p className="font-semibold">Client testimonial</p>
                    <p className="mt-1 text-black/70">Onboarding, outcomes, and partnership quality.</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold tracking-tight">FAQ</h3>
            <div className="mt-4 divide-y divide-black/10 border border-black/10 rounded-2xl overflow-hidden">
              {faqs.map((f) => (
                <details key={f.q} className="group open:bg-white">
                  <summary className="cursor-pointer select-none list-none px-4 py-3 text-sm font-medium flex items-center justify-between">
                    <span>{f.q}</span>
                    <span className="ml-3 text-black/50 group-open:rotate-45 transition">+</span>
                  </summary>
                  <div className="px-4 pb-4 text-sm text-black/70">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Card({ title, icon: Icon, children }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="rounded-2xl border border-black/10 p-5 bg-white hover:shadow-sm">
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

function MetricsRow({ labels = ["Uptime","NPS","SLAs"], values = ["99.99%","+72","100%"] }) {
  return (
    <div className="mt-4 grid grid-cols-3 gap-3">
      {labels.map((k, i) => (
        <div key={k} className="rounded-xl border border-black/10 p-3 text-sm">
          <p className="text-black/60">{k}</p>
          <p className="mt-1 font-semibold">{values[i]}</p>
        </div>
      ))}
    </div>
  );
}

function LineChart() {
  const points = [
    { x: 0, y: 42 }, { x: 10, y: 38 }, { x: 20, y: 50 }, { x: 30, y: 46 },
    { x: 40, y: 62 }, { x: 50, y: 57 }, { x: 60, y: 70 }, { x: 70, y: 66 },
    { x: 80, y: 78 }, { x: 90, y: 74 }, { x: 100, y: 88 }
  ];
  const path = points.map(p => `${p.x},${100 - p.y}`).join(' ');
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#111827" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#111827" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[20, 40, 60, 80].map((y) => (
        <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#e5e7eb" strokeWidth="0.5" />
      ))}
      <polygon points={`0,100 ${path} 100,100`} fill="url(#grad)" />
      <polyline points={path} fill="none" stroke="#111827" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="100" cy={100 - 88} r="1.5" fill="#111827" />
    </svg>
  );
}

function MiniBars() {
  const bars = [10, 22, 18, 30, 26, 34, 28, 38, 33, 42, 40, 48];
  const max = Math.max(...bars);
  return (
    <div className="flex items-end h-full gap-1">
      {bars.map((v, i) => (
        <div key={i} className="flex-1 bg-black/10 rounded" style={{ height: `${(v / max) * 100}%` }} />
      ))}
    </div>
  );
}

function AreaSparkline() {
  const points = [0, 4, 3, 6, 8, 7, 9, 11, 10, 13, 12];
  const poly = points.map((y, i) => `${i * 10},${50 - y}`).join(' ');
  return (
    <svg viewBox="0 0 100 50" className="w-full h-full">
      <defs>
        <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#111827" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#111827" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,50 ${poly} 100,50`} fill="url(#grad2)" />
      <polyline points={poly} fill="none" stroke="#111827" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function Badge({ icon: Icon, label }) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full border border-black/10 px-2 py-1 bg-white">
      <Icon className="size-3.5" />
      <span>{label}</span>
    </div>
  );
}

const services24 = [
  'AI Voice Agent', 'Call Routing', 'Voicemail AI', 'Follow-up SMS', 'Agent QA', 'Transcription',
  'Sentiment', 'Intent Detection', 'RAG Search', 'Knowledge Base', 'HIPAA Controls', 'RBAC',
  'Audit Logs', 'Analytics', 'A/B Testing', 'Call Scoring', 'Scheduler', 'Reminders',
  'Survey CSAT', 'Lead Capture', 'CRM Sync', 'Ticket Sync', 'Webhooks', 'Automation'
];

// Sample short/YouTube IDs (replace with your links anytime)
const shorts = ['Nw478YoO3og', 'Nw478YoO3og', 'Nw478YoO3og'];
const testimonialIds = ['Nw478YoO3og', 'Nw478YoO3og'];
