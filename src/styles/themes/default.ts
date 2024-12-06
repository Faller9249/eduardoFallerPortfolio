export default {
    colors: {
        white: '#fff',
        black: '#000',
        backgroundLight: '#FFD400',
        backgroundDark: '#050E24',
        backgroundMenuDark: '#192D5B',
        backgroundMenuLight: '#f1f1f1',
        primaryBlue: '#00FFFB', // 
        primaryRed: '#A82937',
        primaryGreen: '#087148',
        primaryBack: '#FF00C2',
        background: "#000",
        shadow: "rgba(0, 0, 0, 0.2)",
        modal: "rgba(254,220,1,1)"
        //"linear-gradient(100deg, rgba(254,220,1,1) 0%, rgba(254,1,220,1) 49%, rgba(1,220,254,1) 100%)"
    },
    spacings: {
        xxsmall: '1rem',
        xmsmall: '1.5rem',
        xsmall: '2rem',
        small: '2.5rem',
        medium: '3rem',
        large: '4.0rem',
        xlarge: '4.8rem',
        xxlarge: '5.6rem',
        big: '6rem',
        huge: '8rem'
    },
    border:{
      solid: '1px solid #B2B2B2',
      black: '1rem solid #000',
      white: '1px solid #ffffff',
      greyLight:'1px solid #eaecee',
      grey:"1px solid #dadada",
      greyDark:"1px solid #777",
      radius: '2rem'
    },
  font: {
      family: {
        primary: "'Jomhuria', sans-serif",
        second: "'Inter', sans-serif"
      },
      small: 300,
      normal: 400,
      medium: 500,
      semi: 600,
      bold: 700,
      extra: 800,
      huge: 900
    },
    transition: {
      medium: 'all 0.4s ease',
      slow: 'all 1s ease'
  }
} as const
