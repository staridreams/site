import Footer from '@/components/footer.svelte';
import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('components | nav', () => {
   it('should render', () => {
      const { container } = render(Footer);
      expect(container).toBeTruthy();
   });
});
