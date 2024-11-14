// Lib Imports.
import { z } from 'zod';

// Fields.
const email = z.string().min(1, 'Email is required').email({ message: 'Invalid email.' });

// Schemas.
const schema = z.object({ email });

// Types.
type SchemaT = z.infer<typeof schema>;

export { schema, type SchemaT };
