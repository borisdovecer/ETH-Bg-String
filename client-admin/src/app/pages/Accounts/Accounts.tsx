import { ComponentWrapper, Table } from "@app/components";
import { faSearch, faUsers } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useContractFunction, useEthers} from "@usedapp/core";
import {useEffect, useState} from "react";
import {Contract} from "ethers";
import {contract} from "@app/config/chainConfig.ts";
import StringNFT from "@app/abi/StringNFT.json";

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
    // add more items as needed
];


const Accounts = () => {
    const [address, setAddress] = useState('');
    const { activateBrowserWallet, account, library }:any = useEthers();
    const [contractInstance, setContractInstance] = useState<Contract | null>(null);
    const { send } = useContractFunction(contractInstance, 'addEmployee', {gasLimitBufferPercentage: 100});

    useEffect(() => {
        if(account && library){
            setContractInstance(new Contract(contract.address, StringNFT.abi, library.getSigner()));
        }
    }, [account, library]);

    useEffect(() => {
        contractInstance?.getAllEmployees(0, { gasLimit: 131200 }).then((res:string) => console.log(res))
    }, [contractInstance]);

    const handleAddEmpoloyee = async () => {
        if (!account) {
            await activateBrowserWallet();
            return;
        }
        send(1, address,[true,true,true,true]).then((res) => console.log(res));
    };

    const handleChange = (e:any) => {
        setAddress(e.target.value);
    }

    return (
        <div className='my-8 w-full'>
            <ComponentWrapper title='Acount Management' icon={faUsers}>
                <div className='flex flex-row space-x-4 text-black'>
                    <div className='w-3/4'>
                        <div className='bg-light-primary text-black rounded-3xl'>
                            <Table data={users} />
                        </div>
                    </div>
                    <div className='bg-light-primary w-1/4  mt-6 text-black rounded-3xl '>
                        <div className="bg-white rounded-3xl">
                            <div className="bg-light-secondary rounded-3xl px-2 py-2">
                                <h2 className="text-xl font-semibold"><FontAwesomeIcon icon={faSearch} className="mx-2" />Company</h2>
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
                <div className='flex flex-row space-x-4 bg-light-primary py-8 text-black text-lg font-bold justify-between rounded-3xl mt-4 h-8 items-center'>
                    <div className='w-full'>
                        <input onChange={handleChange} className='text-black border-black border mx-8 pl-2 w-full rounded-xl' type='text' placeholder='Address' />
                    </div>
                    <div className='w-full text-right space-x-4 pr-8'>
                        <button onClick={handleAddEmpoloyee} className='bg-dark-primary text-light-primary w-1/4 rounded-2xl'>
                            add employee
                        </button>
                        <button className='bg-dark-primary text-light-primary w-1/4 rounded-2xl'>
                            remove employee
                        </button>
                    </div>
                </div>
            </ComponentWrapper>
        </div>
    )
}

export default Accounts;