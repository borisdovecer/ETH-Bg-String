import { ComponentWrapper, Table } from "@app/components";
import { faUsers, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContractFunction, useEthers } from "@usedapp/core";
import { useEffect, useState } from "react";
import { Contract } from "ethers";
import { contract } from "@app/config/chainConfig.ts";
import StringNFT from "@app/abi/StringNFT.json";
import { useSelector } from "react-redux";

const users = [
    { id: 1, wallet: 'asdaskjdhjdhkasjdhaskjdhaksj', roles: 'sdf' },
    { id: 1, wallet: 'lksajflkasjflskajflskajdlask', roles: 'sdf' },
    { id: 1, wallet: 'daskjdlaskdjlaskdjasdasd', roles: 'sdf' },
    { id: 1, wallet: 'xcvxcvxcvxcvcxvcxvxcvxcvcx', roles: 'sdf' },
    { id: 1, wallet: 'xcvxcvxcvsflisjfkldsjffsdflksj', roles: 'sdf' },
    { id: 1, wallet: 'sdfsdlkjflsdkfjsldkfjlsdkfj', roles: 'sdf' },
    { id: 1, wallet: 'lskdjflsdkjflsdkfjsdlkfjsdlkfjsdl', roles: 'sdf' },
]

const cartItems = [
    { key: 'Item 1', value: 'Value 1' },
    { key: 'Item 2', value: 'Value 2' },
    { key: 'Item 3', value: 'Value 3' },
];

const Accounts = () => {
    const theme = useSelector((state:any) => state.config.theme);
    const [address, setAddress] = useState('');
    const { activateBrowserWallet, account, library }:any = useEthers();
    const [contractInstance, setContractInstance] = useState<Contract | null>(null);
    const addEmployee = useContractFunction(contractInstance, 'addEmployee', {});
    const removeEmployee = useContractFunction(contractInstance, 'removeEmployee', {});

    useEffect(() => {
        if(account && library){
            setContractInstance(new Contract(contract.address, StringNFT.abi, library.getSigner()));
        }
    }, [account, library]);

    useEffect(() => {
        contractInstance?.getAllEmployees(1).then((res:string) => console.log(res))
    }, [contractInstance]);

    const handleAddEmployee = async () => {
        const { send } = addEmployee;
        if (!account) {
            await activateBrowserWallet();
            return;
        }
        send(1, address,[true,true,true,true]).then((res) => console.log(res));
    };
    const handleRemoveEmployee = async () => {
        const { send } = removeEmployee
        if (!account) {
            await activateBrowserWallet();
            return;
        }
        send(0, address).then((res) => console.log(res));
    };

    const handleChange = (e:any) => {
        setAddress(e.target.value);
    }

    return (
        <div className='my-8 w-full'>
            <ComponentWrapper title='Acount Management' icon={faUsers}>
                <div className='flex flex-row space-x-4 text-black'>
                    <div className='w-3/4'>
                        <div className={`${theme ? 'bg-light-primary text-dark-primary' : 'bg-dark-primary text-light-primary' } text-black rounded-3xl`}>
                            <Table data={users} />
                        </div>
                    </div>
                    <div className={`${theme ? 'bg-light-primary text-dark-primary' : 'bg-dark-primary text-light-primary' } w-1/4  mt-6 rounded-3xl `}>
                        <div className="rounded-3xl">
                            <div className={`${theme ? 'bg-light-secondary' : 'bg-dark-secondary'} rounded-3xl px-2 py-2`}>
                                <h2 className="text-xl font-semibold"><FontAwesomeIcon icon={faBuilding} className="mx-2" />Company</h2>
                            </div>
                            <div className="mt-4">
                                {cartItems.map((item, index) => (
                                    <div className="flex justify-between px-4 py-1 font-bold text-lg" key={index}>
                                        <p className="">{item.key}</p>
                                        <p>{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${theme ? 'bg-light-primary text-dark-primary' : 'bg-dark-primary text-light-primary'} flex flex-row space-x-4 text-black py-8 text-lg font-bold justify-between rounded-3xl mt-4 h-8 items-center`}>
                    <div className='w-full'>
                        <input onChange={handleChange} className='text-black border-black border mx-8 pl-2 w-full rounded-xl' type='text' placeholder='Address' />
                    </div>
                    <div className='w-full text-right space-x-4 pr-8'>
                        <button onClick={handleAddEmployee} className={`${theme ? 'bg-dark-primary text-light-primary' : 'bg-light-primary text-dark-primary'} w-1/4 rounded-2xl`}>
                            add employee
                        </button>
                        <button onClick={handleRemoveEmployee} className={`${theme ? 'bg-dark-primary text-light-primary' : 'bg-light-primary text-dark-primary'} w-1/4 rounded-2xl`}>
                            remove employee
                        </button>
                    </div>
                </div>
            </ComponentWrapper>
        </div>
    )
}

export default Accounts;