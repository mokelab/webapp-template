import Ractive from "ractive";
import { MDCRipple } from "@material/ripple";

const ripple = (node: HTMLElement, ...args: any[]) => {
    const e = new MDCRipple(node);
    return {
        teardown: () => {
            e.destroy();
        },
    };
};

const Button = Ractive.extend(<any>{
    template: `
<button as-mdc-ripple 
  class="mdc-button {{#if accent}}mdc-button--raised{{/if}} {{class}}"
  style="{{style}}"
  on-click="@this._click()"
  disabled="{{disabled}}">
  <span class="mdc-button__label">{{yield}}</span>
</button>`,
    decorators: {
        "mdc-ripple": ripple,
    },
    _click: function () {
        this.fire("click");
    },
});

export default Button;
