import type { Metadata, Viewport } from "next";
import "./globals.css";
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export const metadata: Metadata = {
  title:"Ahmad Dzaki | Electronics & Telecommunication Engineer",
  description:"Professional portfolio of Ahmad Dzaki — Electronics Engineering graduate focused on telecommunications, IoT, networking, embedded systems, and ICT.",
  keywords:["Ahmad Dzaki","Telecommunication Engineer","Electronics Engineering","IoT","Networking","Embedded Systems","ICT"]
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}