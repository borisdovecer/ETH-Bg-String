import { ComponentWrapper, Table } from "@app/components";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getEtherscanData } from "@app/api";

const Dashboard = () => {
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        getEtherscanData().then((res) => {
            setData(res)
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