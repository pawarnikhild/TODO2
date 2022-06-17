import { Platform } from 'react-native';

export const AppColor = {
  primary: '#323D8B',
  primaryLight: '#AAB1EA',
  secondary: '#2C9654',
  secondaryLight: '#95DDB5',
  textDisabled: '#939393',
  textMain: '#333333',
  textSecondary: '#4F4F4F',
  greenIndicator: '#37964F',
  redIndicator: '#E25753',
  yellowIndicator: '#EEC93A'
};

export const FontSize = {
  Header: Platform.OS === 'ios' ? 30 : 32,
  Title: Platform.OS === 'ios' ? 28 : 24,
  ButtonText: Platform.OS === 'ios' ? 28 : 22,
  Large: Platform.OS === 'ios' ? 20 : 20,
  Subtitle: Platform.OS === 'ios' ? 22 : 16,
  Medium: Platform.OS === 'ios' ? 20 : 15,
  Body: Platform.OS === 'ios' ? 17 : 14,
  Default: Platform.OS === 'ios' ? 17 : 12,
  Small: Platform.OS === 'ios' ? 13 : 10,
  Caption: Platform.OS === 'ios' ? 12 : 10,
  Micro: Platform.OS === 'ios' ? 11 : 8,
};

export const FontFamily = {
  appFontLight: 'OpenSans-Light',
  appFontRegular: 'OpenSans-Regular',
  appFontSemibold: 'OpenSans-SemiBold',
  appFontBold: 'OpenSans-Bold',
  appFontExtraBold: 'OpenSans-ExtraBold',
  appFontLightItalic: 'OpenSans-LightItalic',
};
