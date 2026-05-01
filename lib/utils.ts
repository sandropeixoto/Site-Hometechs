import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string) {
  // Always return the absolute path since a custom domain is being used.
  return path.startsWith('/') ? path : `/${path}`;
}
