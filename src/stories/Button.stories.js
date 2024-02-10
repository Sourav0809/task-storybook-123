import Button from "../components/Button";

export default {
    title: "Button",
    component: Button,
    subcomponents: { LoginScreen: Form },

};

const Template = args => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
    backgroundColor: "red",
    label: "Click Me",
    size: "lg",
};

