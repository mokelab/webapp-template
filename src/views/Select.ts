import Ractive from "ractive";
import { MDCSelect } from "@material/select";

export const decorator = (node: HTMLElement, ...args: any[]) => {
  const select = new MDCSelect(node);
  select.listen("MDCSelect:change", () => {
    // notify callback to set value as component value
    args[0](select.value);
  });
  return {
    teardown: () => {
      select.destroy();
    },
  };
};

const Select = Ractive.extend({
  template: `
<div as-mdc-select="onChange" class="mdc-select {{#if disabled}}mdc-select--disabled{{/if}}">
  <div class="mdc-select__anchor">
  <i class="mdc-select__dropdown-icon"></i>
  <div class="mdc-select__selected-text"></div>
  <label class="mdc-floating-label">{{label}}</label>
  <div class="mdc-line-ripple"></div>
  </div>
  <div class="mdc-select__menu mdc-menu mdc-menu-surface demo-width-class">
  <ul class="mdc-list">
    {{#options:i}}
    <li class="mdc-list-item {{#if value == options[i].val}}mdc-list-item--selected{{/if}}" {{#if value == options[i].val}}aria-selected="true"{{/if}} data-value="{{options[i].val}}">{{options[i].label}}</li>
    {{/}}
  </ul>
  </div>
</div>`,
  on: {
    init: function() {
      this.set({
        onChange: (value: any) => {
          this.set({ value: value });
        },
        eq: (a: any, b: any) => {
          return a == b;
        },
      });
    },
  },
  decorators: {
    "mdc-select": decorator,
  },
});

export default Select;
