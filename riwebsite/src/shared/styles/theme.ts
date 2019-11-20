import { rgba } from 'polished'

export interface ScreenSizes {
  mediaS: number
  mediaM: number
  mediaL: number
  mediaXL: number
}

export interface Colors {
  primary: string
  secondary: string
  white: string
  grey: string
  greyLight1: string
  greyLight2: string
  greyLight3: string
  greyBackground: string
  greyLine: string
  primaryLight: string
  secondaryLight: string
  error: string
  errorBackground: string
  black: string
  green: string
  purple: string
  blue: string
  blueMed: string
  blueDark: string
  blueLight: string
  checkMarkColor: string
  checkMarkDotColor: string
  successGreen: string
  green2: string
  green3: string
  grey2: string
  grey3: string
  grey4: string
}

export const colors: Colors = {
  primary: '#30424D',
  primaryLight: '#394E5B',
  secondary: '#33BB40',
  secondaryLight: '#4AEA59',
  white: '#ffffff',
  grey: '#8b9296',
  purple: '#9B51E0',
  black: '#000',
  greyLight1: '#B1B9BE',
  greyLight2: '#E8F1F0',
  greyLight3: '#F7FBFC',
  greyBackground: rgba(255, 255, 255, 0.05),
  greyLine: '#000',
  error: '#D0021B',
  errorBackground: '#FFC6CC',
  green: '#33BB40',
  blue: '#00A1FB',
  blueLight: '#5BC0F7',
  blueMed: '#212F3F',
  blueDark: '#2C3E50',
  checkMarkColor: rgba(255, 255, 255, 0.1),
  checkMarkDotColor: rgba(0, 0, 0, 0.2),
  successGreen: '#A9F3B0',
  green2: '#33bb3f',
  green3: '#86E45B',
  grey2: '#4e6472',
  grey3: '#8c9aa3',
  grey4: '#596e7a',
}

export interface Theme {
  [propName: string]: string | undefined
  primary: string
  secondary: string
  background: string
  backgroundDark: string
  action?: string
  actionActive: string
  second: string
  secondActive: string
  tertiary: string
  tertiaryActive: string
  error: string
  errorActive: string
  boxShadow: string
}
export const theme: Theme = {
  primary: colors.primary,
  secondary: colors.secondary,
  background: colors.greyLight3,
  backgroundDark: colors.primaryLight,
  action: colors.secondary,
  actionActive: colors.secondaryLight,
  second: rgba(255, 255, 255, 0.1),
  secondActive: rgba(255, 255, 255, 0.2),
  tertiary: colors.primary,
  tertiaryActive: colors.primaryLight,
  accent: colors.white,
  accentActive: rgba(255, 255, 255, 0.9),
  error: colors.error,
  errorActive: `${rgba(colors.error, 0.8)}`,
  boxShadow: `${rgba(0, 0, 0, 0.1)} 0px 0px 5px 0px;`,
}

export const screenSizes: ScreenSizes = {
  mediaS: 640,
  mediaM: 800,
  mediaL: 1024,
  mediaXL: 1280,
}
