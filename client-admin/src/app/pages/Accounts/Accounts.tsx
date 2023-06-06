import {ComponentWrapper, Table} from "@app/components";
import {faTag, faUsers} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import _ from "lodash";

const users = [
    { id: 1, wallet: 'asdaskjdhjdhkasjdhaskjdhaksj', roles: 'sdf' },
    { id: 1, wallet: 'lksajflkasjflskajflskajdlask', roles: 'sdf' },
    { id: 1, wallet: 'daskjdlaskdjlaskdjasdasd', roles: 'sdf' },
    { id: 1, wallet: 'xcvxcvxcvxcvcxvcxvxcvxcvcx', roles: 'sdf' },
    { id: 1, wallet: 'xcvxcvxcvsflisjfkldsjffsdflksj', roles: 'sdf' },
    { id: 1, wallet: 'sdfsdlkjflsdkfjsldkfjlsdkfj', roles: 'sdf' },
    { id: 1, wallet: 'lskdjflsdkjflsdkfjsdlkfjsdlkfjsdl', roles: 'sdf' },
]

const Accounts = () => {
    return (
        <div className='my-8 w-full'>
            <ComponentWrapper title='Acount Management' icon={faUsers}>
                <div className='flex flex-row space-x-4 text-black'>
                    <div className='w-8/12'>
                        <Table data={users} />
                    </div>
                    <div className='bg-light-primary w-4/12 text-black mt-6 rounded-2xl'>
                        <span><FontAwesomeIcon icon={faTag} className="mx-2" />new_product_schema_</span>
                    </div>
                </div>
            </ComponentWrapper>
        </div>
    )
}

export default Accounts;