import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Nav from '../src/components/nav.svelte';

describe('components | nav', () => {
   it('should render', () => {
      const { container } = render(Nav);
      expect(container).toMatchSnapshot();
   });
});
