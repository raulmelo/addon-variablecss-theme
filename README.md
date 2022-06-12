<div align="center">
  <img src="./_docs/designtokensStorybook.png" width="104" alt="logo">
  <br/>
  <br/>
</div>
<hr/>

## Design Tokens with variables CSS 
Add your Themes using variables css and use them in your components.


create components with variables css, based on the theme you want to use.


## Example: 
- []()

<div align="center">
  <img src="./_docs/exemple-theme-root.gif" width="100%" alt="logo">
  <br/>
  <br/>
</div>
<hr/>



## Requirements

- Storybook@>=6.0.0
This addon should work well with any framework: If you find the case the addon not works, please open an issue.


## Getting started

### 1. Install

```sh
npm install --save-dev @outlinestudio/designtokenscss
# yarn add -D @outlinestudio/designtokenscss
```

### 2. Register the addon in `main.js`

```js
module.exports = {
  addons: ['designtokenscss'],
}
```

### 3. Add it to story!

```js
# Add preview.html to your storybook
import Themes from './themes.json'

export const parameters = {
  designTokensCss: {
    label: "Themes",
    persistData: true,
    themes: Themes
  }
}
