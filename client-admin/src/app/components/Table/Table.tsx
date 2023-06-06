import _ from 'lodash';
import {useSelector} from "react-redux";

const Table = ({ data }:any) => {
    const headers = Object.keys(data[0]);

    const theme = useSelector((state:any) => state.config.theme);

    return (
        <>
            <div className="overflow-x-auto custom-scrollbar mt-6 rounded-3xl">
                <table className="w-full">
                    <thead>
                    <tr className='rounded-2xl'>
                        {headers.map((header) => (
                            <th
                                key={header}
                                className={`${!theme ? 'bg-dark-secondary text-light-primary' : 'bg-light-secondary text-dark-primary'} px-2 md:px-4 py-2 font-bold cursor-pointer`}
                            >
                                {_.startCase(header)}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((row:any, rowIndex:number) => (
                        <tr
                            key={rowIndex}
                            className={`${theme ? "bg-light-primary text-dark-primary" : "bg-dark-tertiary text-dark-primary"}`}
                        >
                            {headers.map((header) => (
                                <td
                                    key={header}
                                    className="px-2 md:px-4 py-2 text-center"
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