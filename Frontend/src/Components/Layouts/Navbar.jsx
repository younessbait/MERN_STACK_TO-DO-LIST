import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className='z-[10] mb-[40px] fixed  text-white flex justify-between items-center bg-blue-500 w-screen  '>
      <div>
        <Link to='/'>
          {" "}
          <img
            className=' m-3 w-[50px]'
            src='https://res-1.cdn.office.net/todo/1472468_2.110.1/icons/logo.png'
            alt=''
          />
        </Link>
      </div>
      <ul className='flex '>
        <li className='  font-semibold text-xl cursor-pointer mr-[20px]'>
          <Link to='/'>Home</Link>
        </li>
        <li className=' font-semibold text-xl  cursor-pointer ml-[20px]'>
          <Link to='/create'>Create</Link>
        </li>
      </ul>
      <div className=' flex-shrink-0'>
        <img
          className='mr-[20px]  h-10 w-10 rounded-full'
          src='https://media.licdn.com/dms/image/D4E03AQFCHF1GeCLBnA/profile-displayphoto-shrink_800_800/0/1694608432822?e=2147483647&v=beta&t=jzokwWK5WZm-kWDZF_z5IZ1mI0OsyBqDShN18Bd57XE'
          alt=''
        />
      </div>
    </div>
  );
}
