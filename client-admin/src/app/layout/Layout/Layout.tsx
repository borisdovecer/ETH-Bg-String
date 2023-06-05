import { Header, Sidebar } from "@app/layout";
import AppRoutes from "@app/layout/Routes/AppRoutes.tsx";

const Layout = () => {
    return (
        <div className='flex'>
            <div className='w-1/6'>
                <Sidebar />
            </div>
            <div className='w-5/6'>
                <Header />
                <div className='custom-scrollbar overflow-y-scroll h-screen px-4 pt-12'>
                    <AppRoutes />
                </div>
            </div>
        </div>
    )
}

export default Layout;