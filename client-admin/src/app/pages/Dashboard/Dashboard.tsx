import {ComponentWrapper, Table} from "@app/components";

const Dashboard = () => {
    const data = [
        {id: '1', name: 'boris', timeStamp: '55522', warrenty: "ima", isRecylable: 'jeste' },
        {id: '2', name: 'boris', timeStamp: '55522', warrenty: "ima", isRecylable: 'jeste' },
        {id: '3', name: 'boris', timeStamp: '55522', warrenty: "ima", isRecylable: 'jeste' }
    ];

    return (
        <div className='my-8 w-full'>
            <ComponentWrapper title='Dashboard'>
                <Table data={data} />
            </ComponentWrapper>
        </div>
    )
}

export default Dashboard;