// Utils.
import { userReq } from './axios.instances';

// Types.
import { UseFormSetError } from 'react-hook-form';
import { Step1T } from '@/schemas/AuthForm.schema';

type CheckEmailUniquenessT = {
  email: string;
  setError: UseFormSetError<Step1T>;
};

type CheckPhoneUniquenessT = {
  phone: string;
  setError: UseFormSetError<Step1T>;
};

// Function to check if a provided user email is unique or not.
async function checkEmailUniqueness({ email, setError }: CheckEmailUniquenessT) {
  try {
    const response = await userReq.post('checks/unique-email', {
      email,
    });

    if (!response.data.isUnique)
      setError('email', { type: 'pattern', message: 'Email is already in use.' });
  } catch {
    setError('email', { type: 'required', message: 'Invalid email' });
    throw new Error();
  }
}

// Function to check if a provided user phone is unique or not.
async function checkPhoneUniqueness({ phone, setError }: CheckPhoneUniquenessT) {
  try {
    const response = await userReq.post('checks/unique-phone', {
      phone,
    });

    if (!response.data.isUnique)
      setError('phone', { type: 'pattern', message: 'Phone is already in use.' });
  } catch {
    setError('phone', { type: 'required', message: 'Invalid phone' });
    throw new Error();
  }
}

// File Exports.
export { checkEmailUniqueness, checkPhoneUniqueness };
