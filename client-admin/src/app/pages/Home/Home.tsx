import {useEthers} from "@usedapp/core";

const Home = () => {
    const { account } = useEthers();


    return (
        <div className='my-8 w-full text-center'>
            {!account ?
                <div>You must to connect your fucking wallet!!!</div>
                :
                <div>
                    <p>Hello, {account}</p>
                </div>
            }
        </div>
    )
}

export default Home;