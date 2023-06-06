import {ComponentWrapper, Table} from "@app/components";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const Transfer = () => {
    const data = [
        {id: '1', name: 'boris', timeStamp: '55522', warrenty: "ima", isRecylable: 'jeste' },
        {id: '2', name: 'boris', timeStamp: '55522', warrenty: "ima", isRecylable: 'jeste' },
        {id: '3', name: 'boris', timeStamp: '55522', warrenty: "ima", isRecylable: 'jeste' }
    ];

    return (
        <div className='my-8 w-full'>
            <ComponentWrapper title='Tranfer' icon={faArrowAltCircleRight}>
                <div className='mb-4'>
                    <Table data={data} />
                </div>


                <div className='flex flex-row space-x-4'>
                    <div className='bg-light-primary text-black rounded-3xl w-1/2'>
                        <div className='px-4'>
                            <p>tilele</p>
                            <p>tilele</p>
                            <p>tilele</p>
                            <p>tilele</p>
                        </div>
                    </div>
                    <div className='bg-light-primary text-black rounded-3xl w-1/2'>
                        <div className='px-4'>
                            <p>tilele</p>
                            <p>tilele</p>
                            <p>tilele</p>
                            <p>tilele</p>
                        </div>
                    </div>
                </div>

            </ComponentWrapper>
        </div>
    )
}

export default Transfer;