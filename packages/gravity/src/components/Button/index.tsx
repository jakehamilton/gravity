import { FunctionComponent, JSX } from "preact";

export interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {}

const Button: FunctionComponent<ButtonProps> = ({ ...props }) => {
	return (
		<button {...props} w:p="x-5 y-4">
			tomato
		</button>
	);
};

export default Button;
