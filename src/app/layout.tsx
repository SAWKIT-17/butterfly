import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Font Luciole | https://www.luciole-vision.com/
const luciole = localFont({
  src: "./fonts/Luciole-Regular.ttf",
  variable: "--font-luciole",
  weight: "100 900",
});
const lucioleItalic = localFont({
  src: "./fonts/Luciole-Regular-Italic.ttf",
  variable: "--font-luciole-italic",
  weight: "100 900",
});
const lucioleBold = localFont({
  src: "./fonts/Luciole-Bold.ttf",
  variable: "--font-luciole-bold",
  weight: "100 900",
})
const lucioleBoldItalic = localFont({
  src: "./fonts/Luciole-Bold-Italic.ttf",
  variable: "--font-luciole-bold-italic",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "L'effet Papillon",
  description: "Parce qu'il est introuvable !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${luciole.variable} ${lucioleBold.variable} ${lucioleBoldItalic.variable} ${lucioleItalic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
