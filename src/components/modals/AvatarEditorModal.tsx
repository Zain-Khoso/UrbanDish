// Lib Imports.
import { Dispatch, MutableRefObject, SetStateAction, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';

// Icons.
import { FaSave } from 'react-icons/fa';
import { FaMinus, FaPlus } from 'react-icons/fa6';

// Components.
import Base from './Base';
import { Button } from '../ui/button';

// Types.
type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  editorRef: MutableRefObject<any>;
  image: null | File;
  setCroppedImage: Dispatch<SetStateAction<null | File>>;
};

// Avatar Editor for the entire app.
export default function AvatarEditorModal({
  isOpen,
  setIsOpen,
  editorRef,
  image,
  setCroppedImage,
}: Props) {
  const [scale, setScale] = useState(1);

  const zoomIn = () => setScale((val) => (val < 5 ? val + 0.5 : 5));
  const zoomOut = () => setScale((val) => (val > 1 ? val - 0.5 : 1));

  const handleFileCrop = function () {
    if (!editorRef.current) return;

    const resultingCanvas = editorRef.current.getImageScaledToCanvas();

    resultingCanvas.toBlob(
      (blob: Blob) => setCroppedImage(new File([blob], `${image?.name}`, { type: image?.type })),
      image?.type
    );

    setIsOpen(false);
  };

  return (
    <Base
      hideClose
      fitContent
      title={'Crop Your Avatar'}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      actionLabel="Save"
      actionFunc={handleFileCrop}
      actionIcon={FaSave}
    >
      {image && (
        <div className="relative flex h-full w-full flex-col items-center justify-center">
          <div className="absolute right-2 top-2 flex items-center justify-end gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={zoomIn}
              className="bg-neutral-800/40 hover:bg-neutral-800"
            >
              <FaPlus className="fill-neutral-200" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={zoomOut}
              className="bg-neutral-800/40 hover:bg-neutral-800"
            >
              <FaMinus className="fill-neutral-200" />
            </Button>
          </div>

          <AvatarEditor
            ref={editorRef}
            image={image}
            width={300}
            height={300}
            border={20}
            borderRadius={150}
            scale={scale}
          />
        </div>
      )}
    </Base>
  );
}
