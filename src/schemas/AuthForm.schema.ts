// Lib Imports.
import { z } from 'zod';
import { isMobilePhone } from 'validator';

// Schema.
const schema = z.object({
  email: z.string({ required_error: 'Email is required.' }).email({ message: 'Invalid email.' }),
  image: z.string().min(1, 'Image is required'),
  phone: z
    .string()
    .refine((phone) => isMobilePhone(phone, ['en-PK', 'en-US']), { message: 'Invalid phone.' }),
  address: z.string().min(1, 'Address is required'),
  name: z.string().min(1, 'Name is required').max(20, 'Name is too long.'),
});

// Types.
type AuthFormT = z.infer<typeof schema>;

export { schema, type AuthFormT };
