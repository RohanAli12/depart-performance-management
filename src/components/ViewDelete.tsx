'use client'
import axios from 'axios';
import https from 'https';
import { Trash } from 'lucide-react';
import { Button } from './ui/button';

async function deleteData(sno: any) {
    try {
        const agent = new https.Agent({ rejectUnauthorized: false });
        const response = await axios.delete(`http://localhost:84/api/ManagementPerformance/DeletePerformanceManagement/${sno}`, { httpsAgent: agent });
        return JSON.parse(response.data);

    } catch (error) {
        console.log('Failed to fetch data: ' + error);

    }
}
function ViewDelete({ deleteView }: { deleteView: string }) {
    const handleDelete = async () => {
        try {
            await deleteData(deleteView);
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <Button onClick={handleDelete}><Trash className='text-red-600' /></Button>
        </>
    );
}

export default ViewDelete;
