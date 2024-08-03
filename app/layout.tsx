import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../lib/navigation';

export const metadata: Metadata = {
  title: "Dimz Project",
  description: "just a small website:3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navigation />
      <body><main>{children}</main></body>
    </html>
  );
}
