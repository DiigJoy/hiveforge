export const theme = {
  fonts: {
    sans: '"Plus Jakarta Sans", sans-serif',
    display: '"Space Grotesk", sans-serif',
  },
  colors: {
    backgroundTop: '#041019',
    backgroundStart: '#061520',
    backgroundMid: '#0a1d2b',
    backgroundEnd: '#0c2231',
    backgroundBottom: '#081520',
    surface: 'rgba(8, 26, 38, 0.76)',
    surfaceStrong: 'rgba(5, 21, 31, 0.92)',
    surfaceSoft: 'rgba(13, 34, 48, 0.88)',
    border: 'rgba(232, 115, 61, 0.18)',
    text: '#f8f3ed',
    muted: '#d6c9bd',
    accent: '#e36d3a',
    accentSoft: '#f1a16b',
    accentForeground: '#081019',
    ambientLeft: 'rgba(227, 109, 58, 0.24)',
    ambientRight: 'rgba(241, 161, 107, 0.14)',
    ambientBottom: 'rgba(23, 88, 107, 0.18)',
    step: 'rgba(227, 109, 58, 0.15)',
  },
  shadows: {
    panel: '0 22px 60px rgba(1, 9, 14, 0.42)',
    accent: '0 18px 36px rgba(227, 109, 58, 0.24)',
    glow: '0 0 18px rgba(241, 161, 107, 0.22)',
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
