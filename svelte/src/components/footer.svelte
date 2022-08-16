<script lang="ts">
   import Icon from '@/components/icon.svelte';

   const socials = [
      {
         icon: 'mdi:twitter',
         href: 'https://twitter.com/starbunn_'
      },
      {
         icon: 'mdi:github',
         href: 'https://github.com/starbunn'
      },
      {
         icon: 'akar-icons:discord-fill',
         href: 'https://discord.com'
      }
   ];
</script>

<footer class="absolute bottom-12 left-10">
   <ul class="flex items-center justify-between">
      {#each socials as social}
         <li class="mx-4">
            <Icon icon={social.icon} href={social.href} />
         </li>
      {/each}
   </ul>
</footer>
