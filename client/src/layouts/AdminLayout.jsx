import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div className="admin-wrapper">
            {/* Sidebar later */}
            {/* Topbar later */}
            <Outlet />
        </div>
    );
};

export default AdminLayout;
