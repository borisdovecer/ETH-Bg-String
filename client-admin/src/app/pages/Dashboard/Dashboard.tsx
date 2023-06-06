import {ComponentWrapper, Table} from "@app/components";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import axios from "axios";
import _ from "lodash";
import {contract} from "@app/config/chainConfig.ts";

const Dashboard = () => {
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        axios.get(`https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=${contract.address}&apikey=128GJPMTD44MYQNCWAAC2PEJQQ8RE3NQE3`)
            .then((res) => {
                const omitArray = ['input', 'isError','value', 'txreceipt_status', 'gasPrice','gasUsed','confirmations', 'methodId', 'cumulativeGasUsed','contractAddress'];

                console.log(res)
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