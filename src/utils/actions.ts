import { PARAM_KEY } from "../constants";
import { ThemeType } from "./types";

export function DisplayToolState(selector: string, state: { isInDocs: boolean, themeVariableCss: string | number, themeSelected: ThemeType  }) {
  
  const queryTag = document.querySelector(`#${PARAM_KEY}`);
  const validate = !!state.themeVariableCss && !!state.themeSelected
  if(!validate) {
    return
  }
  const listVariables  = MountedVariables(state.themeSelected);

  function setStyle(list: string) {
    if(queryTag) {
      document.head.removeChild(queryTag);
    }
    const style = document.createElement('style');
    style.id = `${PARAM_KEY}`;
    style.innerHTML = `
      :root {
        ${list}
      }
    `;
    document.head.appendChild(style);
  }
  setStyle(listVariables)
}

export function MountedVariables(theme: ThemeType) { 
  const list =  theme.tokens ? Object.keys(theme.tokens) : [];
  return list.map((item: string) => {
    if(item.slice(0,2) === '--') {
      return `${item}: ${theme.tokens[item]}`
    }
    return `--${item}: ${theme.tokens[item]}`
  }).toString().replace(/,/g,';');
}
