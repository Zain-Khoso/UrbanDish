// Lib Imports.
import { uploadImage } from './axios.instances';

// Converts the given file to base64 string.
const convertToBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result?.toString() as string);
    reader.onerror = reject;
  });

// Accepts a file and folder path,
// sends a request to backend to upload the file to the provided folder path in cloudinary,
// returns the resource returned by the server
export async function uploadFile(file: File, folder: string): Promise<string | null> {
  try {
    const type = file.type;
    const formData = new FormData();

    formData.append('file', await convertToBase64(file));
    formData.append('folder', folder);

    if (type.startsWith('image/')) {
      const response = await uploadImage({ data: formData });
      const imageUrl = response.data.url;

      return imageUrl as string;
    }

    return null;
  } catch {
    return null;
  }
}
