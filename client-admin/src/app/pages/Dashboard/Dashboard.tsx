import {ComponentWrapper, Table} from "@app/components";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import axios from "axios";
import _ from "lodash";

const Dashboard = () => {
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        axios.get(`https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=0x6AE5a7048ac76C4026cdBBFd47268Bc647933a9d&apikey=128GJPMTD44MYQNCWAAC2PEJQQ8RE3NQE3`)
            .then((res) => {
                const omitArray = ['input', 'isError','value', 'txreceipt_status', 'gasPrice','gasUsed','confirmations', 'methodId', 'cumulativeGasUsed','contractAddress'];

                const ee = _.map(res.data.result, (item) => _.omit(item, omitArray))
                setData(ee);
            })
    },[])

    return (
        <div className='my-8 w-full'>
            <ComponentWrapper title='Dashboard' icon={faTachometerAlt}>
                {data && <Table data={data} />}
            </ComponentWrapper>
        </div>
    )
}

export default Dashboard;