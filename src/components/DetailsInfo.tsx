'use client'
import React, { useEffect, useState } from 'react'
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
    const [message, setMessage] = useState('')
    const [errrMessage, setErrMessage] = useState('')
    const handleSubmit = async () => {
        try {
            const res = await axios.post('http://localhost:84/api/ManagementPerformance/PostPerformanceManagement', form, {
                headers: {
                    'Content-Type': 'application/json',
                    Cache: 'no-store',
                },
            });
        } catch (error) {
            console.log("Error:", error);
        }
    }
    
        const handleResponse = async () => {
            try {
                await handleSubmit();                                  
            } catch (error) {
                setErrMessage('An error occurred while processing your request. Please try again later.');
                console.log(error)
            }
        }
    



    return (
        <div className='p-4 space-y-2'>
            <h1 className='text-2xl text-center text-white font-bold'>New Entry</h1>
            {/* 1  */}
            {<span className='text-green-600'>{message}</span>}
            {<span className='text-red-600'>{errrMessage}</span>}
            <br />
            <form className='space-y-2'>
                <div className='gap-4 grid grid-cols-2'>
                    <div>
                        <label htmlFor="title" className="block font-medium mb-2 required">
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
                    </div>

                    {/* 3  */}
                    <div>
                        <label htmlFor="changetype" className="block font-medium mb-2">
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
                    </div>
                    {/* 4  */}
                    <div>
                        <label htmlFor="projectName" className="block font-medium mb-2 required">
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
                    </div>
                    {/* 5  */}
                    <div>
                        <label htmlFor="businessOwner" className="block font-medium mb-2 required">
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
                    </div>
                    {/* 6  */}
                    <div>
                        <label htmlFor="applicationOwner" className="block font-medium mb-2 required">
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
                    </div>
                    {/* 7  */}
                    <div>
                        <label htmlFor="developmentResource" className="block font-medium mb-2">
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
                    </div>
                    {/* 8 */}
                    <div>
                        <label htmlFor="expectedStartDate" className="block font-medium mb-2">
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

                    </div>
                    {/* 9  */}
                    <div>
                        <label htmlFor="expectedEndDate" className="block font-medium mb-2">
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
                    </div>
                    {/* 10  */}
                    <div>
                        <label htmlFor="actualStartDate" className="block font-medium mb-2">
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
                    </div>
                    {/* 11  */}
                    <div>
                        <label htmlFor="goOnLiveDate" className="block font-medium mb-2">
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
                    </div>
                    {/* 12 */}
                    <div>
                        <label htmlFor="projectStage" className="block font-medium mb-2 required">
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
                    </div>
                    {/* 13  */}

                    <div>
                        <label htmlFor="comments" className="block font-medium mb-2">
                            Comments
                        </label>
                        <textarea id="comments" name="comments" rows={4} onChange={handleChange} value={form.comments} className="w-[28em] border rounded-md py-2 px-3 focus:outline-none text-black focus:border-myprimary"></textarea>
                    </div>
                    {/* 14 */}
                    <div>
                        <label htmlFor="priority" className="block font-medium mb-2">
                            Priority
                        </label>
                        <input
                            type="text"
                            id="priority"
                            className="w-[28em] border rounded-lg px-3 py-2 focus:outline-none  focus:border-[#6469ff] bg-gray-50  focus:ring-[#6469ff]  outline-none  p-3 text-black"
                            name="priority"
                            value={form.priority}
                            onChange={handleChange}

                        />
                    </div>
                    {/* 14 */}
                    <div>
                        <label htmlFor="developmentEndDate" className="block font-medium mb-2">
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
                    </div>
                    {/* 15 */}
                    <div>
                        <label htmlFor="uatDate" className="block font-medium mb-2">
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
                    </div>
                    {/* 16 */}
                    <div>
                        <label htmlFor="dateAndTime" className="block font-medium mb-2">
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
                    </div>
                    {/* 18 */}
                    <div>
                        <label htmlFor="projectStatus" className="block font-medium mb-2">
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
                    </div>
                    {/* 19 */}
                    <div>
                        <label htmlFor="pendingAt" className="block font-medium mb-2">
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
                    </div>
                    {/* 21 */}
                    <div>
                        <label htmlFor="uatEndDate" className="block font-medium mb-2">
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
                    </div>
                    <div>
                        <label htmlFor="uatEndDate" className="block required font-medium mb-2">
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
                    </div>
                </div>
                <br />
                <br />
                <div className='flex items-center justify-center'>
                    <Button className='bg-white hover:bg-green-800 hover:text-white text-black' onClick={() => handleResponse()}>
                        Submit
                    </Button>
                </div>
            </form >
        </div >
    )
}

export default DetailsInfo
