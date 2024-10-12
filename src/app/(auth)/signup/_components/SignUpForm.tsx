'use client';

// Lib Imports.
import { useState } from 'react';

// Components.
import Step_1 from './Step_1';

// Types.
import { SignUpT } from '@/schemas/AuthForm.schema';
enum Steps {
  EMAIL_PHONE = 0,
  NAME_ADDRESS = 1,
  IMAGE = 2,
}

// Component.
export default function SignUpForm() {
  const [step, setStep] = useState<Steps>(Steps.EMAIL_PHONE);
  const [formData, setFormData] = useState<SignUpT>({
    email: '',
    address: '',
    image: '',
    name: '',
    phone: '',
  });

  const onNext = () => setStep((value) => ++value);
  const onPrev = () => setStep((value) => --value);

  if (step === Steps.EMAIL_PHONE)
    return <Step_1 onNext={onNext} defaultValues={formData} setFormData={setFormData} />;
}
