import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import OnekoCat from "./_components/OnekoCat";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "TransferTrek - Share files without losing quality",
  description: "Share files without losing quality. TransferTrek allows you to seamlessly share files from any device. It's a super convenient way to transfer files between devices with zero signups and zero compromise on the quality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable}`}>
        <Toaster
          position="bottom-left"
          reverseOrder={true}
          toastOptions={{
            style: {
              border: "1px solid #007bff",
              padding: "16px",
              color: "#007bff",
              fontWeight: "500",
            },
            iconTheme: {
              primary: "#007bff",
              secondary: "#FFFAEE",
            },
          }}
        />
        {children}
        <OnekoCat />
      </body>
    </html>
  );
}
