import { useGlobals } from "@storybook/api";
import { Icons, WithTooltip } from "@storybook/components";
import React from "react";
import { PARAM_KEY } from "../constants";
import { MountedOptions, ValidatorArrayTheme } from "../utils";
import { OptionsThemeType, ThemeType } from "../utils/types";
import { ButtonItem, ItemSelected, ViewToolTip } from "./styles";


interface propsDropDown {
  list: ThemeType[]
  label: string
  setTheme: (themeSelected: OptionsThemeType) => void
}

export const DropdownTool = (props: propsDropDown) => {
  const { list = [], label = 'Theme' } = props;

  const [{ themeVariableCss  }, updateGlobals] = useGlobals();
  const [options, setOptions] = React.useState<OptionsThemeType[]>([]);


  React.useEffect(() => {
    setListOptionsItem()
  }, [])


  const LabelState = React.useCallback(() => {
    return <>
    {!!themeVariableCss && !!themeVariableCss?.name ? 
      <ItemSelected shadow className={`button-` + PARAM_KEY}>
        {!!themeVariableCss?.miniLogo && 
          <img src={themeVariableCss.miniLogo} alt=""/>
        }
        <span>{themeVariableCss?.name}</span>
      </ItemSelected>
      : 
      <>
      <ItemSelected>
        <Icons icon="lightning" />
        <span>{label}</span>
      </ItemSelected>
      </>
    }
    </>
  }, [themeVariableCss])

  ////////////////
  /// Functions ///
  ////////////////
  /*
  * @function: setListOptionsItem
  * @description: get the token css
  */
  function setListOptionsItem() {
    const validator =  ValidatorArrayTheme(list);
    if(validator) { 
      const values = MountedOptions(list)
      if(values.length) { 
        setOptions(values)
      }
    }
  }

  const toggleMyTool = React.useCallback(
    (item: any) => 
      updateGlobals({
        themeVariableCss: item,
      }),
    [themeVariableCss]
  );

  const ComponentItem = () => { 
    return (
      <ViewToolTip>
        {options.map((item, index) => {
          return (
            <ButtonItem 
              key={index}  
              onClick={() => toggleMyTool(item)} 
            >
              {item.type === 'icon' && <Icons icon="lightning" />  }
              {item.type === 'image' && <img src={item.miniLogo} alt=""/> }
              {item.name} 
            </ButtonItem>
          )
        })}
      </ViewToolTip>
    )
  }
  

  return (
    <WithTooltip placement="top" trigger="click" tooltip={ () => ComponentItem() }>
        {LabelState()}
    </WithTooltip>
  );
}




  