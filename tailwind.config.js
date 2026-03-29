/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: 'var(--color-accent)',
        sand: 'var(--color-accent-soft)',
        ink: 'var(--color-text)',
        mist: 'var(--color-muted)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
      },
      boxShadow: {
        panel: 'var(--shadow-panel)',
      },
      backgroundImage: {
        shell:
          'radial-gradient(circle at 12% 8%, var(--color-ambient-left), transparent 34%), radial-gradient(circle at 88% 12%, var(--color-ambient-right), transparent 28%), radial-gradient(circle at 50% 100%, var(--color-ambient-bottom), transparent 38%), linear-gradient(180deg, var(--color-bg-top) 0%, var(--color-bg-start) 18%, var(--color-bg-mid) 52%, var(--color-bg-end) 78%, var(--color-bg-bottom) 100%)',
        cta: 'linear-gradient(135deg, rgba(61, 139, 253, 0.1), rgba(255, 255, 255, 0.35))',
        accent: 'linear-gradient(135deg, var(--color-accent) 0%, #69b5ff 100%)',
      },
    },
  },
  plugins: [],
}
