import {faBoxOpen, faTag} from "@fortawesome/free-solid-svg-icons";
import { ComponentWrapper } from "@app/components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import _ from "lodash";
import {useEffect, useState} from "react";
import {useContractFunction, useEthers} from "@usedapp/core";
import {Contract} from "ethers";
import {contract} from "@app/config/chainConfig.ts";
import StringNFT from "@app/abi/StringNFT.json";

const fields = [
    { label: 'name_', name: 'name', type: 'text' },
    { label: 'description_', name: 'description', type: 'text' },
    { label: 'manufacturer_', name: 'manufacturer', type: 'text' },
    { label: 'category', name: 'category', type: 'text' },
    { label: 'productTokens', name: 'productTokens', type: 'text' },
    { label: 'expireDate', name: 'expireDate', type: 'text' },
    { label: 'exists', name: 'exists', type: 'text' },
]

const ProductList = () => {
    const [formData, setFormData] = useState<any>({});
    const { activateBrowserWallet, account, library }:any = useEthers();
    const [contractInstance, setContractInstance] = useState<Contract | null>(null);
    const { send, state } = useContractFunction(contractInstance, 'addProduct', {});


    useEffect(() => {
        if(account && library){
            setContractInstance(new Contract(contract.address, StringNFT.abi, library.getSigner()));
        }
    }, [account, library]);

    const handleChange = (e:any) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value })
    }

    const handleSubmit = () => {
        const { name, description, manufacturer, category, productTokens, expireDate, exists } = formData;
        send(0,name, description, manufacturer, category, 234).then((res) => console.log(res))
        console.log(state)
    }

    return (
        <div className='my-8 w-full'>
            <ComponentWrapper title='Products' icon={faBoxOpen}>
                <div className='flex flex-row space-x-4'>
                    <div className='border-2 w-full border-light-primary'>

                    </div>
                    <div className='bg-light-primary w-full text-black rounded-2xl p-4'>
                        <span><FontAwesomeIcon icon={faTag} className="mx-2" />new_product_schema_</span>
                        <div className='mt-8'>
                            {_.map(fields, (item) => (
                                <div className='flex flex-col'>
                                    <label>{item.label}</label>
                                    <input className='rounded-xl pl-2 bg-light-secondary' type={item.type} name={item.name} onChange={handleChange} />
                                </div>
                            ))}
                        </div>
                        <div className='text-center mt-12 mb-4'>
                            <button onClick={handleSubmit} className='bg-dark-primary text-light-primary text-lg p-3 rounded-2xl px-6'>create_schema_</button>
                        </div>
                    </div>
                </div>
            </ComponentWrapper>
        </div>
    )
}

export default ProductList;