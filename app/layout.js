import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import SessionWrapper from "./login/SessionWrapper";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="font-[poppins] overflow-x-hidden">
                <SessionWrapper>
                    <div className="min-h-screen w-[100vw] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),#0012194D)]">
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
                </SessionWrapper>
            </body>
        </html>
    );
}
