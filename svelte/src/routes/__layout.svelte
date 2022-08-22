<script lang="ts" context="module">
   export const load: import('@sveltejs/kit').Load = async ({ url }) => ({
      props: { url }
   });
</script>

<script lang="ts">
   import Footer from '@/components/footer.svelte';
   import Nav from '@/components/nav.svelte';
   import PageTransition from '@/components/page-transition.svelte';
   import { theme } from '@/stores/theme';
   import { classList } from 'svelte-body';
   import '../app.css';

   export let url: string;
</script>

<svelte:body use:classList={`${$theme}`} />
<Nav />
<PageTransition {url}>
   <slot />
</PageTransition>
<Footer />

<style lang="postcss">
   :global(body),
   :global(html) {
      height: 100vh;
      transition: background 150ms ease;
   }

   :global(body.light) {
      background-color: #eff1f5;
      --textColor: 76 79 105;
   }

   :global(body.dark) {
      background-color: #24273a;
      --textColor: 202 211 245;
   }

   :global(::selection) {
      background: #ee99a0;
      color: #1e293b;
   }
</style>
