import { s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, b as add_attribute, e as escape, a as each, v as validate_component } from "../../../chunks/ssr.js";
import { $ as $format } from "../../../chunks/runtime.js";
const css$1 = {
  code: "html.svelte-jkp6sa{background-color:#FFDDDD;margin:none;margin-top:2rem;padding:2rem 15%;padding-left:2rem;display:flex}#reviewer_profile.svelte-jkp6sa{margin-left:1rem}#reviewer_image.svelte-jkp6sa{width:5rem}#reviewer_name.svelte-jkp6sa{width:7rem}#review.svelte-jkp6sa{margin-left:2rem}",
  map: '{"version":3,"file":"Review.svelte","sources":["Review.svelte"],"sourcesContent":["<script>\\n\\timport { _ } from \\"svelte-i18n\\";\\n    export let img = \\"\\";\\n    export let name = \\"\\";\\n    export let review = \\"\\";\\n\\n<\/script>\\n\\n<html lang=\\"eng\\">\\n    <div id=\\"reviewer_profile\\">\\n        <!-- svelte-ignore a11y-img-redundant-alt -->\\n        <img src = {img} alt=\\" Reviewer Profile Picture\\" id=\\"reviewer_image\\">\\n        <p id=\\"reviewer_name\\">{name}</p>\\n    </div>\\n    <p id=\\"review\\">{review}</p>\\n</html>\\n\\n<style>\\n    html{\\n\\t\\tbackground-color: #FFDDDD;\\n\\t\\tmargin: none;\\n        margin-top:2rem;\\n\\t\\tpadding: 2rem 15%;\\n        padding-left: 2rem;\\n        display: flex;\\n\\t}\\n    #reviewer_profile{\\n        margin-left: 1rem;\\n    }\\n    #reviewer_image{\\n        width:5rem;\\n    }\\n    #reviewer_name{\\n        width:7rem;\\n    }\\n    #review{\\n        margin-left: 2rem;\\n    }\\n</style>"],"names":[],"mappings":"AAkBI,kBAAI,CACN,gBAAgB,CAAE,OAAO,CACzB,MAAM,CAAE,IAAI,CACN,WAAW,IAAI,CACrB,OAAO,CAAE,IAAI,CAAC,GAAG,CACX,YAAY,CAAE,IAAI,CAClB,OAAO,CAAE,IAChB,CACG,+BAAiB,CACb,WAAW,CAAE,IACjB,CACA,6BAAe,CACX,MAAM,IACV,CACA,4BAAc,CACV,MAAM,IACV,CACA,qBAAO,CACH,WAAW,CAAE,IACjB"}'
};
const Review = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { img = "" } = $$props;
  let { name = "" } = $$props;
  let { review = "" } = $$props;
  if ($$props.img === void 0 && $$bindings.img && img !== void 0) $$bindings.img(img);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.review === void 0 && $$bindings.review && review !== void 0) $$bindings.review(review);
  $$result.css.add(css$1);
  return `<html lang="eng" class="svelte-jkp6sa"><div id="reviewer_profile" class="svelte-jkp6sa"> <img${add_attribute("src", img, 0)} alt=" Reviewer Profile Picture" id="reviewer_image" class="svelte-jkp6sa"> <p id="reviewer_name" class="svelte-jkp6sa">${escape(name)}</p></div> <p id="review" class="svelte-jkp6sa">${escape(review)}</p> </html>`;
});
const css = {
  code: "html.svelte-15zrjjb{margin:none;padding:4rem 15%;padding-bottom:6rem}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport { _ } from \\"svelte-i18n\\";\\n    import Review from \\"./Review.svelte\\";\\n<\/script>\\n\\n<html lang=\\"en\\">\\n    <h1>Google Reviews</h1>\\n\\t{#each $_(\\"reviews\\") as review}\\n    \\t<Review img= {review.img} name = {review.name} review = {review.review}/>\\n\\t{/each}\\n</html>\\n\\n<style>\\n    html{\\n\\t\\tmargin: none;\\n\\t\\tpadding: 4rem 15%;\\n\\t\\tpadding-bottom: 6rem;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAaI,mBAAI,CACN,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CAAC,GAAG,CACjB,cAAc,CAAE,IACjB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$result.css.add(css);
  $$unsubscribe__();
  return `<html lang="en" class="svelte-15zrjjb"><h1 data-svelte-h="svelte-f3erta">Google Reviews</h1> ${each($_("reviews"), (review) => {
    return `${validate_component(Review, "Review").$$render(
      $$result,
      {
        img: review.img,
        name: review.name,
        review: review.review
      },
      {},
      {}
    )}`;
  })} </html>`;
});
export {
  Page as default
};
