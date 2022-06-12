import { PARAM_KEY } from "../constants";
import { ThemeTokensType, ThemeType } from "./types";

export function SetDataStorage(themes: ThemeTokensType, selected: ThemeType) {
  const data = {
    themes,
    selected
  }
  localStorage.setItem(PARAM_KEY, JSON.stringify(data));
}
export function GetDataStorage(): { themes: ThemeTokensType, selected: ThemeType } {
  const data = localStorage.getItem(PARAM_KEY);
  if(!data) {
    return null
  }
  const parsed = JSON.parse(data);
  return parsed;
}