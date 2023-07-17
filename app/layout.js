import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextGen Netlify",
  description:
    "The future of the web is here with Next.js and Netlify. Leverage the powerful server-side rendering capabilities and scalability of serverless hosting to deliver an exceptional user experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
