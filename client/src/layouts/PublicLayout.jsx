import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import WhatsAppFloating from "../components/common/WhatsAppFloating";
import { LanguageProvider } from "../context/LanguageContext";

const PublicLayout = () => {
    return (
        <>
            <LanguageProvider>
                <Header />
                <WhatsAppFloating />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </LanguageProvider>
        </>
    );
};

export default PublicLayout;
