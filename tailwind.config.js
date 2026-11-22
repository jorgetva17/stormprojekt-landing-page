/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        storm: {
          950: '#06080d',
          900: '#0a0d15',
          850: '#0f1422',
          800: '#141b2d',
          700: '#1e293b',
          cyan: '#00f2fe',
          blue: '#4facfe',
          electric: '#00d2ff',
          neon: '#0df',
          amber: '#f59e0b',
          gold: '#fbbf24',
          purple: '#a855f7',
          pink: '#ec4899',
          crimson: '#ef4444'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Cabinet Grotesk"', '"Syne"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        accent: ['"Space Grotesk"', 'monospace']
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'soundwave': 'soundwave 1.2s ease-in-out infinite alternate',
        'float': 'float 4s ease-in-out infinite',
        'lightning': 'lightning 6s infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.04)' }
        },
        soundwave: {
          '0%': { height: '15%' },
          '100%': { height: '100%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        lightning: {
          '0%, 93%, 97%, 100%': { opacity: '0' },
          '94%, 96%': { opacity: '0.8' },
          '95%': { opacity: '1' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'storm-gradient': 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
        'fire-gradient': 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
        'purple-gradient': 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)'
      }
    },
  },
  plugins: [],
}
