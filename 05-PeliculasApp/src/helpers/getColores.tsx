import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {});

  let primary;
  let secondary;

  if (colors.platform === 'android') {
    primary = colors.dominant || 'rgb(255,255,255)';
    secondary = colors.average || 'rgb(255,255,255)';
  } else {
    primary = colors.primary || 'rgb(255,255,255)';
    secondary = colors.secondary || 'rgb(255,255,255)';
  }

  return [primary, secondary];
};
