export const colors = {
  black: 'rgb(0, 0, 0)',
  bluePressState: 'rgb(57, 97, 220)',
  blueTextAccent: 'rgb(130, 180, 255)',
  body: 'rgb(21, 30, 39)',
  boostBg1: 'rgb(32, 63, 62)',
  budgetExplanationModalBg: 'rgb(21, 28, 35)',
  dashboardHeader: 'rgba(26, 36, 46, 0.3)',
  dashboardSearch: 'rgb(21, 30, 39)',
  dashboardWashedoutText: 'rgb(107, 122, 141)',
  divider1: 'rgb(21, 30, 39)',
  divider2: 'rgb(16, 19, 23)',
  divider3: 'rgb(71, 81, 94)',
  gray100: 'rgba(51, 51, 51, 0.2)',
  gray200: 'rgba(51, 51, 51, 0.4)',
  gray300: 'rgba(51, 51, 51, 0.6)',
  gray400: 'rgba(51, 51, 51, 0.8)',
  gray500: 'rgb(51, 51, 51)',
  green100: 'rgba(73, 201, 152, 0.2)',
  green200: 'rgba(73, 201, 152, 0.4)',
  green300: 'rgba(73, 201, 152, 0.6)',
  green400: 'rgba(73, 201, 152, 0.8)',
  greenBorder: 'rgb(47, 179, 121)',
  headerBackground: 'rgb(26, 36, 46)',
  inputBg1: 'rgb(32, 39, 47)',
  inputBg2: 'rgb(20, 22, 26)',
  inputOutline1: 'rgb(71, 81, 94)',
  inputPlaceholder: 'rgb(76, 86, 101)',
  lightBlue100: 'rgba(93, 143, 221, 0.2)',
  lightBlue200: 'rgba(93, 143, 221, 0.4)',
  lightBlue300: 'rgba(93, 143, 221, 0.6)',
  lightBlue400: 'rgba(93, 143, 221, 0.8)',
  lightBlue500: 'rgb(93, 143, 221)',
  lightGray: 'rgb(187, 187, 187)',
  listBg: 'rgb(21, 30, 39)',
  mainBottomIcons: 'rgb(144, 155, 170)',
  modalAuth: '#909baa',
  modalBg: 'rgb(25, 33, 40)',
  modalShield: '#618aff',
  modalWhiteOverlayBg: 'rgba(255, 255, 255, 0.2)',
  placeholderText: 'rgb(85, 97, 113)',
  primaryBlueBorder: 'rgb(80, 120, 242)',
  primaryButton: 'rgb(130, 180, 255)',
  primaryGreen: 'rgb(73, 201, 152)',
  primaryRed: 'rgb(237, 116, 116)',
  primaryText1: 'rgb(255, 255, 255)',
  receivedIcon: 'rgb(130, 180, 255)',
  receivedMsgBg: 'rgb(34, 46, 58)',
  secondaryRed: 'rgb(255, 143, 128)',
  secondaryText4: 'rgb(107, 122, 141)',
  sentMsgBg: 'rgb(62, 97, 137)',
  sentMsgBgPress: 'rgb(44, 66, 91)',
  text2: 'rgb(255, 255, 255)',
  textMessages: 'rgb(255, 255, 255)',
  transactionBg: 'rgb(30, 41, 52)',
  transactionBgBorder: 'rgb(21, 30, 39)',
  transactionBlueText: 'rgb(130, 180, 255)',
  unreadMsgText: 'rgb(186, 193, 198)',
  washedOutGreen: 'rgb(47, 116, 96)',
  washedOutReceivedText: 'rgb(85, 97, 113)',
  washedOutSentText: 'rgb(130, 156, 185)',
  white: 'rgb(255, 255, 255)',
  transparentWhite: '#ffffff88',
  transparentBlack: '#000000bb',
} as const

export type ColorName = keyof typeof colors
