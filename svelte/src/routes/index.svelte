<script context="module" lang="ts">
   const allPosts = import.meta.glob('./posts/*.md');
   let body: any[] = [];
   for (let path in allPosts) {
      body.push(
         allPosts[path]().then((post: any) => {
            let metadata = post.metadata;
            return { path, metadata };
         })
      );
   }

   export async function load() {
      const posts = await Promise.all(body);
      return {
         props: { posts }
      };
   }
</script>

<script lang="ts">
   import ContentWrapper from '@/components/content-wrapper.svelte';

   export let posts: any[];
</script>

<svelte:head>
   <title>starbunn | blog</title>
</svelte:head>

<ContentWrapper>
   <div
      class="container mx-auto my-16 flex flex-wrap justify-center space-x-10"
   >
      {#each posts as post}
         <a class="group w-1/4" href={post.path.replace('.md', '')}>
            <div
               class="dark:bg-primary rounded-xl bg-[#24273a] p-6 shadow-md transition duration-200 group-hover:bg-[#ee99a0]"
            >
               <h2
                  class="pb-3 text-xl italic text-[#cad3f5] group-hover:text-[#24273a] dark:text-[#24273a]"
               >
                  {post.metadata.title}
               </h2>
               <p
                  class="text-md text-[#a5adcb] group-hover:text-[#4c4f69] dark:text-[#4c4f69]"
               >
                  {post.metadata.description}
               </p>
            </div>
         </a>
      {/each}
   </div>
</ContentWrapper>
