import type {
  Renderer,
  PartialStoryFn as StoryFunction,
  StoryContext,
} from "@storybook/types";
import { useEffect, useGlobals } from "@storybook/preview-api";
import { GeneratorId } from "./utils";
import { DisplayToolState } from "./utils/actions";
import { GetDataStorage, SetDataStorage } from "./utils/persist";
import { ThemeType } from "./utils/types";
import React from "react";

export const withGlobals = (
  StoryFn: StoryFunction<Renderer>,
  context: StoryContext<Renderer>
) => {
  const [{ themeVariableCss }, updateGlobals] = useGlobals();
  // Is the addon being used in the docs panel
  const isInDocs = context.viewMode === "docs";
  const persist = context.parameters.designTokensCss?.persistData || false;
  const themes = context.parameters.designTokensCss?.themes || [];

  useEffect(() => {
    const dataLocal: any = GetDataStorage();
    if(dataLocal && dataLocal.themes && dataLocal.selected) {
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