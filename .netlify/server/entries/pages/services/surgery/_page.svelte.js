import { s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, a as each } from "../../../../chunks/ssr.js";
import { $ as $format } from "../../../../chunks/runtime.js";
/* empty css                        */
const css = {
  code: "img.svelte-gg7if8{width:600px\n	}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport { _ } from \\"svelte-i18n\\";\\n\\timport { locale } from \\"svelte-i18n\\";\\n\\timport '../styles.css'\\n<\/script>\\n\\n<div class=\\"text-block\\" id=\\"welcome\\">\\n\\t<h1 class=\\"title\\">{$_(\\"surgery.title\\")}</h1>\\n\\t<h2 class=\\"subtitle\\">{@html $_(\\"surgery.subtitle\\")}</h2>\\n\\t<img src=\\"../images/implant.jpg\\" alt=\\"Implant\\" class=\\"service-img\\">\\n\\t{#each $_(\\"surgery.content\\") as content}\\n\\t\\t<h3 class=\\"topic\\">{content.topic}</h3>\\n\\t\\t<p class=\\"text\\">{@html content.text}</p>\\n\\t{/each}\\n</div>\\n\\n<style>\\n\\timg{\\n\\t\\twidth: 600px\\n\\t}\\n</style>"],"names":[],"mappings":"AAiBC,iBAAG,CACF,KAAK,CAAE;AACT,CAAC"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$result.css.add(css);
  $$unsubscribe__();
  return `<div class="text-block" id="welcome"><h1 class="title">${escape($_("surgery.title"))}</h1> <h2 class="subtitle"><!-- HTML_TAG_START -->${$_("surgery.subtitle")}<!-- HTML_TAG_END --></h2> <img src="../images/implant.jpg" alt="Implant" class="service-img svelte-gg7if8"> ${each($_("surgery.content"), (content) => {
    return `<h3 class="topic">${escape(content.topic)}</h3> <p class="text"><!-- HTML_TAG_START -->${content.text}<!-- HTML_TAG_END --></p>`;
  })} </div>`;
});
export {
  Page as default
};
