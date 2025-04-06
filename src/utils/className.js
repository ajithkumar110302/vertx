import clsx from 'clsx';
import { twMerge } from 'tailwind-merge'; // optional, only if you're using Tailwind

export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
