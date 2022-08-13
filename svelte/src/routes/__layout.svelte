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
