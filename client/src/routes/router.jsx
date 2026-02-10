import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import AdminLayout from "../layouts/AdminLayout";

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Plans from "../pages/public/Plans";
import Contact from "../pages/public/Contact";
import Advisor from "../pages/public/Advisor";

import Dashboard from "../pages/admin/Dashboard";
import Leads from "../pages/admin/Leads";

import NotFound from "../pages/NotFound";
import Documents from "../pages/public/Documents";

const router = createBrowserRouter([
    {
        element: <PublicLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/plans", element: <Plans /> },
            { path: "/advisor", element: <Advisor /> },
            { path: "/contact", element: <Contact /> },
            { path: "/documents", element: <Documents/>}
        ],
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            { path: "dashboard", element: <Dashboard /> },
            { path: "leads", element: <Leads /> },
        ],
    },
    { path: "*", element: <NotFound /> },
]);

export default router;
