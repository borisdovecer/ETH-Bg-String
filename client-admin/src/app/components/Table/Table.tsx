import _ from 'lodash';
import {useSelector} from "react-redux";

const Table = ({ data }:any) => {
    const headers = Object.keys(data[0]);

    const theme = useSelector((state:any) => state.config.theme);

    return (
        <>
            <div className="overflow-x-auto custom-scrollbar mt-6 rounded-3xl">
                <table className="w-full">
                    <thead className="">
                    <tr className='rounded-2xl'>
                        {headers.map((header) => (
                            <th
                                key={header}
                                className={`${!theme ? 'bg-dark-secondary' : 'bg-light-secondary'} px-2 md:px-4 py-2  font-bold cursor-pointer`}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((row:any, rowIndex:number) => (
                        <tr
                            key={rowIndex}
                            className={`${rowIndex % 2 === 0 ? (theme ? "bg-light-tertiary" : "bg-dark-tertiary") : (theme ? "bg-light-secondary" : "bg-dark-primary")}`}
                        >
                            {headers.map((header) => (
                                <td
                                    key={header}
                                    className="px-2 md:px-4 py-2 border-t border-b text-center"
                                >
                                    {row[header]}
                                </td>
                            ))}

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Table;