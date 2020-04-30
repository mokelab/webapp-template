import Ractive from "ractive";
import { MDCTextField } from "@material/textfield";

const decorator = (node: HTMLElement, ...args: any[]) => {
    const e = new MDCTextField(node);
    return {
        teardown: () => {
            e.destroy();
        },
    };
};

const TextField = Ractive.extend({
    template: `
<label as-mdc-text class="mdc-text-field mdc-text-field--filled {{class}}">
  <div class="mdc-text-field__ripple"></div>
  <input
    class="mdc-text-field__input"
    type="{{type}}"
    name="{{name}}"
    aria-labelledby="{{id}}"
    value="{{value}}"
    {{#if required}}required{{/if}}>
  <span class="mdc-floating-label" id="{{id}}">{{label}}</span>
  <div class="mdc-line-ripple"></div>
</label>`,
    /*    
    `<div as-mdc-text class="mdc-text-field {{class}}">
  <div class="mdc-text-field__ripple"></div>
  <input class="mdc-text-field__input"
    type="{{type}}"
    name="{{name}}"
    aria-labelledby="{{id}}"
    value="{{value}}"
    >
  <span class="mdc-floating-label" id="{{id}}">{{label}}</span>
  <div class="mdc-line-ripple"></div>
</div>`,
*/
    decorators: {
        "mdc-text": decorator,
    },
});

export const TextArea = Ractive.extend({
    template: `
<div as-mdc-text class="mdc-text-field mdc-text-field--textarea {{class}}">
  <textarea id="{{id}}" class="mdc-text-field__input" rows="4" cols="40" value="{{value}}"></textarea>
  <div class="mdc-notched-outline">
    <div class="mdc-notched-outline__leading"></div>
    <div class="mdc-notched-outline__notch">
      <label for="textarea" class="mdc-floating-label">{{label}}</label>
    </div>
    <div class="mdc-notched-outline__trailing"></div>
  </div>
</div>
  `,
    decorators: {
        "mdc-text": decorator,
    },
});

export default TextField;
