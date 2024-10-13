// Lib Imports.
import { z } from 'zod';
import { isMobilePhone, isStrongPassword } from 'validator';

// Fields.
const email = z.string().min(1, 'Email is required').email({ message: 'Invalid email.' });

const phone = z
  .string()
  .min(1, 'Phone is required')
  .refine((phone) => isMobilePhone(phone, 'en-PK'), 'Invalid phone.');

const name = z.string().min(1, 'Name is required').max(20, 'Name is too long.');

const password = z
  .string()
  .min(1, 'Password is required')
  .max(40, 'Password is too long.')
  .refine((password) => isStrongPassword(password), 'Password is too weak.');

const signInPassword = z.string().min(1, 'Password is required.');

const address = z.string().min(1, 'Address is required').max(120, 'Address is too long.');

const image = z.string().optional();

// Schemas.
const SignUpStep1 = z.object({ email, phone });
const SignUpStep2 = z.object({ name, password });
const SignUpStep3 = z.object({ address, image });

const signUpSchema = z.object({ email, phone, name, password, address, image });
const signInSchema = z.object({ email, password: signInPassword });

// Types.
type Step1T = z.infer<typeof SignUpStep1>;
type Step2T = z.infer<typeof SignUpStep2>;
type Step3T = z.infer<typeof SignUpStep3>;
type SignUpT = z.infer<typeof signUpSchema>;
type SignInT = z.infer<typeof signInSchema>;

export {
  signUpSchema,
  signInSchema,
  SignUpStep1,
  SignUpStep2,
  SignUpStep3,
  type SignUpT,
  type SignInT,
  type Step1T,
  type Step2T,
  type Step3T,
};
