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
npm install --save-dev storybook-addon-designs
# yarn add -D storybook-addon-designs
```

### 2. Register the addon in `main.js`

```js
module.exports = {
  addons: ['storybook-addon-designs'],
}
```

### 3. Add it to story!

```js
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'My stories',
  component: Button,
  decorators: [withDesign],
}

export const myStory = () => <Button>Hello, World!</Button>

myStory.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
  },
}
```

## Similar projects

- Adobe XD: [storybook-addon-xd-designs](https://github.com/morgs32/storybook-addon-xd-designs)
- Zeplin: [storybook-zeplin](https://github.com/mertkahyaoglu/storybook-zeplin)
- Abstract: [storybook-addons-abstract](https://github.com/amccloud/storybook-addons-abstract)
