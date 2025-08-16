import { clsx, type ClassValue } from "clsx"
import { Pinyon_Script } from "next/font/google"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const pinyon=Pinyon_Script({
    subsets: ["latin"],
  weight: ["400"],
  variable: "--font-Pinyon_Script",
  display: "swap",
})