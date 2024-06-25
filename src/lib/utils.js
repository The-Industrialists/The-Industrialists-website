import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"


export function cn(...inputs) {
  return twMerge(clsx(inputs))
}



