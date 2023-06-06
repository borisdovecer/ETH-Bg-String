import { getDefaultProvider } from '@ethersproject/providers';
import { Sepolia } from '@usedapp/core';

export const config = {
    readOnlyChainId: Sepolia.chainId,
    readOnlyChainName: Sepolia.chainName,
    readOnlyUrls: {
        [Sepolia.chainId]: getDefaultProvider('sepolia')
    },
};

export const contractAddress = {
    address: '0xd875A8fDd636F2C71239334E3a1aA58165538f2D'
}

// contract treba u .env
export const contract = {
    address: '0xd875A8fDd636F2C71239334E3a1aA58165538f2D',
}
