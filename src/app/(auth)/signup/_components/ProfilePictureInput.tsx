'use client';

// Lib Imports.
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';

// Utils.
import { cn } from '@/utils/helper_tailwind';

// Icons.
import { FaUpload } from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';

// Components.
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import ButtonWithSideIcon from '../../../../components/ButtonWithSideIcon';

// Types.
import { FieldErrors, UseFormClearErrors, UseFormSetError } from 'react-hook-form';
import { Step3T } from '@/schemas/AuthForm.schema';
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
  };

  const handleFileCrop = function () {
    if (!editorRef.current) return;

    const resultingCanvas = editorRef.current.getImageScaledToCanvas();

    resultingCanvas.toBlob(
      (blob: Blob) => setCroppedImage(new File([blob], `${file?.name}`, { type: file?.type })),
      file?.type
    );

    setIsDialogOpen(false);
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
        label="Upload File"
        onClick={() => fileInput.current?.click()}
      />

      <Dialog open={isDialogOpen} onOpenChange={(state) => setIsDialogOpen(state)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Crop Your Image</DialogTitle>
          </DialogHeader>

          <div className="grid place-items-center">
            {file && (
              <AvatarEditor
                ref={editorRef}
                image={file}
                width={250}
                height={250}
                border={50}
                borderRadius={100}
                scale={1}
              />
            )}
          </div>

          <DialogFooter>
            <ButtonWithSideIcon icon={FaCheckCircle} label="Crop" onClick={handleFileCrop} />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
