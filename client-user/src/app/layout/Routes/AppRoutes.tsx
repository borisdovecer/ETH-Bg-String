import { Routes, Route } from 'react-router-dom';
import { Home, ErrorPage } from "@app/pages";

const routeConfig = [
    { id: 'home', path:'/', element: <Home /> },
    { id: 'error', path:'*', element: <ErrorPage /> }
]

const AppRoutes = () => {
    const router = routeConfig.map((route) =>
        <Route key={route.id} path={route.path} element={route.element} />
    );

    return <Routes>{router}</Routes>;
};

export default AppRoutes;
