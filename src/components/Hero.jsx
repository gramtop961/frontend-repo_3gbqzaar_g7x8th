import React from 'react';
import Spline from '@splinetool/react-spline';

// Local error boundary to prevent Spline load errors from crashing the app
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('Spline render error:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default function Hero() {
  const [splineFailed, setSplineFailed] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const cover = (
    <div className="relative h-[75vh] w-full overflow-hidden">
      {!splineFailed && mounted && (
        <ErrorBoundary
          fallback={
            <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-100" />
          }
        >
          <Spline
            scene="https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
            onLoad={() => {
              // Loaded successfully
            }}
            onError={() => setSplineFailed(true)}
          />
        </ErrorBoundary>
      )}

      {(splineFailed || !mounted) && (
        <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-100" />
      )}

      {/* Non-blocking soft white gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Elevate your product with modern, human-centered design
          </h1>
          <p className="mt-4 text-neutral-600 text-base md:text-lg">
            We craft beautiful, performant experiences and back them with real business impact.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-md bg-black text-white shadow">
              Book a call
            </a>
            <a href="#services" className="inline-flex items-center px-5 py-3 rounded-md border border-neutral-300 bg-white">
              Explore services
            </a>
          </div>
        </div>

        {/* Dashboard preview card (top-right) */}
        <div className="absolute right-4 top-4 md:right-8 md:top-8">
          <div className="rounded-xl border border-neutral-200 bg-white/90 backdrop-blur shadow-sm p-4 w-64">
            <div className="text-sm font-medium">Live Metrics</div>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="text-neutral-500">CTR</div>
                <div className="font-semibold">4.8%</div>
              </div>
              <div>
                <div className="text-neutral-500">Signups</div>
                <div className="font-semibold">+312</div>
              </div>
              <div>
                <div className="text-neutral-500">Load</div>
                <div className="font-semibold">1.2s</div>
              </div>
              <div>
                <div className="text-neutral-500">NPS</div>
                <div className="font-semibold">68</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="dashboard" aria-label="Hero">
      {cover}
    </section>
  );
}
