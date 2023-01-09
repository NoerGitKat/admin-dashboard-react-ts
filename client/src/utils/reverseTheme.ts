import { TThemePalette } from "../types";

// Reverses color palette
function reverseTheme(tokensDark: TThemePalette): TThemePalette | {} {
  const reversedTheme = {
    grey: {},
    primary: {},
    secondary: {},
  } as TThemePalette;

  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {} as Partial<TThemePalette>;

    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
      console.log("reversedObj", reversedObj);
    }

    reversedTheme[key] = reversedObj;
  });
  return reversedTheme;
}

export default reverseTheme;
