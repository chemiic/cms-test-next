import './globals.css'
import type { Metadata } from 'next'
import ModalProvider from "../providers/modal-provider";
import ErrorProvider from "../providers/error-provider";
import {ToastContainer} from "react-toastify";


export const metadata: Metadata = {
  title: 'cms-next',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`max-w-screen-xl mx-auto`}>
      <ErrorProvider/>
      <ModalProvider/>
      {children}
      </body>
    </html>
  )
}
