import { OptionsThemeType, ThemeType } from "./types";

/**
* @function validator schema array
* @param {ThemeTokensType[]} schema
* @returns {boolean}
**/
export const ValidatorArrayTheme = (schema: ThemeType[]) => {
  let valid = true;
  schema.forEach((item: ThemeType) => {
    const validIsName = typeof item.name === 'string' && item.name.length >= 1;
    const validImage = new RegExp(/^(http|https):\/\/[^\s$.?#].[^\s]*$/).test(item.miniLogo);
    if (!validIsName) {
      console.warn(`Theme token css variable: ${item.name} is not valid`);
      valid = false;
    }
    if(!item.tokens) {
      console.warn(`Theme token css variable: require tokens object `);
      valid = false;
    }
    if(!validImage) { 
      console.warn(`Theme token css variable: item.miniLogo is not defined image url`);
    }
    if(item.tokens) {
      Object.keys(item.tokens).forEach((key: string) => {
        if(!item.tokens[key]) {
          console.warn(`Theme token css variable: ${item.name} has no value for ${key}`);
          valid = false;
        }
      });
    }
  })
  return valid
}



/**
  * @function GeneratorId generator id and check if it is unique
  * @param {string, number}  name id
  * @returns string
 */
export const GeneratorId = (name: string) => { 
  return name.replace(/\s/g, '-').toLowerCase() 
}

/**
 * @function Mounted options buttons to component
 * @param {ThemeTokensType[]} Themes
 * @returns {OptionsThemeType[]}
 */
export const MountedOptions = (Themes: ThemeType[]) => {
  const options: OptionsThemeType[] = [];
  Themes.forEach((item: ThemeType) => {
    let type: 'icon' | 'image' = 'icon';
    if(item.miniLogo && item.miniLogo.length) { 
      type = 'image'
    }
    options.push({
      name: item.name,
      id: GeneratorId(item.name),
      value: item.name,
      miniLogo: item.miniLogo,
      type
    })
  })
  return options;
}