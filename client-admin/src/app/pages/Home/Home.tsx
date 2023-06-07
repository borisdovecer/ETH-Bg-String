import { useEthers } from "@usedapp/core";

const Home = () => {
    const { account } = useEthers();

    return (
        <div className='my-8 w-full text-center'>
            {!account ?
                <div>Please, connect your wallet</div>
                :
                <div>
                    <p>Hello, {account}</p>
                </div>
            }
        </div>
    )
}

export default Home;