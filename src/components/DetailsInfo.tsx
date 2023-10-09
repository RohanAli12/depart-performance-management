'use client'
import React, { useState } from 'react'
import { Button } from './ui/button';
import axios from 'axios';

const DetailsInfo = () => {
    const [form, setForm] = useState({
        title: '',
        changetype: '',
        projectName: '',
        businessOwner: '',
        applicationOwner: '',
        developmentResource: '',
        expectedStartDate: '1995-01-01',
        expectedEndDate: '1995-01-01',
        actualStartDate: '1995-01-01',
        goOnLiveDate: '1995-01-01',
        projectStage: '',
        comments: '',
        priority: '',
        developmentEndDate: '1995-01-01',
        uatDate: '1995-01-01',
        dateAndTime: '1995-01-01',
        projectStatus: '',
        pendingAt: '',
        uatEndDate: '1995-01-01',
        resource_name: ''

    });

    const handleChange = (event: any) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async () => {
        try {
            const res = await axios.post('http://localhost:84/api/ManagementPerformance/PostPerformanceManagement', form, {
                headers: {
                    'Content-Type': 'application/json',
                    Cache: 'no-store',
                },

            }).then((res) => { console.log(res.data) });
        } catch (error) {
            console.log("Error:", error);
        }
    }




    return (
        <div className='p-4 space-y-2'>
            <h1 className='text-2xl text-center text-white font-bold'>New Entry</h1>
            {/* 1  */}
            <form className='space-y-2'>
                <label htmlFor="title" className="block font-medium mb-2 required">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3"
                    name="title"
                    value={form.title}
                    onChange={handleChange}

                    required
                />


                {/* 3  */}

                <label htmlFor="changetype" className="block font-medium mb-2">
                    Change Type
                </label>
                <input
                    type="text"
                    id="changetype"
                    className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3"
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

                <label htmlFor="projectName" className="block font-medium mb-2 required">
                    Project/Task Name
                </label>
                <input
                    type="text"
                    id="projectName"
                    className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3"
                    name="projectName"
                    value={form.projectName}
                    onChange={handleChange}

                    required
                />

                {/* 5  */}

                <label htmlFor="businessOwner" className="block font-medium mb-2 required">
                    Business Owner
                </label>
                <input
                    type="text"
                    id="businessOwner"
                    className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3"
                    name="businessOwner"
                    value={form.businessOwner}
                    onChange={handleChange}

                    required
                />

                {/* 6  */}

                <label htmlFor="applicationOwner" className="block font-medium mb-2 required">
                    Application Owner
                </label>
                <input
                    type="text"
                    id="applicationOwner"
                    className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3"
                    name="applicationOwner"
                    value={form.applicationOwner}
                    onChange={handleChange}

                    required
                />

                {/* 7  */}

                <label htmlFor="developmentResource" className="block font-medium mb-2">
                    Development Resource
                </label>
                <input
                    type="text"
                    id="developmentResource"
                    className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3"
                    name="developmentResource"
                    value={form.developmentResource}
                    onChange={handleChange}


                />

                {/* 8 */}

                <label htmlFor="expectedStartDate" className="block font-medium mb-2">
                    Expected Start Date
                </label>
                <input
                    type="datetime-local"
                    id="expectedStartDate"
                    className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3"
                    name="expectedStartDate"
                    value={form.expectedStartDate}
                    onChange={handleChange}

                />


                {/* 9  */}

                <label htmlFor="expectedEndDate" className="block font-medium mb-2">
                    Expected End Date
                </label>
                <input
                    type="datetime-local"
                    id="expectedEndDate"
                    className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3"
                    name="expectedEndDate"
                    value={form.expectedEndDate}
                    onChange={handleChange}

                />

                {/* 10  */}

                <label htmlFor="actualStartDate" className="block font-medium mb-2">
                    Actual Start Date
                </label>
                <input
                    type="datetime-local"
                    id="actualStartDate"
                    className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3"
                    name="actualStartDate"
                    value={form.actualStartDate}
                    onChange={handleChange}

                />

                {/* 11  */}

                <label htmlFor="goOnLiveDate" className="block font-medium mb-2">
                    GO ON Live Date
                </label>
                <input
                    type="datetime-local"
                    id="goOnLiveDate"
                    className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3"
                    name="goOnLiveDate"
                    value={form.goOnLiveDate}
                    onChange={handleChange}

                />

                {/* 12 */}

                <label htmlFor="projectStage" className="block font-medium mb-2 required">
                    Project/Task Stage
                </label>
                <input
                    type="text"
                    id="projectStage"
                    className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3"
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

                <label htmlFor="comments" className="block font-medium mb-2">
                    Comments
                </label>
                <textarea id="comments" name="comments" rows={4} onChange={handleChange} value={form.comments} className="w-[28em] border rounded-md py-2 px-3 focus:outline-none focus:border-myprimary"></textarea>

                {/* 14 */}

                <label htmlFor="priority" className="block font-medium mb-2">
                    Priority
                </label>
                <input
                    type="text"
                    id="priority"
                    className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3"
                    name="priority"
                    value={form.priority}
                    onChange={handleChange}

                />

                {/* 14 */}

                <label htmlFor="developmentEndDate" className="block font-medium mb-2">
                    Development End Date
                </label>
                <input
                    type="datetime-local"
                    id="developmentEndDate"
                    className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3"
                    name="developmentEndDate"
                    value={form.developmentEndDate}
                    onChange={handleChange}

                />

                {/* 15 */}

                <label htmlFor="uatDate" className="block font-medium mb-2">
                    UAT Date
                </label>
                <input
                    type="datetime-local"
                    id="uatDate"
                    className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3"
                    name="uatDate"
                    value={form.uatDate}
                    onChange={handleChange}

                />

                {/* 16 */}

                <label htmlFor="dateAndTime" className="block font-medium mb-2">
                    Date and Time
                </label>
                <input
                    type="datetime-local"
                    id="dateAndTime"
                    className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3"
                    name="dateAndTime"
                    value={form.dateAndTime}
                    onChange={handleChange}

                />

                {/* 18 */}

                <label htmlFor="projectStatus" className="block font-medium mb-2">
                    Project Status
                </label>
                <input
                    type="text"
                    id="projectStatus"
                    className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3"
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

                <label htmlFor="pendingAt" className="block font-medium mb-2">
                    Pending AT
                </label>
                <input
                    type="text"
                    id="pendingAt"
                    className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3"
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

                <label htmlFor="uatEndDate" className="block font-medium mb-2">
                    UAT End Date
                </label>
                <input
                    type="datetime-local"
                    id="uatEndDate"
                    className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3"
                    name="uatEndDate"
                    value={form.uatEndDate}
                    onChange={handleChange}

                />
                <label htmlFor="uatEndDate" className="block required font-medium mb-2">
                    Resource Name
                </label>
                <input
                    type="text"
                    id="resource_name"
                    className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3"
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
    )
}

export default DetailsInfo
