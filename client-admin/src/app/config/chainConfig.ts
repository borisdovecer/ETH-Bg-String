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
    address: '0xF692D943e7D18b290CC38f51583b4c80D9917b5C',
}
