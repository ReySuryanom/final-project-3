/* eslint-disable global-require */

export const ubuntuFonts = {
  'ubuntu-light': require('../assets/fonts/Ubuntu-Light.ttf'),
  'ubuntu-regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
  'ubuntu-medium': require('../assets/fonts/Ubuntu-Medium.ttf'),
  'ubuntu-bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
};

export const toStringFormat = (html) => {
  const headTag = "<span class='highlighted'>";
  const tailTag = '</span>';
  const removeSpanTags = html.replace(headTag, '').replace(tailTag, '');
  return removeSpanTags.split(',');
};

export default {};
