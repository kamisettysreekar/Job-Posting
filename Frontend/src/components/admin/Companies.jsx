import React from 'react'
import Navbar from '../Shared/Navbar'
import { Button } from '../ui/button'
import CompainesTable from './CompainesTable'
import { useNavigate } from 'react-router-dom'

const Companies = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto my-10'>
                <div className='flex items-center justify-between my-5'>
                    <Button onClick={() => navigate("/admin//create")}> New Company</Button>
                </div>
                <span>Here are the list of compaines</span>
                <CompainesTable />
            </div>

        </div>
    )
}

export default Companies