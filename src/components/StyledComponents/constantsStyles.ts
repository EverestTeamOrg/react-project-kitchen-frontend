//Стили для media.
const size = {
  mobileS: '320px',
  mobileM: '374px',
  mobileL: '424px',
  tabletVert: '525px',
  tablet: '767px',
  laptop: '1023px',
  laptopL: '1365px',
  laptopXL: '1639px',
  desktop: '1919px'
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tabletVert: `(max-width: ${size.tabletVert})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  laptopXL: `(max-width: ${size.laptopXL})`,
  desktop: `(max-width: ${size.desktop})`,
};

//Colors.
export const colors = {
  black: '#0A0A0B',

  white: '#FFFFFF',

  blue: '#008AFF',
  blueHover: '#007CE5',
  blueActive: '#006ECC',
  lightBlueHover: '#E0F1FF',
  lightBlueActive: '#D6ECFF',

  grey: '#CCCCCC',
  darkGrey: '#62626A',
  greyHover: '#B8B8B8',
  greyLight: '#A3A3A3',

  red: '#FF413B',
  redError: '#FF1E1E',
  redHover: '#E63B35',
  redActive: '#CC342F',
}

//Buttons color.
export const btnDisabledtColor = {
  disabled: `${colors.grey}`,
}

export const btnSbmtColor = {
  default: `${colors.blue}`,
  hover: `${colors.blueHover}`,
  active: `${colors.blueActive}`,
}

export const btnDeleteColor = {
  default: `${colors.red}`,
  hover: `${colors.redHover}`,
  active: `${colors.redActive}`,
}

export const btnTextDeleteColor = {
  default: `${colors.red}`,
  hover: `${colors.redHover}`,
  active: `${colors.redActive}`,
}

//User Menu. Синие UserMenu можно брать из btnSbmtColor.
export const userMenuBtnColor = {
  hover:`${colors.lightBlueHover}`,
  active:`${colors.lightBlueActive}`,
}

//Типографика.
export const textColor = {
  headers: `${colors.black}`,
  articles: `${colors.black}`,
  whiteText: `${colors.white}`,
  blueText: `${colors.blue}`,
  secondaryText: `${colors.darkGrey}`,
  error: `${colors.red}`
}

//Ссылки.
export const linkColor = {
  red: `${colors.red}`,
  blue: `${colors.blue}`,
  blueHover: `${colors.blueHover}`,
}

//Границы инпутов.
export const inputBorderColor = {
  default: `${colors.grey}`,
  hover: `${colors.greyHover}`,
  active: `${colors.greyLight}`,
  disabled: `${colors.greyLight}`,
  error: `${colors.redError}`
}
