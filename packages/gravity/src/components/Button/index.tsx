import { FunctionComponent, JSX } from "preact";
import { useMemo } from "preact/hooks";

export interface UniqueButtonProps {
	size: "sm" | "md" | "lg";
	variant: "fill" | "outline" | "text";
}

export type ButtonProps = UniqueButtonProps &
	Omit<JSX.HTMLAttributes<HTMLButtonElement>, keyof UniqueButtonProps>;

const Button: FunctionComponent<ButtonProps> = ({
	size = "sm",
	variant = "fill",
	...props
}) => {
	const sizeClasses = useMemo(() => {
		switch (size) {
			default:
			case "sm":
				return "px-5 py-2";
			case "md":
				return "px-6 py-3 text-size-[1.35rem]";
			case "lg":
				return "px-6 py-3 text-size-[1.75rem]";
		}
	}, [size]);

	const variantClasses = useMemo(() => {
		switch (variant) {
			default:
			case "fill":
				return "text-white bg-primary-600 hover:bg-primary-500 focus-visible:bg-primary-500 active:bg-primary-700";
			case "outline":
				return "text-primary-600 bg-transparent border-solid border-2 border-primary-600 hover:border-primary-400 focus-visible:border-primary-500 active:border-primary-700 hover:text-primary-500 focus-visible:text-primary-500 !active:text-primary-700 !shadow-none";
			case "text":
				return "";
		}
	}, [variant, size]);

	return (
		<button
			w:font="antialiased subpixel-antialiased medium"
			w:border="rounded"
			w:transition="all ease-out duration-200"
			w:transform="gpu"
			w:hover_transform="-translate-y-1"
			w:focus-visible_transform="-translate-y-1"
			w:active_transform="!translate-y-1"
			w:outline="none"
			w:focus_outline="none"
			w:ring="0 transparent offset-0"
			w:shadow="2xl md"
			w:hover_shadow="lg"
			w:active_shadow="!md !inner"
			w:focus-visible_ring="4 primary-500 offset-3"
			{...props}
			class={`group ${sizeClasses} ${variantClasses} ${props.class ?? ""}`}
		>
			Click Here
		</button>
	);
};

export default Button;
