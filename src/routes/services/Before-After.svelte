<script>
    import { _ } from "svelte-i18n";
    export let src1 = '';
    export let alt1 = '';
    export let src2 = '';
    export let alt2 = '';
</script>

<div id="before-after-combined">
    <div class="before=after-box">
        <h1 class="befoe-after-text">Before</h1>
        <img src = {src1} alt = {alt1}>
    </div>
    <div class="before=after-box">
        <h1 class="befoe-after-text">After</h1>
        <img src = {src2} alt = {alt2}>
    </div>
</div>

<style>
    #before-after-combined{
        display: flex;
        object-fit: cover;
    }

    img{
        max-width: 80%;
        object-fit: cover;
    }

    #before-after-text{
        margin-right:0;
    }
</style>