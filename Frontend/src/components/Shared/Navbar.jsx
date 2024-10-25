import React from 'react' // Importing CSS module
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/Utilis/constant';
import { toast } from 'sonner';
import { setUser } from '@/redux/authSlice';



const Navbar = () => {
  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.responce.data.message);
    }
  }
  return (
    <div className='bg-white' >
      <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
        {/* Logo Section */}
        <div>
          <h1 className='text-2xl font-bold'>
            Jobs <span className='text-[#F83002]'>Hunt</span>
          </h1>
        </div>

        {/* Navigation Menu */}
        <div className='flex items-center gap-12'>
          <ul className='flex font-medium items-center gap-8'>
            {/* Always present items */}
            <li className="bg-white underline-offset-4 hover:underline">Jobs</li>

            {/* Conditionally render additional items */}
            {!user ? (
              <>
                {/* Items for non-logged-in users */}
                <li className="bg-white underline-offset-4 hover:underline">Home</li>
              </>
            ) : (
              <>
                {/* Items for logged-in users */}
                <li className="bg-white underline-offset-4 hover:underline">Company</li>
              </>
            )}
          </ul>
          {
            !user ? (
              <div>
                <div className='flex items-center gap-2'>
                  <Link to="/login"><Button variant="outline">Login</Button></Link>
                  <Link to="/signup"><Button>Signup</Button></Link>
                </div>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className='cursor-pointer'>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className='w-80'>
                  <div>
                    <div className='flex gap-2 space-y-2'>
                      <Avatar className='cursor-pointer'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      </Avatar>
                      <div>
                        <h4 className='font-medium'>{user?.fullname}</h4>
                        <p>welcome to User</p>
                      </div>
                    </div>
                    <div className='flex flex-col my-2 text-gray-600'>
                      <div className='flex w-fit items-center gap-2 cursor-pointer'>
                        <User2 />
                        <button className="bg-transparent border-none text-black underline underline-offset-4 hover:text-black hover:underline">View Profile</button>
                      </div>
                      <div className='flex w-fit items-center gap-2 cursor-pointer'>
                        <LogOut />
                        <Button className="bg-transparent border-none text-black underline underline-offset-4 hover:text-black hover:underline" onClick={logoutHandler}>Logout</Button>
                      </div>
                    </div>


                  </div>
                </PopoverContent>
              </Popover>
            )
          }


        </div>
      </div>
    </div>
  );
};

export default Navbar;
