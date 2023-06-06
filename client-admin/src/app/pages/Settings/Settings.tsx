import {ComponentWrapper} from "@app/components";
import {faUsers} from "@fortawesome/free-solid-svg-icons";

const Settings = () => {
    return (
        <div className='my-8 w-full'>
            <ComponentWrapper title='Settings' icon={faUsers}>
                Settings
            </ComponentWrapper>
        </div>
    )
}

export default Settings;