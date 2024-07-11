import { faAdjust, faAnglesLeft, faChartLine, faListCheck, faPowerOff, faTruck } from "@fortawesome/free-solid-svg-icons";
import { faSackXmark } from "@fortawesome/free-solid-svg-icons/faSackXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function SidebarNav() {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Painel Principal", icon: faChartLine, gap: true },
        { title: "Ordens de Serviço", icon: faSackXmark },
        { title: "Planos", icon: faListCheck },
        { title: "Frotas", icon: faTruck },
        { title: "Ajustes", icon: faAdjust, gap: true },
    ]

    return (
        <div className="flex">
            <div className={` ${open ? "w-72" : "w-20"} h-screen bg-gray-800 relative p-5 pt-8`}>
                <div className=
                    {`text-green-500 absolute cursor-pointer rounded-full
                 -right-3 top-9 w-7 border-2 border-green-500 ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}>
                    <FontAwesomeIcon icon={faAnglesLeft} />
                </div>
                <div className="flex gap-x-4 items-center">
                    <div className={`text-slate-50 cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}><FontAwesomeIcon style={{ fontSize: '1.2rem' }} icon={faPowerOff} /></div>
                    <h1 className={`text-slate-50 origin-left font-medium text-xl ${!open && "scale-0"}`}>Mammut</h1>
                </div>
                <ul className="pt-6  ">
                    {Menus.map((menu, index) => (
                        <li key={index} className={`text-amber-50 text-base flex items-center
                         gap-x-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md ${menu.gap ? "mt-9" : "mt-2"}`}>
                            <FontAwesomeIcon icon={menu.icon} />
                            <span className={`${!open && "hidden"} origin-left duration-500`}>{menu.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        
        </div>
    )
}