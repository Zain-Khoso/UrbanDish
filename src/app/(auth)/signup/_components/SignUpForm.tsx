'use client';

// Lib Imports.
import { useState } from 'react';

// Components.
import Step_1 from './Step_1';

// Types.
import { SignUpT } from '@/schemas/AuthForm.schema';
import Step_2 from './Step_2';
enum Steps {
  EMAIL_PHONE = 0,
  NAME_PASSWORD = 1,
  ADDRESS_IMAGE = 2,
}

// Component.
export default function SignUpForm() {
  const [step, setStep] = useState<Steps>(Steps.EMAIL_PHONE);
  const [formData, setFormData] = useState<SignUpT>({
    email: 'z@z.com',
    phone: '923123456789',
    name: '',
    password: '',
    address: '',
    image: '',
  });

  const onNext = () => setStep((value) => ++value);
  const onPrev = () => setStep((value) => --value);

  if (step === Steps.EMAIL_PHONE)
    return <Step_1 onNext={onNext} defaultValues={formData} setFormData={setFormData} />;

  if (step === Steps.NAME_PASSWORD)
    return (
      <Step_2 onNext={onNext} onPrev={onPrev} defaultValues={formData} setFormData={setFormData} />
    );
}
