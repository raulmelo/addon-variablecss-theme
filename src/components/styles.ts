import { Button } from "@storybook/components";
import { convert, styled, themes } from "@storybook/theming";


export const ViewToolTip = styled.div({
  background: convert(themes.normal).background.content,
  borderRadius: convert(themes.normal).appBorderRadius,
  maxHeight: 300,
  maxWidth: 300,
  overflowY: 'auto',
  display: 'grid',
  gridTemplateColumns: '1fr',

})



export const ButtonItem = styled(Button)({
  width: '100%',
  maxWidth: 300,
  borderRadius: convert(themes.normal).appBorderRadius,
  borderBottom: '1px solid ' + convert(themes.normal).background.hoverable,
  padding: '8px 10px',
  display: "grid",
  gridTemplateColumns: '16px 1fr',
  gap: '8px',
  textAlign: 'left',
  alignItems: 'center',
  ':hover': {
    background: convert(themes.normal).background.hoverable,
    cursor: 'pointer'
  },
  'img': {
    width: 16,
    height: 16,
    objectFit: 'contain',
  }
});


export const ItemSelected = styled.div((props: {shadow?: boolean}) => ({
  width: '100%',
  height: 'calc(100% - 10px)',
  maxWidth: 300,
  padding: '8px 10px',
  display: "flex",
  textAlign: 'left',
  alignItems: 'center',
  backgroundColor: 'rgb(93 28 28 / 6%)',
  borderRadius: 15,
  margin: '5px auto',
  'span': {
    fontSize: 13
  },
  'svg': {
    width: 14,
    marginRight: 2
  },
  'img': {
    width: 16,
    height: 16,
    objectFit: 'contain',
    marginRight: 8
  }
}));
