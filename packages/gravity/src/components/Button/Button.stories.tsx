import Button from ".";

export default {
	title: "Components/Button",
	component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
