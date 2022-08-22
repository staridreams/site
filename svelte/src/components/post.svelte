<script>
   // @ts-nocheck
   import ContentWrapper from '@/components/content-wrapper.svelte';

   export let title;
</script>

<svelte:head>
   <title>starbunn | {title}</title>
   <link
      rel="stylesheet"
      defer
      href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
   />
</svelte:head>

<ContentWrapper>
   <div class="prose dark:prose-invert m-auto w-screen text-center">
      <slot />
   </div>
</ContentWrapper>
