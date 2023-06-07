import {faBoxOpen, faTag} from "@fortawesome/free-solid-svg-icons";
import { ComponentWrapper } from "@app/components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import _ from "lodash";
import {useEffect, useState} from "react";
import {useContractFunction, useEthers} from "@usedapp/core";
import {Contract} from "ethers";
import {contract} from "@app/config/chainConfig.ts";
import StringNFT from "@app/abi/StringNFT.json";
import {Link} from "react-router-dom";

const fields = [
    { label: 'name_', name: 'name', type: 'text' },
    { label: 'description_', name: 'description', type: 'text' },
    { label: 'manufacturer_', name: 'manufacturer', type: 'text' },
    { label: 'category', name: 'category', type: 'text' },
    { label: 'productTokens', name: 'productTokens', type: 'text' },
    { label: 'expireDate', name: 'expireDate', type: 'text' },
    { label: 'metadata', name: 'metadata', type: 'text' },
]

const ProductList = () => {
    const [formData, setFormData] = useState<any>({});
    const [products, setProducts] = useState(null);
    const {  account, library }:any = useEthers();
    const [contractInstance, setContractInstance] = useState<Contract | null>(null);
    const { send } = useContractFunction(contractInstance, 'addProductToCompany', {});

    useEffect(() => {
        if(account && library){
            setContractInstance(new Contract(contract.address, StringNFT.abi, library.getSigner()));
        }
    }, [account, library]);

    useEffect(() => {
        contractInstance?.getAllProducts(0).then((res:any) => {
            setProducts(res);
        })
    }, [contractInstance])

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value })
    }

    const handleSubmit = () => {
        const { name, metadata } = formData;
        send(0, name, metadata).then((res) => console.log(res))
    }

    console.log(products)
    return (
        <div className='my-8 w-full'>
            <ComponentWrapper title='Products' icon={faBoxOpen}>
                <div className='flex flex-row space-x-4'>
                    <div className='w-full max-h-[700px] custom-scrollbar overflow-y-scroll'>
                        <div className="grid grid-cols-3 gap-4 py-4">
                            {products && _.map(products, (item:any, index:number) => (
                                <Link to={`/products/${item[0]}`}>
                                    <div key={index} className="flex justify-center items-center relative">
                                        <span className='absolute top-1'>{item[0]}</span>
                                        <img className="w-48 h-48 object-cover rounded-3xl" src='https://via.placeholder.com/150' alt="Example" />
                                    </div>
                                </Link>

                            ))}
                        </div>
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