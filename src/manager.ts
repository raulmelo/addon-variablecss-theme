import { addons } from "@storybook/manager-api";
import { ADDON_ID, TOOL_ID } from "./constants";
import { Tool } from "./Tool";
import { Addon_TypesEnum } from "@storybook/types";

/**
 * Note: if you want to use JSX in this file, rename it to `manager.tsx`
 * and update the entry prop in tsup.config.ts to use "src/manager.tsx",
 */

// Register the addon
addons.register(ADDON_ID, () => {
  // Register the tool
  addons.add(TOOL_ID, {
    type: Addon_TypesEnum.TOOL,
    title: "designTokensCss",
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: Tool,
  });
});
