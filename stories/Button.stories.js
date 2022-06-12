import React from "react";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  parameters: { 
    layout: 'centered',
  }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});


