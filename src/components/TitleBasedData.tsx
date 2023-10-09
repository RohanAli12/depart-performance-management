import axios from 'axios';
import https from 'https';


export async function getTitleBasedData(sno: number) {
    try {
        const agent = new https.Agent({ rejectUnauthorized: false });
        const response = await axios.get(`http://localhost:84/api/ManagementPerformance/GetPerformanceManagementWithSno/${sno}`, { httpsAgent: agent });
        return response.data;

    } catch (error) {
        console.log('Failed to fetch data: ' + error);
    }
}

