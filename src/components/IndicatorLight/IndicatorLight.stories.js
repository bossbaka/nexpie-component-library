import { IndicatorLight } from "./IndicatorLight";

export default {
  title: "Components/IndicatorLight",
  component: IndicatorLight,
};

// const Template = (args) => <IndicatorLight {...args} />;

// export const Success = Template.bind({});
// Success.args = {
//   status: "success",
// };

// export const Error = Template.bind({});
// Error.args = {
//   status: "error",
// };

export const backgroundColor = () => <IndicatorLight backgroundColor="#000" />;

export const neutral = () => <IndicatorLight status="neutral" />;

export const success = () => <IndicatorLight status="success" />;

export const error = () => <IndicatorLight status="error" />;

export const warning = () => <IndicatorLight status="warning" />;

export const processing = () => <IndicatorLight status="processing" />;
