/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ios: {
          blue: '#007AFF',
          green: '#34C759',
          indigo: '#5856D6',
          orange: '#FF9500',
          pink: '#FF2D55',
          purple: '#AF52DE',
          red: '#FF3B30',
          teal: '#5AC8FA',
          yellow: '#FFCC00',
          dark: '#1C1C1E',
          gray: '#8E8E93',
          gray2: '#AEAEB2',
          gray3: '#C7C7CC',
          gray4: '#D1D1D6',
          gray5: '#E5E5EA',
          gray6: '#F2F2F7',
          bg: '#000000',
          // Exact Apple system background
          systemBg: '#F2F2F7',
          systemText: '#1C1C1E',
          accent: '#007AFF',
        }
      },
      fontFamily: {
        // Inter as primary, fallback to SF Pro / system
        inter: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sanfrancisco: ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'sans-serif'],
      },
      fontSize: {
        'ios-body': ['17px', { lineHeight: '1.5', fontWeight: '400' }],
        'ios-title': ['28px', { lineHeight: '1.2', fontWeight: '700' }],
        'ios-title-sm': ['22px', { lineHeight: '1.2', fontWeight: '700' }],
        'ios-label': ['15px', { lineHeight: '1.4' }],
        'ios-caption': ['12px', { lineHeight: '1.3', fontWeight: '600', letterSpacing: '0.05em' }],
      },
      backgroundImage: {
        'wallpaper': "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')",
        'ios-gradient': 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)',
      },
      animation: {
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
      },
      keyframes: {
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      spacing: {
        '4.5': '18px',
        '18': '72px',
      }
    },
  },
  plugins: [],
}
