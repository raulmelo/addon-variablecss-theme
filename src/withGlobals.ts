import type { DecoratorFunction } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";
import { GeneratorId } from "./utils";
import { DisplayToolState } from "./utils/actions";
import { GetDataStorage, SetDataStorage } from "./utils/persist";
import { ThemeType } from "./utils/types";


export const withGlobals: DecoratorFunction = (StoryFn, context) => {
  const [{ themeVariableCss }, updateGlobals] = useGlobals();
  
  const isInDocs = context.viewMode === "docs";
  const themes = context.parameters.designTokensCss?.themes || [];
  const persist = context.parameters.designTokensCss?.persistData || false;



  useEffect(() => {
    const dataLocal: any = GetDataStorage();
    if(dataLocal && dataLocal.themes && dataLocal.selected) {
      updateGlobals({themeVariableCss: dataLocal.selected});
      const selectorId = isInDocs ? `#anchor--${context.id} .docs-story` : `#root`;
      DisplayToolState(selectorId, { isInDocs, themeVariableCss: dataLocal.selected.name, themeSelected: dataLocal.selected })
    }
  }, [])

  useEffect(() => {
    let themeSelected = null
    if(!!themeVariableCss && !!themes) {
      themeSelected = themes.find((item: ThemeType) => GeneratorId(item.name) === themeVariableCss.id)
    }
    if(!!persist && themeSelected && !!themes) {
      SetDataStorage(themes, themeSelected)
    }
    const selectorId = isInDocs ? `#anchor--${context.id} .docs-story` : `#root`;
    DisplayToolState(selectorId, { isInDocs, themeVariableCss, themeSelected})
  }, [themeVariableCss]);
  return StoryFn();
};



