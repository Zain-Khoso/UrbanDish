// Lib Imports.
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper function to compile classNames.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
