<script lang="ts" context="module">
   export const load: import('@sveltejs/kit').Load = async ({
      error,
      status
   }) => ({
      props: {
         message: error?.message,
         status
      }
   });
</script>

<script lang="ts">
   import ContentWrapper from '@/components/content-wrapper.svelte';
   import ReadMore from '@/components/read-more.svelte';

   export let message: string;
   export let status: number | string;
</script>

{#if status === 404}
   <ContentWrapper>
      <h1 class="text-bold text-center text-2xl">404</h1>
      <p class="mt-5 text-center">This page doesn't exist.</p>
   </ContentWrapper>
{:else}
   <ContentWrapper>
      <h1 class="text-bold text-center text-2xl">{status}.</h1>
      <ReadMore>
         <p class="mt-5 text-center">{message}</p>
      </ReadMore>
   </ContentWrapper>
{/if}
