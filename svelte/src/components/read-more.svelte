<script lang="ts">
   import { fly } from 'svelte/transition';
   let show = false;

   const toggle = () => {
      show = !show;
   };
</script>

<div class="relative">
   <p
      class="-mb-2 cursor-pointer text-center text-base"
      on:click={() => toggle()}
   >
      {show ? 'Hide' : 'Show More'}
   </p>
   {#if show}
      <div class="mt-6" in:fly|local out:fly|local>
         <slot />
      </div>
   {/if}
</div>
