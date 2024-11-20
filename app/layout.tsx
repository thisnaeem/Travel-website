import { productSans } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Indotravi - Indonesian Tourism",
  description: "Explore the beauty of Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${productSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
