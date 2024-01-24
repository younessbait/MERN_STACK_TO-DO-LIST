import React, { useEffect, useState } from "react";
import { MdCreate, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Spinner from "./Layouts/Spinner";
import { toast } from "react-toastify";
import axios from "axios";
export default function Home() {
  const [loading, setloading] = useState(false);
  const [arrtasks, settasks] = useState([]);
  useEffect(() => {
    const fetchFun = async () => {
      setloading(true);
      try {
        const api = await axios.get("http://localhost:5000/app");
        settasks(api.data.tasks);
        setloading(false);
      } catch (e) {
        console.log(e);
        setloading(false);
      }
    };
    fetchFun();
  }, []);
  const deletefun = async (id) => {
    axios.delete(`http://localhost:5000/app/${id}`);
    const filtertasks = arrtasks.filter((task) => task._id != id);
    settasks(filtertasks);
    toast("🗑 task is deleted !", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  return (
    <div className=' bg-white  '>
      <div className='  relative isolate px-6 pt-14 lg:px-8'>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'
        >
          <div
            className=' relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#9ecaff] to-[#2391ff] opacity-90 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className=' text-xl mt-[50px]   grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
          {loading ? (
            <div className=' fixed left-1 md:left-0  flex justify-center items-center w-screen  h-[80vh] '>
              <Spinner />
            </div>
          ) : (
            arrtasks?.map((task) => (
              <div
                key={task._id}
                className=' bg-white rounded-lg shadow-xl flex flex-col justify-between  '
              >
                <div className='border-b-2 border-blue-400 top-0 '>
                  <h2 className=' text-center font-bold  m-[10px]'>
                    {task.title}
                  </h2>
                </div>
                <div>
                  <p className='  m-[10px]'> {task.text}</p>
                </div>
                <div className='border-t-2 border-blue-400  flex justify-between items-center '>
                  <Link
                    to={`/edit/${task._id}`}
                    className='p-1 m-5 rounded-xl hover:bg-green-600  cursor-pointer hover:text-white'
                  >
                    <MdCreate size={40} />
                  </Link>
                  <Link
                    to={"/"}
                    onClick={(e) => {
                      deletefun(task._id);
                    }}
                    className=' p-1 m-5 rounded-xl hover:bg-red-600  cursor-pointer hover:text-white '
                  >
                    <MdDelete size={40} />
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
        <div
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#3c91ff] to-[#69a3ff] opacity-100 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
