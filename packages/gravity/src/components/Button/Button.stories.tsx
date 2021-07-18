import "virtual:windi-devtools";

import Button from ".";

export default {
	title: "Components/Button",
	component: Button,
	args: {
		class: "",
	},
};

const renderButtons = (args) => (
	<div class="flex flex-col items-center gap-3">
		<div class="flex items-center gap-3">
			<Button {...args} size="sm" variant="fill" />
			<Button {...args} size="md" variant="fill" />
			<Button {...args} size="lg" variant="fill" />
		</div>
		<div class="flex items-center gap-3">
			<Button {...args} size="sm" variant="outline" />
			<Button {...args} size="md" variant="outline" />
			<Button {...args} size="lg" variant="outline" />
		</div>
		<div class="flex items-center gap-3">
			<Button {...args} size="sm" variant="text" />
			<Button {...args} size="md" variant="text" />
			<Button {...args} size="lg" variant="text" />
		</div>
	</div>
);
const Template = (args) => (
	<div class="mt-6">
		<div class="light">{renderButtons(args)}</div>
		<div class="dark mt-10">{renderButtons(args)}</div>
	</div>
);

export const Primary = Template.bind({});
Primary.args = {
	class: "",
	onClick: () => {
		console.log("click");
	},
};
