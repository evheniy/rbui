import { Mapper } from './types';

const json: Mapper = error => JSON.stringify({ error });

export default json;
