import {ComponentWrapper, Table} from "@app/components";
import {faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Transfer = () => {
    const data = [
        {id: '1', name: 'boris', timeStamp: '55522', warrenty: "ima", isRecylable: 'jeste' },
        {id: '2', name: 'zxcc', timeStamp: '55522', warrenty: "ima", isRecylable: 'jeste' },
        {id: '3', name: 'zxcczc', timeStamp: '55522', warrenty: "ima", isRecylable: 'jeste' },
        {id: '4', name: 'eeee', timeStamp: '55522', warrenty: "ima", isRecylable: 'jeste' },
        {id: '5', name: '43242', timeStamp: '55522', warrenty: "ima", isRecylable: 'jeste' },
        {id: '6', name: 'vcx', timeStamp: '55522', warrenty: "ima", isRecylable: 'jeste' },
    ];

    return (
        <div className='my-8 w-full'>
            <ComponentWrapper title='Transfer' icon={faArrowAltCircleRight}>
                <div className='mb-4'>
                    <Table data={data} />
                </div>
                <div className='flex flex-row space-x-4 bg-light-primary text-black text-lg font-bold justify-between rounded-3xl h-8 text-center items-center'>
                    <div className='w-full'>
                        <span>Transfer to: </span>
                        <input className='text-black border-black border pl-2 rounded-xl' type='text' placeholder='Address' />
                    </div>
                    <div className='w-full'>
                        <span>token count</span>
                        <span className='mx-2 px-2 bg-light-secondary rounded-lg'>6</span>
                    </div>
                    <div className='w-full'>
                        <button className='bg-dark-primary text-light-primary w-1/2 rounded-2xl'>
                            <FontAwesomeIcon icon={faArrowAltCircleRight} className="mx-2" />
                            transfer
                        </button>
                    </div>
                </div>
            </ComponentWrapper>
        </div>
    )
}

export default Transfer;