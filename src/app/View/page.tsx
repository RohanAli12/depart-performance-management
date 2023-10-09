import axios from 'axios';
import https from 'https';
import Wrapper from '@/components/Wrapper';
import ViewEdit from '@/components/ViewEdit';
import ViewDelete from '@/components/ViewDelete';



async function getData() {
    try {
        const agent = new https.Agent({ rejectUnauthorized: false });
        // const res = await fetch('http://localhost:84/api/ManagementPerformance/GetPerformanceManagement')
        // if (!res.ok) {
        //     throw new Error('Failed to fetch data')
        // }
        // console.log(res)
        // return res.json();
        const response = await axios.get('http://localhost:84/api/ManagementPerformance/GetPerformanceManagement', { httpsAgent: agent });
        console.log('Is responseData an array?', Array.isArray(response.data));
        return (response.data);


    } catch (error) {
        console.log('Failed to fetch data: ' + error);

    }
}
async function View() {
    const data = await getData();
    return (
        <section> 
            <Wrapper>
                <div className="overflow-x-auto overflow-y-auto mt-3">
                    <table className="min-w-full border">
                        <thead className='font-extrabold text-2xl bg-gray-900 text-white'>
                            <tr>
                                <th className="px-2 py-1 whitespace-nowrap">Sno</th>
                                <th className="px-2 py-1 whitespace-nowrap">Title</th>
                                <th className="px-2 py-1 whitespace-nowrap">Change Type</th>
                                <th className="px-2 py-1 whitespace-nowrap">Project/Task Name</th>
                                <th className="px-2 py-1 whitespace-nowrap">Business Owner</th>
                                <th className="px-2 py-1 whitespace-nowrap">Application Owner</th>
                                <th className="px-2 py-1 whitespace-nowrap">Development Resource</th>
                                <th className="px-2 py-1 whitespace-nowrap">Expected Start Date</th>
                                <th className="px-2 py-1 whitespace-nowrap">Expected End Date</th>
                                <th className="px-2 py-1 whitespace-nowrap">Actual Start Date</th>
                                <th className="px-2 py-1 whitespace-nowrap">GO ON Live Date</th>
                                <th className="px-2 py-1 whitespace-nowrap">Project/Task Stage</th>
                                <th className="px-2 py-1 whitespace-nowrap">Comments</th>
                                <th className="px-2 py-1 whitespace-nowrap">Priority</th>
                                <th className="px-2 py-1 whitespace-nowrap">Development End Date</th>
                                <th className="px-2 py-1 whitespace-nowrap">UAT Date</th>
                                <th className="px-2 py-1 whitespace-nowrap">Date and Time</th>
                                <th className="px-2 py-1 whitespace-nowrap">Project Status</th>
                                <th className="px-2 py-1 whitespace-nowrap">Pending AT</th>
                                <th className="px-2 py-1 whitespace-nowrap">UAT End Date</th>
                                <th className="px-2 py-1 whitespace-nowrap">Resource Name</th>
                                <th className="px-2 py-1 whitespace-nowrap">Actions</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                data && data.map((item: any) => (
                                    <tr key={item.sno} className="border-t border-gray-600 font-semibold text-lg">
                                        <td className="px-4 py-2">{item.sno}</td>
                                        <td className="px-4 py-2">{item.title}</td>
                                        <td className="px-4 py-2">{item.changetype}</td>
                                        <td className="px-4 py-2">{item.projectName}</td>
                                        <td className="px-4 py-2">{item.businessOwner}</td>
                                        <td className="px-4 py-2">{item.applicationOwner}</td>
                                        <td className="px-4 py-2">{item.developmentResource}</td>
                                        <td className="px-4 py-2">{item.expectedStartDate}</td>
                                        <td className="px-4 py-2">{item.expectedEndDate}</td>
                                        <td className="px-4 py-2">{item.actualStartDate}</td>
                                        <td className="px-4 py-2">{item.goOnLiveDate}</td>
                                        <td className="px-4 py-2">{item.projectStage}</td>
                                        <td className="px-4 py-2">{item.comments}</td>
                                        <td className="px-4 py-2">{item.priority}</td>
                                        <td className="px-4 py-2">{item.developmentEndDate}</td>
                                        <td className="px-4 py-2">{item.uatDate}</td>
                                        <td className="px-4 py-2">{item.dateAndTime}</td>
                                        <td className="px-4 py-2">{item.projectStatus}</td>
                                        <td className="px-4 py-2">{item.pendingAt}</td>
                                        <td className="px-4 py-2">{item.uatEndDate}</td>
                                        <td className="px-4 py-2">{item.resource_name}</td>
                                        <td className="px-4 py-2 flex flex-row">
                                            <ViewEdit onEditClick={item.sno} />
                                            <ViewDelete deleteView={item.sno} />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    {
                        !data && <div className='justify-center items-center flex text-3xl text-red-700'>
                            No Data Found
                        </div>
                    }
                </div>
            </Wrapper>
        </section>
    );
}

export default View;
