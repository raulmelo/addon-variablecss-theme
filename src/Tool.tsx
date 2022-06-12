import { useGlobals, useParameter } from "@storybook/api";
import React from "react";
import { DropdownTool } from "./components/Dropdown";
import { PARAM_KEY } from "./constants";
import { DisplayToolState } from "./utils/actions";
import { ThemeTokensType, ThemeType } from "./utils/types";

export const Tool = () => {
  const [{ themeVariableCss }, updateGlobals] = useGlobals();
  const tokensCss = useParameter<ThemeTokensType>(PARAM_KEY)


  React.useEffect( () => {
    if(tokensCss && themeVariableCss) {
      const themeSelected = tokensCss?.themes.filter((_theme: ThemeType) => _theme.name === themeVariableCss?.name)[0];
      DisplayToolState('html', {isInDocs: false,  themeVariableCss: themeVariableCss.name, themeSelected: themeSelected} )
    }
  }, [themeVariableCss] )
  

  
  if (!tokensCss && !tokensCss?.themes?.length) {
    return null
  }


  

  function setThemeStorybook() { 
    console.log(document.querySelector('#root'), 'theme')
  }

  const { themes = [], label = 'Themes'  } = tokensCss;
  return <DropdownTool 
    label={label}  
    list={themes} 
    setTheme={ () => setThemeStorybook() }
  />
};

