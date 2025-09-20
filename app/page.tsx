"use client";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative overflow-hidden gradient-hero">
        <nav className="section flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-indigo-500/90 shadow-ring" />
            <span className="text-lg font-semibold tracking-tight">YourBrand</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-gray-500 dark:text-gray-300">
            <a href="#features" className="hover:text-indigo-500 transition-colors">Features</a>
            <a href="#showcase" className="hover:text-indigo-500 transition-colors">Showcase</a>
            <a href="#faq" className="hover:text-indigo-500 transition-colors">FAQ</a>
            <a href="#contact" className="btn btn-outline">Get in touch</a>
          </div>
        </nav>

        <div className="section relative py-24 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <span className="badge mb-4">Now in Open Beta</span>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-6xl">
              Launch beautiful web experiences, faster.
            </h1>
            <p className="mt-6 text-pretty text-lg text-gray-600 dark:text-gray-300">
              A modern starter to ship your next idea without the boilerplate. Thoughtful defaults,
              elegant components, and performance baked in.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="btn btn-primary">Get Started</a>
              <a href="#showcase" className="btn btn-outline">See it in action</a>
              <button
                type="button"
                className="btn btn-outline"
                onClick={async (e) => {
                  e.preventDefault();
                  const btn = e.currentTarget as HTMLButtonElement;
                  const resultEl = document.getElementById("ping-result");
                  try {
                    btn.disabled = true;
                    if (resultEl) resultEl.textContent = "Calling API...";
                    type PingResponse = import("./api/ping/route").PingResponse;
                    const res = await fetch("/api/ping", { method: "GET" });
                    if (!res.ok) {
                      throw new Error(`Ping failed: ${res.status}`);
                    }
                    const data: PingResponse = await res.json();
                    if (resultEl) {
                      resultEl.textContent = `${data.message} at ${data.timestamp}`;
                    }
                  } catch (err) {
                    if (resultEl) {
                      resultEl.textContent = "Error calling API.";
                    }
                    console.error(err);
                  } finally {
                    btn.disabled = false;
                  }
                }}
              >
                Call API
              </button>
            </div>
            <div id="ping-result" className="mt-3 text-sm text-gray-600 dark:text-gray-300" />
            <div className="mt-6 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
              <span className="kbd">⌘</span>
              <span className="kbd">K</span>
              <span>Quick actions</span>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card p-6">
              <h3 className="text-lg font-semibold">Polished UI</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Clean, accessible components that look great out of the box.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold">Performance-first</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Ship fast with optimized assets and best practices.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold">Type-safe by default</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Built with TypeScript for confidence and scale.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section id="features" className="section py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Flexible building blocks to craft your product’s story and convert visitors.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Beautiful by default", desc: "Well-structured styles and spacing." },
            { title: "Dark mode ready", desc: "Looks stunning in any theme preference." },
            { title: "Responsive layout", desc: "Designed mobile-first and scales up gracefully." },
            { title: "No bloat", desc: "Minimal footprint, maximum impact." },
            { title: "Accessible", desc: "Inclusive experiences for everyone." },
            { title: "Production-ready", desc: "Start here, go to market faster." },
          ].map((f) => (
            <div key={f.title} className="card p-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-indigo-500/20 ring-1 ring-indigo-500/30" />
                <div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase */}
      <section id="showcase" className="section py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Showcase your product</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Bring your ideas to life with elegant sections and smooth interactions.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                Optimized for clarity and conversion
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                Easy to customize and extend
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                Built with modern best practices
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="card p-3">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-500/30">
                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35)_0,transparent_40%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.2)_0,transparent_35%)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="section py-20">
        <div className="card overflow-hidden">
          <div className="grid items-center gap-6 p-8 sm:grid-cols-2 sm:p-12">
            <div>
              <h3 className="text-2xl font-bold">Ready to launch?</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Start building with a foundation that scales with you.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="btn btn-primary">Start free</a>
                <a href="#faq" className="btn btn-outline">Learn more</a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-tr from-indigo-500/30 via-sky-500/20 to-emerald-500/30" />
              <div className="absolute -right-3 -top-3 hidden h-12 w-12 rounded-full bg-indigo-500/40 blur-lg sm:block" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently asked questions</h2>
          <div className="mt-8 space-y-4">
            {[
              {
                q: "Can I customize the design?",
                a: "Absolutely. The components are unopinionated and easy to theme with Tailwind.",
              },
              {
                q: "Does it support dark mode?",
                a: "Yes. It respects system preference and is designed for great contrast.",
              },
              {
                q: "Is it production-ready?",
                a: "Yes. Clean structure, performance-minded, and scalable.",
              },
            ].map((item) => (
              <details key={item.q} className="card group p-5 open:shadow-ring">
                <summary className="cursor-pointer list-none select-none text-base font-semibold">
                  <span className="mr-2">Q:</span>{item.q}
                </summary>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="section py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-indigo-500/90" />
            <span className="text-sm font-semibold">YourBrand</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-300">
            <a href="#features" className="hover:text-indigo-500">Features</a>
            <a href="#faq" className="hover:text-indigo-500">FAQ</a>
            <a href="#contact" className="hover:text-indigo-500">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
