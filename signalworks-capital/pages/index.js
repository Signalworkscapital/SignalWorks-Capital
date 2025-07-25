import React from 'react';

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#0A1A2F] text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-700">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white text-black font-bold flex items-center justify-center rounded">S</div>
          <span className="text-2xl font-bold">SignalWorks Capital</span>
        </div>
        <div className="space-x-6 text-lg">
          <a href="#about" className="hover:text-slate-300">About Us</a>
          <a href="#performance" className="hover:text-slate-300">Performance</a>
          <a href="#team" className="hover:text-slate-300">Team</a>
          <a href="#mission" className="hover:text-slate-300">Our Mission</a>
          <a href="#help" className="hover:text-slate-300">Help</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-32 px-4 bg-gradient-to-b from-[#0A1A2F] to-[#102A44]">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-white text-black text-3xl font-bold flex items-center justify-center rounded-xl">S</div>
        </div>
        <h1 className="text-5xl font-bold mb-6">Precision. Performance. Purpose.</h1>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          At SignalWorks Capital, we harness the power of data-driven strategies and disciplined execution to deliver exceptional results in dynamic markets.
        </p>
        <button className="text-lg px-8 py-4 rounded-2xl bg-white text-[#0A1A2F] hover:bg-slate-100 font-semibold">
          Explore Our Strategy
        </button>
      </section>

      {/* Sections - Placeholder Content */}
      <section id="about" className="py-24 px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-lg text-slate-300">
          SignalWorks Capital was founded with the belief that consistent alpha can be achieved through signal-based systems, strict risk management, and adaptive frameworks.
        </p>
      </section>

      <section id="performance" className="py-24 px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Performance</h2>
        <p className="text-lg text-slate-300">Backtest & live results coming soon.</p>
      </section>

      <section id="team" className="py-24 px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Team</h2>
        <p className="text-lg text-slate-300">Meet the minds behind the models. (Coming soon)</p>
      </section>

      <section id="mission" className="py-24 px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg text-slate-300">
          To combine innovative market signals with institutional discipline, creating opportunity through clarity and structure.
        </p>
      </section>

      <section id="help" className="py-24 px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Help</h2>
        <p className="text-lg text-slate-300">For inquiries, please contact us at <a href="mailto:info@signalworkscapital.com" className="underline">info@signalworkscapital.com</a></p>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-slate-700 text-slate-400">
        &copy; {currentYear} SignalWorks Capital. All rights reserved.
      </footer>
    </div>
  );
}
