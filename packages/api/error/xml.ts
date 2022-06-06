import { Mapper } from './types';

const xml: Mapper = error => `<?xml version="1.0" encoding="UTF-8"?><root><error>${error}</error></root>`;

export default xml;
