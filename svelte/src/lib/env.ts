export const MODE = import.meta.env.MODE;
export const API_URL =
   MODE === 'production' ? 'https://example.com' : 'http://localhost:3030';
