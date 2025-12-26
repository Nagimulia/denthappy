
import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import UserSync from "../components/UserSync";
import TanStackProvider from "../components/providers/TanStackProvider";
import { Toaster } from "sonner";



export const metadata: Metadata = {
  title: "DentHappy-Dental Assistant",
  description:
    "Get instant dental advice throgh voice calls with our AI Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TanStackProvider>

      <ClerkProvider appearance={{
        variables: {
          colorPrimary: "#e78a53",
          colorBackground: "#f3f4f6",
          colorText: "#111827",
          colorTextSecondary: "#6b7280",
          colorInputBackground: "#f3f4f6",
        }
      }}>
        <html lang="en">
          <body
            className='antialiased dark'
          >
            <UserSync />
            <Toaster/>
            {children}
          </body>
        </html>
      </ClerkProvider>
    </TanStackProvider>
  );
}
