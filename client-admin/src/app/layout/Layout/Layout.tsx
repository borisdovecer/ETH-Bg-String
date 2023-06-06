import { Header, Sidebar } from "@app/layout";
import AppRoutes from "@app/layout/Routes/AppRoutes.tsx";
import {useEthers} from "@usedapp/core";
import {useState} from "react";

const Layout = () => {
    const { account }:any = useEthers();
    const [openSidebar, setOpenSidebar] = useState(true);

    return (
        <div className='flex'>
            <Header />
            {account &&
                <div className={`${openSidebar ? 'w-1/6' : 'w-16'}`}>
                    <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
                </div>
            }
            <div className='w-full'>
                <div className='custom-scrollbar overflow-y-scroll bg-light-secondary h-screen px-4 pt-12'>
                    <AppRoutes />
                </div>
            </div>
        </div>
    )
}

export default Layout;