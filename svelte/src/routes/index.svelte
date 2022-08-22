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
   {#each posts as post}
      <a class="text-lg" href={post.path.replace('.md', '')}>
         <h2>{post.metadata.title}</h2>
         <p>{post.metadata.description}</p>
      </a>
   {/each}
</ContentWrapper>
