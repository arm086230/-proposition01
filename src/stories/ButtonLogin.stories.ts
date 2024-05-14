import type {Meta , StoryObj} from "@storybook/react"
import {fn} from "@storybook/test"
import ButtonLogin from "@/components/button.login"

const meta = {
    title: "LSC/ButtonLogin",
    component: ButtonLogin,
    parameters: {
      layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
      backgroundColor: { control: "color" },
    },
    args: { onClick: fn() },
  } satisfies Meta<typeof ButtonLogin>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  export const Primary: Story = {
    args: {
      primary: true,
      label: "Button",
    },
  };
  
  export const Secondary: Story = {
    args: {
      label: "Button",
    },
  };
  
  export const Large: Story = {
    args: {
      size: "large",
      label: "Button",
    },
  };
  
  export const Small: Story = {
    args: {
      size: "small",
      label: "Button",
    },
  };
  