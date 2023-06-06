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
    address: '0xc21C066e574bb5227Cb3C7dbE9c41319A34D2D04',
}
