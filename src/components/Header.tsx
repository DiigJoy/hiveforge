import { useState } from 'react'
import logo from '../assets/hiveforge-logo-primary.png'
import type { Locale, Messages, NavKey } from '../i18n/types'

type HeaderProps = {
  locale: Locale
  messages: Messages
  onLocaleChange: (locale: Locale) => void
}

const navItems: Array<{ key: NavKey; href: string }> = [
  { key: 'solution', href: '#solution' },
  { key: 'industries', href: '#industries' },
  { key: 'process', href: '#process' },
  { key: 'contact', href: '#contact' },
]

const locales: Locale[] = ['en', 'es', 'pt']

export function Header({ locale, messages, onLocaleChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleLocaleChange(nextLocale: Locale) {
    onLocaleChange(nextLocale)
    setIsMenuOpen(false)
  }

  function handleMenuClose() {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-20 mx-auto w-full max-w-[1180px] py-3 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 rounded-[22px] border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 py-3 shadow-panel sm:px-5 sm:py-4">
        <a className="inline-flex items-center" href="#top">
          <img alt={messages.brand.name} className="h-12 w-auto sm:h-14 lg:h-16" src={logo} />
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          <nav aria-label={messages.footer.navLabel}>
            <ul className="flex items-center gap-6 text-sm text-mist">
              {navItems.map((item) => (
                <li key={item.key}>
                  <a className="transition duration-200 hover:text-ink" href={item.href}>
                    {messages.header.nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-1">
            <span className="sr-only">{messages.meta.languageLabel}</span>
            {locales.map((item) => (
              <button
                key={item}
                className={[
                  'rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] transition duration-200',
                  locale === item ? 'bg-accent text-[var(--color-accent-foreground)]' : 'text-mist hover:text-ink',
                ].join(' ')}
                onClick={() => handleLocaleChange(item)}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>

          <a
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 py-2.5 transition duration-200 hover:-translate-y-0.5"
            href="#contact"
          >
            {messages.header.cta}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <label className="sr-only" htmlFor="locale-select">
            {messages.meta.languageLabel}
          </label>
          <select
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-3 py-2 text-sm text-mist outline-none"
            id="locale-select"
            onChange={(event) => handleLocaleChange(event.target.value as Locale)}
            value={locale}
          >
            {locales.map((item) => (
              <option key={item} value={item}>
                {messages.meta.localeNames[item]}
              </option>
            ))}
          </select>

          <button
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] text-mist"
            onClick={() => setIsMenuOpen((value) => !value)}
            type="button"
          >
            <span className="text-lg leading-none">{isMenuOpen ? '×' : '≡'}</span>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="mt-3 rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-4 shadow-panel backdrop-blur-xl lg:hidden">
          <nav aria-label={messages.footer.navLabel}>
            <ul className="grid gap-3 text-mist">
              {navItems.map((item) => (
                <li key={item.key}>
                  <a
                    className="block rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 py-3 transition duration-200 hover:text-ink"
                    href={item.href}
                    onClick={handleMenuClose}
                  >
                    {messages.header.nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-accent px-5 font-bold text-[var(--color-accent-foreground)] shadow-[var(--shadow-accent)] transition duration-200"
            href="#contact"
            onClick={handleMenuClose}
          >
            {messages.header.cta}
          </a>
        </div>
      ) : null}
    </header>
  )
}
