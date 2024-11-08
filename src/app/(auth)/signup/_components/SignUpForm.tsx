'use client';

// Lib Imports.
import { useRouter } from 'next/navigation';
import { useState, useCallback } from 'react';
import toast from 'react-hot-toast';

// Utils.
import { userReq } from '@/utils/axios.instances';
import { uploadFile } from '@/utils/files.utils';

// Components.
import Step_1 from './Step_1';
import Step_2 from './Step_2';
import Step_3 from './Step_3';

// Types.
import { SignUpT, Step3T } from '@/schemas/AuthForm.schema';
enum Steps {
  EMAIL_PHONE = 0,
  NAME_PASSWORD = 1,
  ADDRESS_IMAGE = 2,
}

// Component.
export default function SignUpForm() {
  const router = useRouter();

  const [step, setStep] = useState<Steps>(Steps.EMAIL_PHONE);
  const [formData, setFormData] = useState<SignUpT>({
    email: '',
    phone: '',
    name: '',
    password: '',
    address: '',
    image: '',
  });
  const [picture, setPicture] = useState<null | File>(null);

  const onNext = () => setStep((value) => ++value);
  const onPrev = () => setStep((value) => --value);

  const handleUserCreation = useCallback(
    async function (data: Step3T) {
      // return console.log(picture);
      let imageUrl = '';

      if (typeof data.image === 'string' && data.image.startsWith('https://'))
        imageUrl = data.image;
      else if (picture) {
        const result = await toast.promise(uploadFile(picture, 'UrbanDish/Pfps'), {
          loading: 'Uploading Picture.',
          error: 'Upload Error.',
          success: 'Uploaded Successfully.',
        });

        imageUrl = result || '';
      }

      const userData = { ...formData, ...data, image: imageUrl };

      const response = await toast.promise(userReq.post('create-new-user', userData), {
        loading: 'Creating your account.',
        error: 'Something went wrong.',
        success: 'Account Creation Successfull.',
      });

      if (!response.data.email) return;

      router.push('/signin');
    },
    [formData, router, picture]
  );

  if (step === Steps.EMAIL_PHONE)
    return <Step_1 onNext={onNext} defaultValues={formData} setFormData={setFormData} />;

  if (step === Steps.NAME_PASSWORD)
    return (
      <Step_2 onNext={onNext} onPrev={onPrev} defaultValues={formData} setFormData={setFormData} />
    );

  if (step === Steps.ADDRESS_IMAGE)
    return (
      <Step_3
        onNext={handleUserCreation}
        onPrev={onPrev}
        defaultValues={formData}
        setFormData={setFormData}
        setCroppedImage={setPicture}
      />
    );
}
