import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "FormFlow - The simplest way to create beautiful forms",
  description: "Create beautiful, powerful forms in minutes with FormFlow.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>{children}</body>
    </html>
  )
}



import './globals.css'