import { UtilityNames, VariantNames } from "windicss/types/jsx";

export declare type AttributifyNames<
	Prefix extends string = "",
	Separator extends string = ":"
> =
	| `${Prefix}${UtilityNames}`
	| `${Prefix}${VariantNames}`
	| `${Prefix}${VariantNames}${Separator}${UtilityNames}`
	| `${Prefix}${VariantNames}${Separator}${VariantNames}${Separator}${UtilityNames}`;

type Prefix = "w:";
type Separator = "_";
type AttributifyProps = Partial<
	Record<AttributifyNames<Prefix, Separator>, string>
>;

declare module "preact/src/jsx" {
	namespace JSXInternal {
		interface HTMLAttributes<
			RefType extends EventTarget = EventTarget,
			Target extends EventTarget = EventTarget
		> extends AttributifyProps {}
	}
}
