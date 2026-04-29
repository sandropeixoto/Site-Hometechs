import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const cleanBasePath = basePath ? (basePath.startsWith('/') ? basePath : `/${basePath}`) : '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // No final do dia, o Next.js lida com caminhos absolutos / publicos
  // Mas para Static HTML Export com basePath, as imagens no public/ precisam do prefixo.
  return `${cleanBasePath}${cleanPath}`;
}
