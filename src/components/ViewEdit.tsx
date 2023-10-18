'use client'
import { useState } from 'react';
import svg from '../../public/assets/x.svg';
import Image from "next/image";
import { Button } from './ui/button';
import { Edit } from 'lucide-react';
import axios from 'axios';
import { getTitleBasedData } from './TitleBasedData';



const ViewEdit = ({ onEditClick }: { onEditClick: number }) => {

    const [open, notOpen] = useState(false)

    // form declearation
    const [form, setForm] = useState({
        sno: 'data.sno',
        title: 'data.title',
        changetype: 'data.changetype',
        projectName: 'data.projectName',
        businessOwner: 'data.businessOwner',
        applicationOwner: 'data.applicationOwner',
        developmentResource: 'data.developmentResource',
        expectedStartDate: 'data.expectedStartDate',
        expectedEndDate: 'data.expectedEndDate',
        actualStartDate: 'data.actualStartDate',
        goOnLiveDate: 'data.goOnLiveDate',
        projectStage: 'data.projectStage',
        comments: 'data.comments',
        priority: 'data.priority',
        developmentEndDate: 'data.developmentEndDate',
        uatDate: 'data.uatDate',
        dateAndTime: 'data.dateAndTime',
        projectStatus: 'data.projectStatus',
        pendingAt: 'data.pendingAt',
        uatEndDate: 'data.uatEndDate',
        resource_name: '',

    });

    const res = async () => {
        const dataWithTitle = await getTitleBasedData(onEditClick)
        {
            dataWithTitle.map((item: any) => (
                // setData({ ...item })
                setForm({
                    sno: item.sno,
                    title: item.title,
                    changetype: item.changetype,
                    projectName: item.projectName,
                    businessOwner: item.businessOwner,
                    applicationOwner: item.applicationOwner,
                    developmentResource: item.developmentResource,
                    expectedStartDate: item.expectedStartDate,
                    expectedEndDate: item.expectedEndDate,
                    actualStartDate: item.actualStartDate,
                    goOnLiveDate: item.goOnLiveDate,
                    projectStage: item.projectStage,
                    comments: item.comments,
                    priority: item.priority,
                    developmentEndDate: item.developmentEndDate,
                    uatDate: item.uatDate,
                    dateAndTime: item.dateAndTime,
                    projectStatus: item.projectStatus,
                    pendingAt: item.pendingAt,
                    uatEndDate: item.uatEndDate,
                    resource_name: item.resource_name
                })
            ))
        }
    }
    const handleChange = (event: any) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async () => {
        try {
            const res = await axios.put('http://localhost:84/api/ManagementPerformance/UpdatePerformanceManagement', form, {
                headers: {
                    'Content-Type': 'application/json',
                    Cache: 'no-store',
                },

            }).then((res) => { console.log(res.data) });
        } catch (error) {
            console.log("Error:", error);
        }
    }
    const handleOpenClick = async () => {
        notOpen(!open)
    }

    return (
        <div>
            <Button onClick={res}><Edit onClick={handleOpenClick} className='text-green-600' /></Button>
            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-slate-400 z-50">
                    <div className="bg-gray-900 p-8 rounded-lg w-[36.5em] h-[30em]">
                        {/* Login form */}
                        <div className="flex flex-row justify-between items-center">
                            <h2 className="text-xl font-extrabold mb-4 text-white">Edit Form</h2>
                            <Image src={svg} alt="X" width={20} className="-mt-3 cursor-pointer" onClick={handleOpenClick} />
                        </div>
                        {/* form   */}
                        <div className='p-4 space-y-2'>
                            {/* 1  */}
                            <div className='w-[32em] h-[24em] overflow-auto'>
                                <form className='space-y-2'>
                                    <label htmlFor="sno" className="block text-white font-medium mb-2">
                                        Sno
                                    </label>
                                    <input
                                        type="text"
                                        id="sno"
                                        className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3 text-black"
                                        name="sno"
                                        readOnly
                                        value={form.sno}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="title" className="block text-white font-medium mb-2 required">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3 text-black"
                                        name="title"
                                        value={form.title}
                                        onChange={handleChange}

                                        required
                                    />


                                    {/* 3  */}

                                    <label htmlFor="changetype" className="block text-white font-medium mb-2">
                                        Change Type
                                    </label>
                                    <input
                                        type="text"
                                        id="changetype"
                                        className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3 text-black"
                                        name="changetype"
                                        list='changetype-option'
                                        value={form.changetype}
                                        onChange={handleChange}

                                    />
                                    <datalist id='changetype-option'>
                                        <option value="PROJECT">PROJECT</option>
                                        <option value="CR">CR</option>
                                        <option value="AUDIT OBSERVATION">AUDIT OBSERVATION</option>
                                        <option value="PRODUCTION ISSUE">PRODUCTION ISSUE</option>
                                        <option value="SUPPORT">SUPPORT</option>
                                    </datalist>

                                    {/* 4  */}

                                    <label htmlFor="projectName" className="block text-white font-medium mb-2 required">
                                        Project/Task Name
                                    </label>
                                    <input
                                        type="text"
                                        id="projectName"
                                        className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3 text-black"
                                        name="projectName"
                                        value={form.projectName}
                                        onChange={handleChange}

                                        required
                                    />

                                    {/* 5  */}

                                    <label htmlFor="businessOwner" className="block text-white font-medium mb-2 required">
                                        Business Owner
                                    </label>
                                    <input
                                        type="text"
                                        id="businessOwner"
                                        className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3 text-black"
                                        name="businessOwner"
                                        value={form.businessOwner}
                                        onChange={handleChange}

                                        required
                                    />

                                    {/* 6  */}

                                    <label htmlFor="applicationOwner" className="block text-white font-medium mb-2 required">
                                        Application Owner
                                    </label>
                                    <input
                                        type="text"
                                        id="applicationOwner"
                                        className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3 text-black"
                                        name="applicationOwner"
                                        value={form.applicationOwner}
                                        onChange={handleChange}

                                        required
                                    />

                                    {/* 7  */}

                                    <label htmlFor="developmentResource" className="block text-white font-medium mb-2">
                                        Development Resource
                                    </label>
                                    <input
                                        type="text"
                                        id="developmentResource"
                                        className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3 text-black"
                                        name="developmentResource"
                                        value={form.developmentResource}
                                        onChange={handleChange}


                                    />

                                    {/* 8 */}

                                    <label htmlFor="expectedStartDate" className="block text-white font-medium mb-2">
                                        Expected Start Date
                                    </label>
                                    <input
                                        type="datetime-local"
                                        id="expectedStartDate"
                                        className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3 text-black"
                                        name="expectedStartDate"
                                        value={form.expectedStartDate}
                                        onChange={handleChange}

                                    />


                                    {/* 9  */}

                                    <label htmlFor="expectedEndDate" className="block text-white font-medium mb-2">
                                        Expected End Date
                                    </label>
                                    <input
                                        type="datetime-local"
                                        id="expectedEndDate"
                                        className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3 text-black"
                                        name="expectedEndDate"
                                        value={form.expectedEndDate}
                                        onChange={handleChange}

                                    />

                                    {/* 10  */}

                                    <label htmlFor="actualStartDate" className="block text-white font-medium mb-2">
                                        Actual Start Date
                                    </label>
                                    <input
                                        type="datetime-local"
                                        id="actualStartDate"
                                        className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3 text-black"
                                        name="actualStartDate"
                                        value={form.actualStartDate}
                                        onChange={handleChange}

                                    />

                                    {/* 11  */}

                                    <label htmlFor="goOnLiveDate" className="block text-white font-medium mb-2">
                                        GO ON Live Date
                                    </label>
                                    <input
                                        type="datetime-local"
                                        id="goOnLiveDate"
                                        className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3 text-black"
                                        name="goOnLiveDate"
                                        value={form.goOnLiveDate}
                                        onChange={handleChange}

                                    />

                                    {/* 12 */}

                                    <label htmlFor="projectStage" className="block text-white font-medium mb-2 required">
                                        Project/Task Stage
                                    </label>
                                    <input
                                        type="text"
                                        id="projectStage"
                                        className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3 text-black"
                                        name="projectStage"
                                        value={form.projectStage}
                                        onChange={handleChange}
                                        list='projectStage-option'
                                        required
                                    />
                                    <datalist id='projectStage-option'>
                                        <option value="GO LIVE">GO LIVE</option>
                                        <option value="ON HOLD">ON HOLD</option>
                                        <option value="ON INFOSEC">ON INFOSEC</option>
                                        <option value="IN PROGRESS">IN PROGRESS</option>
                                        <option value="DELAYED">DELAYED</option>
                                        <option value="RESOLVED">RESOLVED</option>
                                    </datalist>
                                    {/* 13  */}

                                    <label htmlFor="comments" className="block text-white font-medium mb-2">
                                        Comments
                                    </label>
                                    <textarea id="comments" name="comments" rows={4} onChange={handleChange} value={form.comments} className="w-[28em] border rounded-md py-2 px-3 focus:outline-none text-black focus:border-myprimary"></textarea>

                                    {/* 14 */}

                                    <label htmlFor="priority" className="block text-white font-medium mb-2">
                                        Priority
                                    </label>
                                    <input
                                        type="text"
                                        id="priority"
                                        className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-nonea p-3"
                                        name="priority"
                                        value={form.priority}
                                        onChange={handleChange}

                                    />

                                    {/* 14 */}

                                    <label htmlFor="developmentEndDate" className="block text-white font-medium mb-2">
                                        Development End Date
                                    </label>
                                    <input
                                        type="datetime-local"
                                        id="developmentEndDate"
                                        className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3 text-black"
                                        name="developmentEndDate"
                                        value={form.developmentEndDate}
                                        onChange={handleChange}

                                    />

                                    {/* 15 */}

                                    <label htmlFor="uatDate" className="block text-white font-medium mb-2">
                                        UAT Date
                                    </label>
                                    <input
                                        type="datetime-local"
                                        id="uatDate"
                                        className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3 text-black"
                                        name="uatDate"
                                        value={form.uatDate}
                                        onChange={handleChange}

                                    />

                                    {/* 16 */}

                                    <label htmlFor="dateAndTime" className="block text-white font-medium mb-2">
                                        Date and Time
                                    </label>
                                    <input
                                        type="datetime-local"
                                        id="dateAndTime"
                                        className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3 text-black"
                                        name="dateAndTime"
                                        value={form.dateAndTime}
                                        onChange={handleChange}

                                    />

                                    {/* 18 */}

                                    <label htmlFor="projectStatus" className="block text-white font-medium mb-2">
                                        Project Status
                                    </label>
                                    <input
                                        type="text"
                                        id="projectStatus"
                                        className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3 text-black"
                                        name="projectStatus"
                                        value={form.projectStatus}
                                        onChange={handleChange}
                                        list='projectStatus-option'
                                    />
                                    <datalist id='projectStatus-option'>
                                        <option value="TO BE INITIATED">TO BE INITIATED</option>
                                        <option value="IN PROGRESS">IN PROGRESS</option>
                                        <option value="GO LIVE">GO LIVE</option>
                                        <option value="COMPLETED">COMPLETED</option>
                                    </datalist>

                                    {/* 19 */}

                                    <label htmlFor="pendingAt" className="block text-white font-medium mb-2">
                                        Pending AT
                                    </label>
                                    <input
                                        type="text"
                                        id="pendingAt"
                                        className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3 text-black"
                                        name="pendingAt"
                                        list='pendingAt-option'
                                        value={form.pendingAt}
                                        onChange={handleChange}
                                    />
                                    <datalist id='pendingAt-option'>
                                        <option value="BUSINESS">BUSINESS</option>
                                        <option value="VENDOR">VENDOR</option>
                                        <option value="DEVELOPMENT">DEVELOPMENT</option>
                                        <option value="INFOSEC">INFOSEC</option>
                                        <option value="INFRA">INFRA</option>
                                        <option value="PMO">PMO</option>
                                    </datalist>

                                    {/* 21 */}

                                    <label htmlFor="uatEndDate" className="block text-white font-medium mb-2">
                                        UAT End Date
                                    </label>
                                    <input
                                        type="datetime-local"
                                        id="uatEndDate"
                                        className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3 text-black"
                                        name="uatEndDate"
                                        value={form.uatEndDate}
                                        onChange={handleChange}

                                    />
                                    <label htmlFor="uatEndDate" className="block text-white required font-medium mb-2">
                                        Resource Name
                                    </label>
                                    <input
                                        type="text"
                                        id="resource_name"
                                        className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3 text-black"
                                        name="resource_name"
                                        required
                                        placeholder='Please Select from the given dropdown'
                                        list='resource-option'
                                        value={form.resource_name}
                                        onChange={handleChange}

                                    />
                                    <datalist id='resource-option'>
                                        <option value="usman">usman</option>
                                        <option value="meer">meer</option>
                                        <option value="fahad">fahad</option>
                                        <option value="hibab">hibab</option>
                                        <option value="mukeesh">mukeesh</option>
                                        <option value="danish">danish</option>
                                        <option value="kanwal">kanwal</option>
                                    </datalist>
                                    <br />
                                    <br />
                                    <div className='flex items-center justify-center'>
                                        <Button className='bg-white hover:bg-green-800 hover:text-white text-black' onClick={() => handleSubmit()}>
                                            Submit
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewEdit