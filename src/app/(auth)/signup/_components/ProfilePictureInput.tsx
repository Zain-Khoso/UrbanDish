'use client';

// Lib Imports.
import { CldUploadWidget } from 'next-cloudinary';

// Utils.
import { cn } from '@/utils/helper_tailwind';

// Components.
import { Button } from '@/components/ui/button';

// Types.
import { FieldErrors, UseFormClearErrors, UseFormSetValue } from 'react-hook-form';
import { Step3T } from '@/schemas/AuthForm.schema';
type Props = {
  id: string;
  value?: string;
  disabled?: boolean;
  onChange: UseFormSetValue<Step3T>;
  errors: FieldErrors;
  clearErrors: UseFormClearErrors<Step3T>;
};

// Component.
export default function ProfilePictureInput({
  id,
  value,
  disabled,
  onChange,
  errors,
  clearErrors,
}: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleUpload = async function (result: any) {
    onChange('image', result.info.secure_url as string);

    clearErrors('image');
  };

  return (
    <CldUploadWidget
      uploadPreset="urban_dish_squares"
      onSuccess={handleUpload}
      options={{ maxFiles: 1 }}
    >
      {({ open }) => (
        <Button
          type="button"
          variant="outline"
          disabled={value !== '' || disabled}
          className={cn('w-full', errors[id] ? 'border-destructive' : '')}
          onClick={() => open?.()}
        >
          {value !== '' ? 'Image Uploaded' : 'Choose Image'}
        </Button>
      )}
    </CldUploadWidget>
  );
}
