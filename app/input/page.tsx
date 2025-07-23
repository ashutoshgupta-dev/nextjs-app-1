"use client"
import { useData } from '../_component/DataProvider'
import react,{useState} from 'react'
const Input=()=>{
    const{state,dispatch}=useData();
    const[data,setdata]=useState({name:"",age:"",email:""});

    const handleChange=(e:react.ChangeEvent<HTMLInputElement>)=>{
          setdata({...data,[e.target.name]:e.target.value})
    }
    const handleClick=()=>{
        dispatch({type:"add-task", payload:data});
        setdata({name:"",age:"",email:""});    
    }
   
    return(
        <div className="min-h-dvh bg-white text-black">
             <section className="max-w-7xl mx-auto">
                <h2 className="text-gray-800 text-[2.2rem] pt-[2rem] mb-[2rem] font-extrabold tracking-wide border-b-[4px] border-red-600 w-max">Contact</h2>
                <div >
                    <form className="max-w-[700px]  mx-auto" onSubmit={(e)=>{e.preventDefault()}}>

                    <label htmlFor="name"><span className='font-extrabold text-red-800 block'>Name:</span><input className="border border-gray-500 rounded-md focus:outline-none hover:border-red-500 transition duration-200 w-full block mb-[1.5rem] py-[.6rem] px-[.7rem]" type="text" value={data.name} name='name' onChange={handleChange}   placeholder="Name..."  /></label>

                    <label htmlFor="age"><span className='font-extrabold text-red-800 block'>Age:</span><input className="border border-gray-500 rounded-md focus:outline-none hover:border-red-500 transition duration-200  w-full block mb-[1.5rem] py-[.6rem] px-[.7rem]" type="number" value={data.age} name='age' onChange={handleChange} placeholder="Age..." /></label>

                    <label htmlFor="email"><span className='font-extrabold text-red-800 block'>Email:</span><input className="border border-gray-500 rounded-md focus:outline-none hover:border-red-500 transition duration-200 w-full block py-[.6rem] px-[.7rem] mb-[1.5rem]" type="text" value={data.email} name='email' onChange={handleChange} placeholder="Email..."/></label>

                    <input type="button" value="Save Data" onClick={handleClick} className="bg-red-800 w-full block py-[.6rem] px-[.7rem] font-extrabold hover:bg-red-700 transition duration-300 ease-in-out text-white tracking-wide rounded-md"/>

                    </form>
                </div>
             </section>
        </div>
    )
}
export default Input