//@ts-ignore
import type * as RaylibTypes from '../src/generated/node-raylib'; // Import only the types

//@ts-ignore
const raylib = require('../index') as typeof RaylibTypes;

export default raylib;