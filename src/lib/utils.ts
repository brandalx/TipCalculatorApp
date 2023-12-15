import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

//helper function for shadcn

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
