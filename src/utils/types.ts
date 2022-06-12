

export interface ThemeTokensType {
  label: string,
  persistData: boolean,
  themes: ThemeType[]
}


export interface ThemeType {
  name: string
  miniLogo: string
  tokens: { 
    [key: string]: string | number
  }
}

export interface OptionsThemeType { 
  name: string,
  id: string,
  value: string,
  miniLogo?: string,
  type: 'image' | 'icon'
}