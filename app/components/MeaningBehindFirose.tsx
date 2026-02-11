const firosePillars = [
  {
    letter: 'F',
    name: 'Foundation',
    description: 'We build on strong principles, disciplined execution, and enduring structure.',
  },
  {
    letter: 'I',
    name: 'Innovation',
    description: 'We continuously evolve, embracing technology and forward-thinking solutions.',
  },
  {
    letter: 'R',
    name: 'Responsibility',
    description: 'We operate with integrity, accountability, and commitment to excellence.',
  },
  {
    letter: 'O',
    name: 'Opportunity',
    description: 'We create platforms for growth for our brands, partners, and communities.',
  },
  {
    letter: 'S',
    name: 'Sustainability',
    description: 'We focus on long-term impact, ensuring resilience and responsible expansion.',
  },
  {
    letter: 'E',
    name: 'Excellence',
    description: 'We pursue the highest standards in quality, performance, and leadership across every division.',
  },
] as const;

export default function MeaningBehindFirose() {
  return (
    <section
      aria-labelledby="meaning-behind-firose-title"
      className="fe-panel fe-reveal fe-delay-2 relative overflow-hidden p-5 sm:p-7"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(72%_82%_at_18%_0%,rgba(201,169,108,0.12)_0%,rgba(201,169,108,0)_72%)]"
      />

      <header className="relative mx-auto max-w-3xl text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#b59f75]">Enterprise Identity</p>
        <h2 id="meaning-behind-firose-title" className="mt-2 text-3xl font-normal text-[#f8f1e3] sm:text-4xl">
          The Meaning Behind FIROSE
        </h2>
        <p className="mt-3 text-sm text-[#b7ac97] sm:text-base">
          FIROSE represents six pillars that drive every strategic decision, leadership action, and growth path across
          the group.
        </p>
      </header>

      <ul className="relative mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3" role="list">
        {firosePillars.map((pillar) => (
          <li key={pillar.letter}>
            <article
              className="group h-full rounded-2xl border border-[#e0c89331] bg-[#15120eb5] p-4 transition duration-500 hover:-translate-y-0.5 hover:border-[#e0c8937b] hover:bg-[#1d1813d6]"
              aria-labelledby={`pillar-${pillar.letter}`}
            >
              <div className="flex items-start gap-3">
                <p
                  aria-hidden="true"
                  className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#e0c8935c] bg-[#3a2d1e75] text-2xl font-normal text-[#ecd2a0]"
                >
                  {pillar.letter}
                </p>

                <div>
                  <h3 id={`pillar-${pillar.letter}`} className="text-2xl font-normal text-[#f2e7cf]">
                    {pillar.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#b7ac97]">{pillar.description}</p>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
