import {useContractFunction, useEthers} from "@usedapp/core";
import {useEffect, useState} from "react";
import {Contract} from "ethers";
import {contract} from "@app/config/chainConfig.ts";
import StringNFT from "@app/abi/StringNFT.json";
import axios from "@app/config/axios.ts";

const ProductDetails = () => {
    const [data, setData] = useState<any>({});
    const { activateBrowserWallet, account, library }:any = useEthers();
    const [contractInstance, setContractInstance] = useState<Contract | null>(null);
    const { send } = useContractFunction(contractInstance, 'mint', {});

    useEffect(() => {
        if(account && library){
            setContractInstance(new Contract(contract.address, StringNFT.abi, library.getSigner()));
        }
    }, [account, library]);

    useEffect(() => {
        contractInstance?.getProduct(1).then((res:any) => {
            setData(res);
        })
    }, [contractInstance])

    useEffect(() => {
        if (data) {
            console.log(data[1])
            axios.get(data[1]).then((res) => {
                console.log(res)
            })
        }
    }, [data])

    const handleSubmit = async () => {
        if (!account) {
            await activateBrowserWallet();
            return;
        }
        send(1).then((res) => console.log(res));
    }

    return (
        <div className='my-8 w-full'>
            {data &&
                <div>
                    <p>Product name: {data[0]}</p>
                    <p>Product name: {data[1]}</p>
                </div>
            }
            <button onClick={handleSubmit}>Mint!</button>
        </div>
    )
}

export default ProductDetails;