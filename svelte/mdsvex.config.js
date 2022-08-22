import katex from 'katex';
import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehype_katex from 'rehype-katex';
import gfm from 'remark-gfm';
import math from 'remark-math';
import { visit } from 'unist-util-visit';

const correct_hast_tree = () => (tree) => {
   visit(tree, 'text', (node) => {
      if (node.value.trim().startsWith('<')) {
         node.type = 'raw';
      }
   });
};

const katex_blocks = () => (tree) => {
   visit(tree, 'code', (node) => {
      if (node.lang === 'math') {
         const str = katex.renderToString(node.value, {
            displayMode: true,
            leqno: false,
            fleqn: false,
            throwOnError: true,
            errorColor: '#cc0000',
            strict: 'warn',
            output: 'htmlAndMathml',
            trust: false,
            macros: { '\\f': '#1f(#2)' }
         });

         node.type = 'raw';
         node.value = '{@html `' + str + '`}';
      }
   });
};

const config = defineConfig({
   extensions: ['.svelte.md', '.md', '.svx'],

   smartypants: {
      dashes: 'oldschool'
   },

   remarkPlugins: [gfm, math, katex_blocks],
   rehypePlugins: [correct_hast_tree, rehype_katex],

   layout: './src/components/post.svelte'
});

export default config;
