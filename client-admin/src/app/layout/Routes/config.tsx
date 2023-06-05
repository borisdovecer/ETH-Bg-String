import {
    Dashboard,
    ErrorPage,
    Home,
    Support,
} from "@app/pages";

export interface IRoutes {
    id: string,
    path: string,
    element: JSX.Element
}

export const routeConfig: IRoutes[] = [
    { id: 'home', path:'/', element: <Home /> },
    { id: 'dashboard', path:'/dashboard', element: <Dashboard /> },
    { id: 'error', path:'*', element: <ErrorPage /> }

];

export const routeBasic: IRoutes[] = [
    { id: 'home', path:'/', element: <Home /> },
    { id: 'support', path:'/support', element: <Support /> },
    { id: 'error', path:'*', element: <ErrorPage /> }
];