import { Outlet } from "react-router-dom";
import SidebarNav from "../../components/SidebarNav";

export default function NavMain() {
    return (

        <div className="flex flex-col h-screen">
            <div className="flex">
                <SidebarNav />
                <div className="bg-slate-50 w-full h-screen overflow-auto p-8">
                    <Outlet />
                </div>
            </div>
        </div>


    )
}