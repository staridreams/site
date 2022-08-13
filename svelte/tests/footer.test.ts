import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Footer from '../src/components/footer.svelte';

describe('components | nav', () => {
   it('should render', () => {
      const { container } = render(Footer);
      expect(container).toBeTruthy();
   });
});
