export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--aksh-ivory)] text-[var(--aksh-text)]">
      <section className="flex min-h-screen items-center justify-center px-6 py-16">
        <div className="w-full max-w-3xl text-center">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-[var(--aksh-gold)]">
            AKSH Mental Wellness
          </p>

          <h1 className="text-5xl font-light leading-tight tracking-tight sm:text-6xl md:text-7xl">
            A Safe Space for Every Mind
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--aksh-muted)] sm:text-xl">
            You don’t have to have everything figured out.
            <br />
            Sometimes, you just need a safe space to begin.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              className="min-h-12 rounded-full bg-[var(--aksh-plum)] px-7 py-3 text-sm font-medium text-[var(--aksh-ivory)] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Begin Your Journey
            </button>

            <button
              type="button"
              className="min-h-12 rounded-full border border-[var(--aksh-border)] px-7 py-3 text-sm font-medium text-[var(--aksh-plum)] transition-colors duration-300 hover:bg-white/60"
            >
              Meet AKSH AI
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
