import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { IRoutes, routeConfig } from './config.tsx';

const AppRoutes: FC = () => {
    const routes:IRoutes[] = routeConfig;

    const router: JSX.Element[] = routes.map((route: IRoutes) =>
        <Route key={route.id} path={route.path} element={route.element} />
    );

    return <Routes>{router}</Routes>;
};

export default AppRoutes;
