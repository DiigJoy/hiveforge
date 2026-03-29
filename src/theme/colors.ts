export const theme = {
  fonts: {
    sans: '"Plus Jakarta Sans", sans-serif',
    display: '"Space Grotesk", sans-serif',
  },
  colors: {
    backgroundTop: '#081425',
    backgroundStart: '#0b1d35',
    backgroundMid: '#10294a',
    backgroundEnd: '#133760',
    backgroundBottom: '#0d2744',
    surface: 'rgba(13, 31, 56, 0.72)',
    surfaceStrong: 'rgba(10, 26, 47, 0.9)',
    surfaceSoft: 'rgba(17, 45, 80, 0.82)',
    border: 'rgba(129, 186, 255, 0.18)',
    text: '#ecf6ff',
    muted: '#abc3db',
    accent: '#3d8bfd',
    accentSoft: '#75c7ff',
    accentForeground: '#f5fbff',
    ambientLeft: 'rgba(61, 139, 253, 0.28)',
    ambientRight: 'rgba(117, 199, 255, 0.22)',
    ambientBottom: 'rgba(32, 118, 219, 0.18)',
    step: 'rgba(61, 139, 253, 0.18)',
  },
  shadows: {
    panel: '0 22px 60px rgba(3, 10, 24, 0.35)',
    accent: '0 18px 36px rgba(61, 139, 253, 0.28)',
    glow: '0 0 18px rgba(117, 199, 255, 0.45)',
  },
} as const

export const themeVariables = {
  '--font-sans': theme.fonts.sans,
  '--font-display': theme.fonts.display,
  '--color-bg-top': theme.colors.backgroundTop,
  '--color-bg-start': theme.colors.backgroundStart,
  '--color-bg-mid': theme.colors.backgroundMid,
  '--color-bg-end': theme.colors.backgroundEnd,
  '--color-bg-bottom': theme.colors.backgroundBottom,
  '--color-surface': theme.colors.surface,
  '--color-surface-strong': theme.colors.surfaceStrong,
  '--color-surface-soft': theme.colors.surfaceSoft,
  '--color-border': theme.colors.border,
  '--color-text': theme.colors.text,
  '--color-muted': theme.colors.muted,
  '--color-accent': theme.colors.accent,
  '--color-accent-soft': theme.colors.accentSoft,
  '--color-accent-foreground': theme.colors.accentForeground,
  '--color-ambient-left': theme.colors.ambientLeft,
  '--color-ambient-right': theme.colors.ambientRight,
  '--color-ambient-bottom': theme.colors.ambientBottom,
  '--color-step': theme.colors.step,
  '--shadow-panel': theme.shadows.panel,
  '--shadow-accent': theme.shadows.accent,
  '--shadow-glow': theme.shadows.glow,
} as const satisfies Record<`--${string}`, string>

export function applyThemeVariables() {
  if (typeof document === 'undefined') {
    return
  }

  const root = document.documentElement

  Object.entries(themeVariables).forEach(([key, value]) => {
    root.style.setProperty(key, value)
  })
}
