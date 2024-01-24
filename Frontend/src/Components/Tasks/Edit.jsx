import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Edit() {
  const { id } = useParams();
  const [title, settitle] = useState("");
  const navigate = useNavigate();
  const [text, settext] = useState("");
  const [er, seter] = useState("");
  useEffect(() => {
    const fetchFun = async () => {
      try {
        const api = await axios.get(`http://localhost:5000/app/${id}`);
        settitle(api.data.task.title);
        settext(api.data.task.text);
      } catch (e) {
        console.log(e);
      }
    };
    fetchFun();
  }, [id]);
  async function test(e) {
    e.preventDefault();
    const task = { title, text };
    try {
      await axios.put(`http://localhost:5000/app/${id}`, task);
      navigate("/");
      toast("📚 task is updated !", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } catch (err) {
      if (err.response.status === 422) {
        seter(err.response.data.message);
      }
    }
  }
  return (
    <div className=' bg-white  '>
      <div className='relative isolate px-6 pt-14 lg:px-8'>
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
        <div className='fixed left-1 md:left-0 flex flex-col  w-full justify-center  text-black  items-center'>
          {er ? (
            <div role='alert' className=' md:w-[40%] w-[80%]'>
              <div className='mt-[20px] w-[100%] bg-red-500 text-white font-bold rounded-t px-4 py-2'>
                Danger
              </div>
              <div className='border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700'>
                <p>{er}</p>
              </div>
            </div>
          ) : (
            ""
          )}
          <h1 className='mt-[40px]  text-3xl font-bold  '>Edit Task</h1>
          <form
            className='flex flex-col h-[60%] md:w-[40%]  justify-center  w-[80%]'
            onSubmit={(e) => test(e)}
          >
            <label className='  text-xl'>Title :</label>
            <input
              className='border-2 border-blue-400 focus:outline-none p-2 text-black md:p-2  rounded-md my-4'
              type='text'
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
            <label className='  text-xl'>Text :</label>
            <textarea
              type='text'
              value={text}
              onChange={(e) => settext(e.target.value)}
              className='border-2 border-blue-400 focus:outline-none p-3 md:p-2 text-black rounded-md  md:h-[200px]   my-4'
            />
            <div className=' flex justify-between'>
              {" "}
              <Link
                to={"/"}
                className='w-[45%] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 hover:bg-blue-400 duration-300  text-center bg-blue-500  text-white rounded-md p-2 cursor-pointer font-bold'
              >
                cancel
              </Link>
              <button
                type='submit'
                className='w-[45%] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 hover:bg-blue-400 duration-300  text-center bg-blue-500  text-white rounded-md p-2 cursor-pointer font-bold'
              >
                edit
              </button>
            </div>
          </form>
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
        <div
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(70%+3rem)] aspect-[1155/678] w-[66.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#3c91ff] to-[#69a3ff] opacity-100 sm:left-[calc(90%+76rem)] sm:w-[72.1875rem]'
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
