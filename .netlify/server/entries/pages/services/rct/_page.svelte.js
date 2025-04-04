import { s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, a as each } from "../../../../chunks/ssr.js";
import { $ as $format } from "../../../../chunks/runtime.js";
/* empty css                        */
const css = {
  code: "img.svelte-pswyl4{height:400px;margin:2rem;object-fit:cover}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport { _ } from \\"svelte-i18n\\";\\n\\timport { locale } from \\"svelte-i18n\\";\\n\\timport '../styles.css'\\n<\/script>\\n\\n<div class=\\"text-block\\" id=\\"welcome\\">\\n\\t<h1 class=\\"title\\">{$_(\\"rct.title\\")}</h1>\\n\\t<div class=\\"flex-container\\">\\n\\t\\t<img src=\\"../images/rct-before.jpg\\" alt=\\"Root Canal Before Treatment\\">\\n\\t\\t<img src=\\"../images/rct-after.jpg\\" alt=\\"Root Canal After Treatment\\">\\n\\t</div>\\n\\t{#each $_(\\"rct.content\\") as content}\\n\\t\\t<h3 class=\\"topic\\">{content.topic}</h3>\\n\\t\\t<p class=\\"text\\">{@html content.text}</p>\\n\\t{/each}\\n</div>\\n\\n<style>\\n\\timg{\\n\\t\\theight: 400px;\\n\\t\\tmargin: 2rem;\\n\\t\\tobject-fit: cover;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAmBC,iBAAG,CACF,MAAM,CAAE,KAAK,CACb,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KACb"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$result.css.add(css);
  $$unsubscribe__();
  return `<div class="text-block" id="welcome"><h1 class="title">${escape($_("rct.title"))}</h1> <div class="flex-container" data-svelte-h="svelte-fnqnnz"><img src="../images/rct-before.jpg" alt="Root Canal Before Treatment" class="svelte-pswyl4"> <img src="../images/rct-after.jpg" alt="Root Canal After Treatment" class="svelte-pswyl4"></div> ${each($_("rct.content"), (content) => {
    return `<h3 class="topic">${escape(content.topic)}</h3> <p class="text"><!-- HTML_TAG_START -->${content.text}<!-- HTML_TAG_END --></p>`;
  })} </div>`;
});
export {
  Page as default
};
