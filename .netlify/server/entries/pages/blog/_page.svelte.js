import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "../../../chunks/runtime.js";
const css = {
  code: "h1.svelte-5gihmd{font-size:2.5rem}.block.svelte-5gihmd{padding:5rem 15%}@media(max-width: 1000px){.block.svelte-5gihmd{padding:2rem 2rem}}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport { _ } from \\"svelte-i18n\\";\\n\\timport { locale } from \\"svelte-i18n\\";\\n<\/script>\\n\\n<div class=\\"block\\" id=\\"welcome\\">\\n\\t<h1>Coming soon...</h1>\\n\\t\\n</div>\\n\\n<style>\\n\\th1{\\n\\t\\tfont-size: 2.5rem;\\n\\t}\\n\\th3{\\n\\t\\tcolor: blue;\\n\\t\\tfont-size: 2rem;\\n\\t}\\n\\tp{\\n\\t\\tfont-size: 1.5rem;\\n\\t}\\n\\t.block{\\n\\t\\tpadding: 5rem 15%;\\n\\t}\\n\\t@media (max-width: 1000px){\\n\\t\\t.block{\\n\\t\\t\\tpadding: 2rem 2rem;\\n\\t\\t}\\n\\t\\timg{\\n\\t\\t\\twidth: 100%;\\n\\t\\t}\\n\\t}\\n\\timg{\\n\\t\\twidth: 600px;\\n\\t}\\n\\t#services{\\n\\t\\tbackground-color: #FFDDDD;\\n\\t}\\n\\t#technology{\\n\\t\\tbackground-color: #FFDDDD;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAWC,gBAAE,CACD,SAAS,CAAE,MACZ,CAQA,oBAAM,CACL,OAAO,CAAE,IAAI,CAAC,GACf,CACA,MAAO,YAAY,MAAM,CAAC,CACzB,oBAAM,CACL,OAAO,CAAE,IAAI,CAAC,IACf,CAID"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="block svelte-5gihmd" id="welcome" data-svelte-h="svelte-f45nbf"><h1 class="svelte-5gihmd">Coming soon...</h1> </div>`;
});
export {
  Page as default
};
