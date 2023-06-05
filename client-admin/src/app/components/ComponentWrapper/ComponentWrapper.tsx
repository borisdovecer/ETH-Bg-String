import {useSelector} from "react-redux";

const ComponentWrapper = ({children, title}: any) => {
    const theme = useSelector((state:any) => state.config.theme);

    return (
        <div className={`${theme ? 'bg-dark-primary text-light-primary' : 'bg-light-primary text-dark-primary'} border-black border-2 rounded-3xl`}>
            <p className={`pl-4 my-2 `}>{title}</p>
            <div className={`p-4`}>
                {children}
            </div>
        </div>
    )
}

export default ComponentWrapper