import Ractive from "ractive";
import { MDCList } from "@material/list";

export const mdcList = (node: HTMLElement, ...args: any[]) => {
    const e = new MDCList(node);
    return {
        teardown: () => {
            e.destroy();
        },
    };
};

const ListView = Ractive.extend({
    template:
        '<ul as-mdc-list class="mdc-list {{class}}">' + "{{yield}}" + "</ul>",
    decorators: {
        "mdc-list": mdcList,
    },
});

export default ListView;
