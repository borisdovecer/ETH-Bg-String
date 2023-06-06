import {useDispatch, useSelector} from "react-redux";
import {toggleTheme} from "@app/config/configReducer.ts";
import {config} from "@app/config/chainConfig.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import {useEthers} from "@usedapp/core";
import StringNFT from "@app/abi/StringNFT.json";
import { Contract } from "ethers";
import {useEffect, useState} from "react";

const Header = () => {
    const theme = useSelector((state:any) => state.config.theme);
    const dispatch = useDispatch();
    const [contracName, setContractName] = useState<string>('')

    const { activateBrowserWallet, account, library }:any = useEthers();
    const [contractInstance, setContractInstance] = useState<Contract | null>(null);
    useEffect(() => {
        if(library){
            setContractInstance(new Contract('0xdd0084a3Ea1A148d02d89EBE59a2F99c5eBe5935', StringNFT.abi, library));
        }
    }, [library]);

    useEffect(() => {
        contractInstance?.name().then((res:string) => setContractName(res))
    }, [contractInstance])
    const connectWallet = () => {
        activateBrowserWallet();
    };

    const handleThemeToggleClick = () => {
        dispatch(toggleTheme());
    }

    const shortenAddress = account ? `${account.slice(0, 5)}...${account.slice(account.length - 4)}` : '';

    return (
        <div className={`${!theme ? 'border-light-primary bg-dark-tertiary' : 'border-dark-primary bg-light-primary'} text-lg w-full border-b flex justify-between items-center h-10 fixed z-50`}>
            <span className='pl-4'>{contracName}, Chain: {config.readOnlyChainName}</span>
            <span>Unlock your product story</span>
            <div>
                <span className="mx-4">
                {theme ?
                    <button onClick={handleThemeToggleClick}>
                        <FontAwesomeIcon icon={faMoon} />
                    </button>
                    :
                    <button onClick={handleThemeToggleClick}>
                        <FontAwesomeIcon icon={faSun} />
                    </button>
                }
                </span>
                {!account ?
                    <button className='mr-4 px-4 border rounded-xl' onClick={connectWallet}>_connect wallet</button>
                    :
                    <span  className="px-4">
                        {shortenAddress}
                    </span>
                }
            </div>
        </div>
    )
}

export default Header;