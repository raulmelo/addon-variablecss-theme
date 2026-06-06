import { WithTooltip } from "storybook/internal/components";
import { LightningIcon, StarHollowIcon } from "@storybook/icons";
import React, { memo } from "react";
import { PARAM_KEY } from "../constants";
import { MountedOptions, ValidatorArrayTheme } from "../utils";
import { OptionsThemeType, ThemeType } from "../utils/types";
import { ButtonItem, ItemSelected, ViewToolTip } from "./styles";
import { useGlobals } from "storybook/manager-api";
import { GetDataStorage } from "../utils/persist";

interface propsDropDown {
  list: ThemeType[];
  label: string;
  setTheme: (themeSelected: OptionsThemeType) => void;
}

export const DropdownTool = memo(function myDropdownMemo(props: propsDropDown) {
  const { list = [], label = "Theme" } = props;
  const [{ themeVariableCss }, updateGlobals] = useGlobals();
  const [options, setOptions] = React.useState<OptionsThemeType[]>([]);

  React.useEffect(() => {
    const dataLocal: any = GetDataStorage();
    if (dataLocal?.selected) {
      updateGlobals({
        ...global,
        themeVariableCss: dataLocal.selected,
      });
    }
    setListOptionsItem();
  }, []);

  const LabelState = React.useCallback(() => {
    return (
      <>
        {!!themeVariableCss && !!themeVariableCss?.name ? (
          <ItemSelected shadow className={`button-` + PARAM_KEY + "-selected"}>
            {!!themeVariableCss?.miniLogo && (
              <img src={themeVariableCss.miniLogo} alt="" />
            )}
            <span>{themeVariableCss?.name}</span>
          </ItemSelected>
        ) : (
          <>
            <ItemSelected>
              <LightningIcon />
              <span>{label}</span>
            </ItemSelected>
          </>
        )}
      </>
    );
  }, [themeVariableCss]);

  ////////////////
  /// Functions ///
  ////////////////
  /*
   * @function: setListOptionsItem
   * @description: get the token css
   */
  function setListOptionsItem() {
    const validator = ValidatorArrayTheme(list);
    if (validator) {
      const values = MountedOptions(list);
      if (values.length) {
        setOptions(values);
      }
    }
  }

  const toggleMyTool = React.useCallback(
    (item: any) =>
      updateGlobals({
        themeVariableCss: item,
      }),
    [themeVariableCss],
  );

  const ComponentItem = () => {
    return (
      <ViewToolTip>
        {options.map((item, index) => {
          return (
            <ButtonItem
              key={index}
              className={
                `button-` +
                PARAM_KEY +
                (themeVariableCss?.name === item.name ? " selected" : "")
              }
              onClick={() => toggleMyTool(item)}
            >
              {item.type === "icon" && <StarHollowIcon />}
              {item.type === "image" && !!item.miniLogo && (
                <img src={item.miniLogo} alt="" />
              )}
              {item.name}
            </ButtonItem>
          );
        })}
      </ViewToolTip>
    );
  };

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      tooltip={() => ComponentItem()}
    >
      <LabelState />
    </WithTooltip>
  );
});
