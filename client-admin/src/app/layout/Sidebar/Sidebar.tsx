import {
    faHome,
    faTachometerAlt,
    faBoxOpen,
    faCog,
    faArrowAltCircleRight,
    faBars,
    faUsers
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import _ from "lodash";
import {useSelector} from "react-redux";
import {useState} from "react";

interface IItem {
    text: string,
    link: string,
    icon: any
};

const items: IItem[] = [
    { text: "Home", link: "/", icon: faHome },
    { text: "Accounts", link: "/accounts", icon: faUsers },
    { text: "Dashboard", link: "/dashboard", icon: faTachometerAlt },
    { text: "Products", link: "/products", icon: faBoxOpen },
    { text: "Transfer", link: "/transfer", icon: faArrowAltCircleRight },
    { text: "Settings", link: "/settings", icon: faCog },
];

const Sidebar = ({openSidebar, setOpenSidebar}:any) => {
    const theme = useSelector((state:any) => state.config.theme);

    return (
        <div className={`${!theme ? 'border-dark-primary text-light-primary' : 'bg-dark-secondary'} w-full z-10 h-screen pt-4 px-4 border-r`}>
            <div className='flex justify-left text-light-primary mt-12 ml-1 text-xl'>
                <FontAwesomeIcon icon={faBars} onClick={() => setOpenSidebar(!openSidebar)} />
            </div>
            <ul className='space-y-6 pt-6 text-left'>
                {_.map(items, (item: IItem, index: number) => (
                    <li key={index}>
                        <Link to={item.link} className='text-xl text-light-primary hover:text-blue-500'>
                            <FontAwesomeIcon icon={item.icon} className="mr-4" />
                            {openSidebar && <span>{item.text}</span>}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;