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
    address: '0xd4373cA497F5cC3D49d2B50Cf69Ad13C3Fcb9fb5',
}
