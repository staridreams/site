<script lang="ts">
   import { fly } from 'svelte/transition';
   export let url: string;
</script>

{#key url}
   <div
      out:fly={{ duration: 100, y: 10 }}
      in:fly={{ delay: 100, duration: 200, y: -10 }}
      class="m-0 h-full w-full p-0"
   >
      <slot />
   </div>
{/key}
