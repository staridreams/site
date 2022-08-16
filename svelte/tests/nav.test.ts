import Nav from '@/components/nav.svelte';
import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import '../src/shims-svelte';
describe('components | nav', () => {
   it('should render', () => {
      const { container } = render(Nav);
      expect(container).toBeTruthy();
   });
});
