import { getDefaultProvider } from '@ethersproject/providers';
import { Sepolia } from '@usedapp/core';

export const config = {
    readOnlyChainId: Sepolia.chainId,
    readOnlyChainName: Sepolia.chainName,
    readOnlyUrls: {
        [Sepolia.chainId]: getDefaultProvider('sepolia')
    },
};

// contract treba u .env
export const contract = {
    [Sepolia.chainId]: '0xdd0084a3Ea1A148d02d89EBE59a2F99c5eBe5935',
}
