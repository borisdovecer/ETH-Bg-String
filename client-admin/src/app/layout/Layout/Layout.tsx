import { Header, Sidebar } from "@app/layout";
import AppRoutes from "@app/layout/Routes/AppRoutes.tsx";
import {useEthers} from "@usedapp/core";

const Layout = () => {
    const { account }:any = useEthers();

    return (
        <div className='flex'>
            <Header />
            {account &&
                <div className='w-1/6'>
                    <Sidebar />
                </div>
            }
            <div className={`${account ? 'w-5/6' : 'w-full'}`}>
                <div className='custom-scrollbar overflow-y-scroll bg-light-secondary h-screen px-4 pt-12'>
                    <AppRoutes />
                </div>
            </div>
        </div>
    )
}

export default Layout;