import { MDCTextField } from "@material/textfield";
import { MDCRipple } from "@material/ripple";

export const mdcText = (node: HTMLElement, ...args: any[]) => {
    new MDCTextField(node);
    return {
        teardown: () => {}
    };
};

export const mdcRipple = (node: HTMLElement, ...args: any[]) => {
    new MDCRipple(node);
    return {
        teardown: () => {}
    };
};
