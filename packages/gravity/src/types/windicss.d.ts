import { AttributifyNames } from "windicss/types/jsx";
import { JSXInternal } from "preact/src/jsx";

type Prefix = "w:";

declare module "preact/src/jsx" {
	namespace JSXInternal {
		interface HTMLAttributes<
			RefType extends EventTarget = EventTarget,
			Target extends EventTarget = EventTarget
		> extends Partial<Record<AttributifyNames<Prefix>, string>> {}
	}
}
