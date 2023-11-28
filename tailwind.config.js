/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // Neutral
      neutral10: '#FFFFFF',
      neutral20: '#5F5F5',
      neutral30: '#EDEDED',
      neutral40: '#E0E0E0',
      neutral50: '#C2C2C2',
      neutral60: '#9E9E9E',
      neutral70: '#757575',
      neutral80: '#616161',
      neutral90: '#404040',
      neutral100: '#0A0A0A',
      // Primary
      primary: '#3E8964',
      primarySurface:'#D8E7E0',
      primaryBorder: '#7EB098',
      primaryHover: '#347253',
      primaryPressed: '#347253',
      primaryFocus: '#D8E7E0',
      // Secondary
      secondary: '#EF9064',
      secondarySurface: '#FCE9E0',
      secondaryBorder: '#F4B598',
      secondaryHover: '#C77853',
      secondaryPressed: '#774832',
      secondaryFocus: '#FCE9E0',
      // Danger
      danger: '#EC5D57',
      dangerSurface: '#FBDFDD',
      dangerBorder: '#F5AEAB',
      dangerHover: '#C54D48',
      dangerPressed: '#762E2B',
      dangerFocus: '#FBDFDD',
      // Warning
      Warning: '#F3A551',
      WarningSurface: '#FDEDDC',
      WarningBorder: '#F9D2A8',
      WarningHover: '#CA8943',
      WarningPressed: '#795228',
      WarningFocus: '#FDEDDC',
      // Success
      success: '#67C57E',
      successSurface: '#E1F3E5',
      successBorder: '#B3E2BE',
      successHover: '#56A469',
      successPressed: '#33623F',
      successFocus: '#E1F3E5',
      // Info
      Info: '#5CADF8',
      InfoSurface: '#DEEFFE',
      InfoBorder: '#ADD6FB',
      InfoHover: '#4D90CF',
      InfoPressed: '#2E567C',
      InfoFocus: '#DEEFFE',
    },
    fontFamily:{
      
    },
    extend: {},
  },
  plugins: [],
}