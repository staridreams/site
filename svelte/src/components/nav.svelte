<script lang="ts">
   const routes = [
      {
         name: 'projects',
         path: '/projects'
      },
      {
         name: 'blog',
         path: '/'
      },
      {
         name: 'about',
         path: '/about'
      }
   ];

   import { page } from '$app/stores';
</script>

<nav class="h-16 w-full p-1 py-5 md:flex md:items-center md:justify-center">
   <h1 class="text-bold text-xl md:absolute md:left-4">Logo</h1>
   <ul class="max-h-16 md:flex md:items-center md:justify-between">
      {#each routes as route}
         <li
            class="underliner transition-all duration-200 sm:my-3 md:mx-14 md:my-0"
            class:[font-weight:550]={route.path === $page.url.pathname}
         >
            <a href={route.path}>{route.name}</a>
         </li>
      {/each}
   </ul>
</nav>

<style lang="postcss">
   .underliner {
      @apply relative cursor-pointer overflow-hidden duration-300 after:absolute after:bottom-0 after:right-full after:h-[2px] after:w-full after:rounded-lg after:bg-black after:duration-300 hover:after:translate-x-full;
   }
</style>
