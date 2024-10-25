import React from 'react'
import Navbar from '../Shared/Navbar'
import { Form } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '../ui/button'

const CompanySetup = () => {
    return (
        <div>
            <Navbar />
            <div>
                <form action="">
                    <div>
                        <Button>
                        <ArrowLeft />
                        </Button>
                        <h1>CompanySetup</h1>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default CompanySetup