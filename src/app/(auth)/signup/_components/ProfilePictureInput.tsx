'use client';

// Lib Imports.
import { Dispatch, SetStateAction, useRef, useState } from 'react';

// Utils.
import { cn } from '@/utils/helper_tailwind';

// Icons.
import { FaUpload } from 'react-icons/fa6';

// Components.
import { Step3T } from '@/schemas/AuthForm.schema';
import { AvatarEditorModal } from '@/components/modals';
import ButtonWithSideIcon from '@/components/ButtonWithSideIcon';

// Types.
import { FieldErrors, UseFormClearErrors, UseFormSetError } from 'react-hook-form';
type Props = {
  id: string;
  disabled?: boolean;
  setCroppedImage: Dispatch<SetStateAction<null | File>>;
  setError: UseFormSetError<Step3T>;
  errors: FieldErrors;
  clearErrors: UseFormClearErrors<Step3T>;
};

// Component.
export default function ProfilePictureInput({
  id,
  disabled,
  setCroppedImage,
  setError,
  errors,
  clearErrors,
}: Props) {
  const fileInput = useRef<null | HTMLInputElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const editorRef = useRef<any>(null);

  const [buttonLabel, setButtonLabel] = useState('Upload File');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [file, setFile] = useState<null | File>(null);
  const allowedImageTypes = ['image/jpeg', 'image/jpg', 'image/pjpeg', 'image/png', 'image/webp'];

  const handleFileChange = function (event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return;

    if (!allowedImageTypes.includes(selectedFile.type))
      return setError('image', { message: 'Only images are allowed.' });

    clearErrors('image');

    setFile(selectedFile);
    setCroppedImage(selectedFile);
    setIsDialogOpen(true);
    setButtonLabel('File Uploaded');
  };

  return (
    <>
      <input
        ref={fileInput}
        type="file"
        disabled={disabled}
        accept="image/jpeg, image/jpg, image/pjpeg, image/png, image/webp"
        onChange={handleFileChange}
        className="fixed left-[-999999px]"
      />

      <ButtonWithSideIcon
        variant="outline"
        disabled={disabled}
        icon={FaUpload}
        className={cn(errors[id] && 'border-red-500')}
        classNameIcon="opacity-60"
        label={buttonLabel}
        onClick={() => fileInput.current?.click()}
      />

      <AvatarEditorModal
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        editorRef={editorRef}
        image={file}
        setCroppedImage={setCroppedImage}
      />
    </>
  );
}
