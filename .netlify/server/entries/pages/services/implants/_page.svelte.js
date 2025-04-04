import { s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, a as each } from "../../../../chunks/ssr.js";
import { $ as $format } from "../../../../chunks/runtime.js";
/* empty css                        */
const css = {
  code: "img.svelte-xdrip1{width:600px}@media(max-width: 1000px){img.svelte-xdrip1{width:100%}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport { _ } from \\"svelte-i18n\\";\\n\\timport { locale } from \\"svelte-i18n\\";\\n\\timport '../styles.css'\\n<\/script>\\n\\n<div class=\\"text-block\\" id=\\"welcome\\">\\n\\t<h1 class=\\"title\\">{$_(\\"implants.title\\")}</h1>\\n\\t<h2 class=\\"subtitle\\">{$_(\\"implants.subtitle\\")}</h2>\\n\\t<img src=\\"../images/implant.jpg\\" alt=\\"Implant\\">\\n\\t{#each $_(\\"implants.content\\") as content}\\n\\t\\t<h3 class=\\"topic\\">{content.topic}</h3>\\n\\t\\t<p class=\\"text\\">{@html content.text}</p>\\n\\t{/each}\\n</div>\\n\\n<style>\\n\\timg{\\n\\t\\twidth: 600px;\\n\\t}\\n\\t@media (max-width: 1000px){\\n\\t\\timg{\\n\\t\\t\\twidth: 100%;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAiBC,iBAAG,CACF,KAAK,CAAE,KACR,CACA,MAAO,YAAY,MAAM,CAAC,CACzB,iBAAG,CACF,KAAK,CAAE,IACR,CACD"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$result.css.add(css);
  $$unsubscribe__();
  return `<div class="text-block" id="welcome"><h1 class="title">${escape($_("implants.title"))}</h1> <h2 class="subtitle">${escape($_("implants.subtitle"))}</h2> <img src="../images/implant.jpg" alt="Implant" class="svelte-xdrip1"> ${each($_("implants.content"), (content) => {
    return `<h3 class="topic">${escape(content.topic)}</h3> <p class="text"><!-- HTML_TAG_START -->${content.text}<!-- HTML_TAG_END --></p>`;
  })} </div>`;
});
export {
  Page as default
};
