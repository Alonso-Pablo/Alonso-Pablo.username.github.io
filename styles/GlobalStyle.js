import { createGlobalStyle } from "styled-components";

export const mainFontFamily = 'Inter';

export const primaryColor = '#FFFFFF';
export const secondaryColor = '#000000';
export const tertiaryColor = '#777777';
export const quaternaryColor = '#4A4A4A';
export const quinaryColor = '#BBBBBB';

export const lightTheme = {
  firstColor: secondaryColor,
  secondColor: primaryColor,
  thirdColor: tertiaryColor,
  fourthColor: quaternaryColor,

  background: primaryColor,
  borderColor: quinaryColor,

  fontColor: secondaryColor,
  fontColorTwo: tertiaryColor,
  fontColorThree: secondaryColor,
  fontFamily: mainFontFamily,

  title: {
    fontColor: secondaryColor,
    fontFamily: mainFontFamily,
    fontSize: '5.5rem',
    fontWeight: 900,
    lineHeight: '80%',
  },
  subtitle: {
    fontColor: secondaryColor,
    fontFamily: mainFontFamily,
    fontSize: '2rem',
    fontWeight: 400,
    lineHeight: '90%',
  },
  details: {
    fontColor: secondaryColor,
    fontFamily: mainFontFamily,
    fontSize: '1.8rem',
    fontWeight: 900,
    lineHeight: '100%',
  },
  linka: {
    fontColor: secondaryColor,
    fontFamily: mainFontFamily,
    fontSize: '2.5rem',
    fontWeight: 900,
    lineHeight: '90%',
  },
  titlesection: {
    fontColor: secondaryColor,
    fontFamily: mainFontFamily,
    fontSize: '3rem',
    fontWeight: 900,
    lineHeight: '90%',
  },
  itemtitle: {
    fontColor: secondaryColor,
    fontFamily: mainFontFamily,
    fontSize: '1.7rem',
    fontWeight: 400,
    lineHeight: '120%',
  },
  paragraph: {
    fontColor: secondaryColor,
    fontFamily: mainFontFamily,
    fontSize: '1.7rem',
    fontWeight: 400,
    lineHeight: '160%',
  },
  message: {
    fontColor: primaryColor,
    fontFamily: mainFontFamily,
    fontSize: '2rem',
    fontWeight: 400,
    lineHeight: '90%',
  },
  label: {
    fontColor: secondaryColor,
    fontFamily: mainFontFamily,
    fontSize: '1.7rem',
    fontWeight: 400,
    lineHeight: '100%',
  },
  buttontext: {
    fontColor: secondaryColor,
    fontFamily: mainFontFamily,
    fontSize: '1.8rem',
    fontWeight: 400,
    lineHeight: '90%',
  }
}

// primaryColor = '#FFFFFF'; white
// secondaryColor = '#000000'; black
// tertiaryColor = '#777777'; gray
// quaternaryColor = '#4A4A4A'; gray-black

export const darkTheme = {
  firstColor: primaryColor,
  secondColor: secondaryColor,
  thirdColor: tertiaryColor,
  fourthColor: quaternaryColor,
  
  background: secondaryColor,
  borderColor: quaternaryColor,

  fontColor: primaryColor,
  fontColorTwo: tertiaryColor,
  fontColorThree: secondaryColor,
  fontFamily: mainFontFamily,
  
  title: {
    fontColor: primaryColor,
    fontFamily: mainFontFamily,
    fontSize: '5.5rem',
    fontWeight: 900,
    lineHeight: '80%',
  },
  subtitle: {
    fontColor: primaryColor,
    fontFamily: mainFontFamily,
    fontSize: '2rem',
    fontWeight: 400,
    lineHeight: '90%',
  },
  details: {
    fontColor: primaryColor,
    fontFamily: mainFontFamily,
    fontSize: '1.8rem',
    fontWeight: 900,
    lineHeight: '100%',
  },
  linka: {
    fontColor: primaryColor,
    fontFamily: mainFontFamily,
    fontSize: '2.5rem',
    fontWeight: 900,
    lineHeight: '90%',
  },
  titlesection: {
    fontColor: primaryColor,
    fontFamily: mainFontFamily,
    fontSize: '3rem',
    fontWeight: 900,
    lineHeight: '90%',
  },
  itemtitle: {
    fontColor: primaryColor,
    fontFamily: mainFontFamily,
    fontSize: '1.7rem',
    fontWeight: 400,
    lineHeight: '120%',
  },
  paragraph: {
    fontColor: primaryColor,
    fontFamily: mainFontFamily,
    fontSize: '1.7rem',
    fontWeight: 400,
    lineHeight: '160%',
  },
  message: {
    fontColor: secondaryColor,
    fontFamily: mainFontFamily,
    fontSize: '2rem',
    fontWeight: 400,
    lineHeight: '90%',
  },
  label: {
    fontColor: primaryColor,
    fontFamily: mainFontFamily,
    fontSize: '1.7rem',
    fontWeight: 400,
    lineHeight: '100%',
  },
  buttontext: {
    fontColor: primaryColor,
    fontFamily: mainFontFamily,
    fontSize: '1.8rem',
    fontWeight: 400,
    lineHeight: '90%',
  }
}

export const GlobalStyles = createGlobalStyle`
  *,html {
    list-style:none;
    margin:0;
    padding:0;
  }
  
  html {
  display:block;
  width:100%;
  height:100%;
  min-width:320px;
  font-size:62.5%;
  scroll-behavior:smooth;
  }

  body {
    background-color: ${props => props.theme.background};
    transition: all 0.50s linear;
  }

  a {
  color:inherit;
  text-decoration:none;
  }

  figure,h1,p,ul {
    -webkit-margin-before:0;
    margin-block-start:0;
    -webkit-margin-after:0;
    margin-block-end:0;
    -webkit-margin-start:0;
    margin-inline-start:0;
    -webkit-margin-end:0;
    margin-inline-end:0;
    -webkit-padding-start:0;
    padding-inline-start:0;
  }

  #__next {
    width:100%;
    height:100%;
    font-family: Inter;

    color: ${(props) => props.theme.fontColor};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:active,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:hover {
    -webkit-box-shadow:inset 0 0 0 30px #000!important;-webkit-text-fill-color:#fff!important;
    box-shadow:inset 0 0 0 30px #000!important;-webkit-text-fill-color:#fff!important;
  }
  
`;