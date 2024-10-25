import React, {useState} from 'react'
import Navbar from '../Shared/Navbar'
import { Label } from '@radix-ui/react-label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/Utilis/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'


const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: ""

    });
    const { loading } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname",input.fullname);
        formData.append("email",input.email);
        formData.append("password",input.password);
        formData.append("phoneNumber",input.phoneNumber);
        formData.append("role",input.role);
        try{
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, input, {
                headers: { 'Content-Type': "application/json" }, // sending JSON data
                withCredentials: true
            });
            if(res.data.success){
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch(error){
            console.log(error);
            toast.error(error.response.data.message)
        } finally{
            dispatch(setLoading(false))
        }
    }

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10' >
                    <h1 className='font-bold text-xl mb-5'>Sign up</h1>
                    <div className='my-2'>
                        <Label>Full Name</Label>
                        <Input
                            type="text"
                            value={input.fullname}
                            name="fullname"
                            onChange={changeEventHandler}
                            placeholder="John"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="John"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="Password"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Phone Number</Label>
                        <Input
                            type="text"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler}
                            placeholder="8080808080"
                        />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="role"
                                value="student"
                                checked={input.role ==='student'}
                                onChange={changeEventHandler}
                                className="h-4 w-4 text-white bg-white border border-white-400 focus:ring-2 focus:ring-white-300 checked:white cursor-pointer"
                            />
                            <label htmlFor="recruiter" className="ml-2 text-grey-700">Student</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="role"
                                value="recruiter"
                                checked={input.role ==='recruiter'}
                                onChange={changeEventHandler}
                                className="h-4 w-4 text-white bg-white border border-white-400 focus:ring-2 focus:ring-white-300 checked:white cursor-pointer"

                            />
                            <label htmlFor="recruiter" className="ml-2 text-grey-700">Recruiter</label>
                        </div>
                    </div>
                    {
                        loading ? (
                            <Button className='w-full my-4'><Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait</Button>
                        ) : (
                            <Button type='submit' className='w-full my-4'>Login</Button>
                        )
                    }
                    <span>Already have a account? <Link to='/Login' className='text-blue-600'>Login</Link></span>

                </form>
            </div>
        </div>
    )
}

export default Signup