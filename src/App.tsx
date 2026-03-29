import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { messages } from './i18n/messages'
import { useLocale } from './i18n/useLocale'

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-sand">{children}</p>
}

function App() {
  const { locale, setLocale } = useLocale()
  const copy = messages[locale]

  return (
    <div className="relative overflow-hidden bg-shell px-4 text-ink sm:px-6">
      <div className="pointer-events-none absolute left-[-7rem] top-28 h-80 w-80 rounded-full bg-[var(--color-ambient-left)] blur-[80px]" />
      <div className="pointer-events-none absolute right-[-6rem] top-[28rem] h-96 w-96 rounded-full bg-[var(--color-ambient-right)] blur-[80px]" />

      <Header locale={locale} messages={copy} onLocaleChange={setLocale} />

      <main className="mx-auto flex w-full max-w-[1180px] flex-col">
        <section className="grid items-center gap-9 pb-10 pt-8 sm:pt-12 lg:grid-cols-[1.2fr_0.95fr] lg:pt-20">
          <div>
            <SectionEyebrow>{copy.hero.eyebrow}</SectionEyebrow>
            <h1 className="max-w-none text-balance font-display text-[clamp(2.35rem,10vw,5.7rem)] leading-[0.98] sm:max-w-[13ch] lg:max-w-[11ch]">
              {copy.hero.title}
            </h1>
            <p className="mt-6 max-w-[58ch] text-base leading-7 text-mist sm:text-[1.08rem] sm:leading-8">
              {copy.hero.description}
            </p>
            <div className="mt-7 flex flex-col items-stretch gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-accent px-5 text-center font-bold text-[var(--color-accent-foreground)] shadow-[var(--shadow-accent)] transition duration-200 hover:-translate-y-0.5 sm:w-auto"
                href="#contact"
              >
                {copy.hero.primaryCta}
              </a>
              <a
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-5 text-center font-bold transition duration-200 hover:-translate-y-0.5 sm:w-auto"
                href="#solution"
              >
                {copy.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div>
            <div className="rotate-[-1deg] rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-panel backdrop-blur-xl sm:rotate-[-2deg] sm:rounded-[28px] sm:p-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-sand">{copy.hero.cardLabel}</p>
              <p className="mt-2 font-display text-[1.65rem] font-bold">{copy.hero.cardTitle}</p>
              <p className="mt-3 leading-7 text-mist">{copy.hero.cardDescription}</p>
            </div>

            <div className="mt-4 grid gap-3.5 sm:grid-cols-2">
              {copy.hero.stats.map((stat) => (
                <article
                  key={stat.text}
                  className="min-h-[150px] rounded-[22px] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-panel backdrop-blur-xl sm:min-h-[168px] sm:rounded-[24px] sm:p-[22px]"
                >
                  <strong className="block font-display text-[clamp(2rem,3vw,2.8rem)] font-extrabold">{stat.value}</strong>
                  <span className="mt-2 block leading-7 text-mist">{stat.text}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-5 rounded-[22px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 py-4 sm:rounded-[24px] sm:px-[22px] sm:py-[18px] lg:flex-row lg:items-center lg:justify-between">
          <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-sand">{copy.trustStrip.label}</p>
          <div className="flex flex-wrap gap-2.5">
            {copy.trustStrip.items.map((item) => (
              <span key={item} className="rounded-full bg-[var(--color-surface-strong)] px-3 py-2 text-sm text-mist sm:px-3.5 sm:py-2.5 sm:text-base">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="pt-16 sm:pt-20 lg:pt-[88px]" id="solution">
          <div className="max-w-[760px]">
            <SectionEyebrow>{copy.offer.eyebrow}</SectionEyebrow>
            <h2 className="font-display text-[clamp(2rem,4vw,3.6rem)] leading-[1.02]">{copy.offer.title}</h2>
          </div>

          <div className="mt-7 grid gap-[18px] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-panel backdrop-blur-xl sm:rounded-[28px] sm:p-[26px]">
              <p className="text-base leading-7 text-mist sm:text-[1.1rem] sm:leading-8">{copy.offer.description}</p>
            </div>

            <div className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-panel backdrop-blur-xl sm:rounded-[28px] sm:p-[26px]">
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-sand">
                {copy.offer.highlightsLabel}
              </p>
              <ul className="mt-4 grid gap-3 pl-5 text-mist">
                {copy.offer.highlights.map((item) => (
                  <li key={item} className="leading-8">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="pt-16 sm:pt-20 lg:pt-[88px]">
          <div className="max-w-[760px]">
            <SectionEyebrow>{copy.architecture.eyebrow}</SectionEyebrow>
            <h2 className="font-display text-[clamp(2rem,4vw,3.6rem)] leading-[1.02]">{copy.architecture.title}</h2>
          </div>

          <div className="mt-7 grid gap-[18px] lg:grid-cols-3">
            {copy.architecture.pillars.map((pillar) => (
              <article
                className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-panel backdrop-blur-xl sm:rounded-[28px] sm:p-[26px]"
                key={pillar.title}
              >
                <p className="mb-2.5 font-display text-[1.1rem] font-bold">{pillar.title}</p>
                <p className="leading-8 text-mist">{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pt-16 sm:pt-20 lg:pt-[88px]" id="industries">
          <div className="max-w-[760px]">
            <SectionEyebrow>{copy.industries.eyebrow}</SectionEyebrow>
            <h2 className="font-display text-[clamp(2rem,4vw,3.6rem)] leading-[1.02]">{copy.industries.title}</h2>
          </div>

          <div className="mt-7 grid gap-[18px] lg:grid-cols-3">
            {copy.industries.items.map((industry) => (
              <article
                className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-panel backdrop-blur-xl sm:rounded-[28px] sm:p-[26px]"
                key={industry.name}
              >
                <h3 className="mb-3 font-display text-[1.2rem] font-bold">{industry.name}</h3>
                <p className="leading-8 text-mist">{industry.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-5 pt-16 sm:pt-20 lg:pt-[88px]" id="process">
          <div className="max-w-[760px]">
            <SectionEyebrow>{copy.process.eyebrow}</SectionEyebrow>
            <h2 className="font-display text-[clamp(2rem,4vw,3.6rem)] leading-[1.02]">{copy.process.title}</h2>
          </div>

          <div className="mt-7 grid gap-[18px] lg:grid-cols-3">
            {copy.process.steps.map((step, index) => (
              <article
                className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-panel backdrop-blur-xl sm:rounded-[28px] sm:p-[26px]"
                key={step}
              >
                <span className="mb-[18px] inline-flex h-[46px] w-[46px] items-center justify-center rounded-[14px] bg-[var(--color-step)] font-display font-bold text-accent">
                  {`0${index + 1}`}
                </span>
                <p className="leading-8 text-mist">{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pt-[88px]" id="contact">
          <div className="grid gap-6 rounded-[24px] border border-[var(--color-border)] bg-cta bg-[var(--color-surface-strong)] p-5 shadow-panel backdrop-blur-xl sm:rounded-[28px] sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:justify-between">
            <div>
              <SectionEyebrow>{copy.contact.eyebrow}</SectionEyebrow>
              <h2 className="max-w-none font-display text-[clamp(2rem,4vw,3.6rem)] leading-[1.02] sm:max-w-[14ch]">
                {copy.contact.title}
              </h2>
            </div>
            <div className="flex max-w-none flex-col items-stretch gap-3.5 self-center sm:max-w-[360px] sm:flex-wrap sm:items-center">
              <a
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-accent px-5 text-center font-bold text-[var(--color-accent-foreground)] shadow-[var(--shadow-accent)] transition duration-200 hover:-translate-y-0.5 sm:w-auto"
                href={`mailto:${copy.contact.email}`}
              >
                {copy.contact.email}
              </a>
              <p className="leading-8 text-mist">{copy.contact.note}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer messages={copy} />
    </div>
  )
}

export default App
