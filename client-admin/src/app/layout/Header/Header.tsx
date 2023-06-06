import {useDispatch, useSelector} from "react-redux";
import {toggleTheme} from "@app/config/configReducer.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faUser, faWallet } from '@fortawesome/free-solid-svg-icons';
import {useEthers} from "@usedapp/core";
import StringNFT from "@app/abi/StringNFT.json";
import { Contract } from "ethers";
import {useEffect, useState} from "react";

const Header = () => {
    const theme = useSelector((state:any) => state.config.theme);
    const dispatch = useDispatch();
    const [contractName, setContractName] = useState<string>('')

    const { activateBrowserWallet, account, library }:any = useEthers();
    const [contractInstance, setContractInstance] = useState<Contract | null>(null);
    useEffect(() => {
        if(library){
            setContractInstance(new Contract('0x6AE5a7048ac76C4026cdBBFd47268Bc647933a9d', StringNFT.abi, library));
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
        <div className={`${!theme ? 'bg-dark-tertiary' : 'bg-light-primary'} text-lg w-full flex justify-between items-center h-10 fixed z-50 rounded-b-xl`}>
            <div className='flex flex-row items-center'>
                <div className='w-12 bg-dark-primary h-1' />
                <div className='pl-4 font-bold text-2xl'>
                    {contractName}
                </div>
            </div>
            <div className='flex flex-row items-center'>
                <div className='flex flex-row'>
                    <div className='bg-light-secondary px-2 rounded-3xl'>
                        <FontAwesomeIcon icon={faWallet} />
                        <span >{shortenAddress}</span>
                    </div>

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
                        <button className='mr-4 px-4 border rounded-xl' onClick={connectWallet}>
                            _connect wallet
                        </button>
                        :
                        <button  className="px-4">
                            <FontAwesomeIcon icon={faUser} />
                        </button>
                    }
                </div>
                <div className='w-12 bg-dark-primary h-1' />
            </div>
        </div>
    )
}

export default Header;