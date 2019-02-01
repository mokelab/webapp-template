import { MDCTextField } from "@material/textfield";

export const mdcText = (node: HTMLElement, ...args: any[]) => {
    new MDCTextField(node);
    return {
        teardown: () => {}
    };
};
