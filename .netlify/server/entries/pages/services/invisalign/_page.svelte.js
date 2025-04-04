import { s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, a as each } from "../../../../chunks/ssr.js";
import { $ as $format } from "../../../../chunks/runtime.js";
/* empty css                        */
import "next/dist/shared/lib/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe__();
  return `<div class="text-block" id="welcome"><h1 class="title">${escape($_("invisalign.title"))}</h1> ${each($_("invisalign.content"), (content) => {
    return `<h3 class="topic">${escape(content.topic)}</h3> <p class="text"><!-- HTML_TAG_START -->${content.text}<!-- HTML_TAG_END --></p>`;
  })}</div>`;
});
export {
  Page as default
};
