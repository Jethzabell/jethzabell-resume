import { w as slot, x as bind_props } from "../../chunks/index.js";
function _layout($$payload, $$props) {
  const prerender = true;
  const ssr = false;
  $$payload.out.push(`<!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!---->`);
  bind_props($$props, { prerender, ssr });
}
export {
  _layout as default
};
