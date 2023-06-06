import { faHome, faTachometerAlt, faBoxOpen, faCog, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import _ from "lodash";
import {useSelector} from "react-redux";

interface IItem {
    text: string,
    link: string,
    icon: any
};

const items: IItem[] = [
    { text: "Home", link: "/", icon: faHome },
    { text: "Dashboard", link: "/dashboard", icon: faTachometerAlt },
    { text: "Products", link: "/products", icon: faBoxOpen },
    { text: "Transfer", link: "/transfer", icon: faArrowAltCircleRight },
    { text: "Settings", link: "/settings", icon: faCog },
];

const Sidebar = () => {
    const theme = useSelector((state:any) => state.config.theme);

    return (
        <div className={`${!theme ? 'border-dark-primary text-light-primary' : 'bg-dark-secondary'} w-full z-10 h-screen pt-4 border-r`}>
            <div className='flex justify-center'>
                <img src='#' alt='logo' className='w-24 rounded-full' />
            </div>
            <ul className='space-y-4 px-4 pt-8 text-left'>
                {_.map(items, (item: IItem, index: number) => (
                    <li key={index}>
                        <Link to={item.link} className='text-2xl text-light-primary hover:text-blue-500'>
                            <FontAwesomeIcon icon={item.icon} className="mr-2" />
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;