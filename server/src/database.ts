import pga from 'pg';

//const { Pool } = require('pg');
import keys from './keys';

const pool = new pga.Pool(keys.database);
export default pool;


