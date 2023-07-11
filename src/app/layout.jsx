import Sidebar from "@/Components/Sidebar";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ components, children }) {
  return (
    <html lang="en">
      <body className="bg-gray-200">
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}