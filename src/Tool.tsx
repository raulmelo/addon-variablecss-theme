import React, { memo, useEffect } from "react";
import { useGlobals, useParameter } from "@storybook/manager-api";
import {  PARAM_KEY, TOOL_ID } from "./constants";

import { DropdownTool } from "./components/Dropdown";
import { ThemeTokensType, ThemeType } from "./utils/types";
import { DisplayToolState } from "./utils/actions";

export const Tool = memo(function MyAddonSelector() {
  const [{ themeVariableCss }] = useGlobals();
  const tokensCss = useParameter<ThemeTokensType>(PARAM_KEY)

  useEffect( () => {
    if(tokensCss && themeVariableCss) {
      const themeSelected = tokensCss?.themes.filter((_theme: ThemeType) => _theme.name === themeVariableCss?.name)[0];
      DisplayToolState('html', {isInDocs: false,  themeVariableCss: themeVariableCss.name, themeSelected: themeSelected} )
    }
  }, [themeVariableCss])

  if (!tokensCss && !tokensCss?.themes?.length) {
    return null
  }

  function setThemeStorybook() {}

  const { themes = [], label = 'Themes'  } = tokensCss;
  return (
    <DropdownTool 
      key={TOOL_ID}
      label={label}  
      list={themes} 
      setTheme={ () => setThemeStorybook() }
    />
  );
});
