import logo from '../assets/hiveforge-logo-primary.png'
import type { Messages, NavKey } from '../i18n/types'

type FooterProps = {
  messages: Messages
}

const navItems: Array<{ key: NavKey; href: string }> = [
  { key: 'solution', href: '#solution' },
  { key: 'industries', href: '#industries' },
  { key: 'process', href: '#process' },
  { key: 'contact', href: '#contact' },
]

export function Footer({ messages }: FooterProps) {
  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <div className="mx-auto grid w-full max-w-[1180px] gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <img alt={messages.brand.name} className="h-20 w-auto sm:h-24 lg:h-28" src={logo} />
          <p className="mt-3 max-w-[44ch] leading-7 text-mist">{messages.brand.statement}</p>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-sand">{messages.footer.navLabel}</p>
          <ul className="mt-4 grid gap-3 text-mist">
            {navItems.map((item) => (
              <li key={item.key}>
                <a className="transition duration-200 hover:text-ink" href={item.href}>
                  {messages.header.nav[item.key]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-sand">
            {messages.footer.contactLabel}
          </p>
          <a
            className="mt-4 block break-all text-mist transition duration-200 hover:text-ink sm:break-normal"
            href={`mailto:${messages.contact.email}`}
          >
            {messages.contact.email}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-[1180px] border-t border-[var(--color-border)] pt-5 text-sm text-mist">
        {messages.footer.copyright}
      </div>
    </footer>
  )
}
