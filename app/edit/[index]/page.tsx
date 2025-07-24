
"use client";
import { useData } from "@/app/_component/DataProvider";
import react, { useState,useReducer, useEffect } from "react";
import { useRouter } from "next/navigation";

const EditTask=({params}:{params:Promise<{index:number}>})=>{
    const {index}=react.use(params)

    const{state,dispatch}=useData();
    const student=state.students[index]
 
    const [formData,setFormData]=useState({name:"",age:"",email:""})

    const handleChange=(e: react.ChangeEvent<HTMLInputElement>)=>{
         setFormData({...formData,[e.target.name]:e.target.value});
    }


        useEffect(()=>{
                    if(state.students.length>0){
                        setFormData(student)
                    }
                },[student,index])

    const router=useRouter();
    const handleClick=(e:react.MouseEvent<HTMLInputElement>)=>{
         const value=e.currentTarget.value;
         
         if(value==="Update"){
             dispatch({type:"update",payload:{updatedData:formData,index:index}});
             router.push("../show")
         }else if(value==="Cancel"){
            //   dispatch({type:"cancel"});
              router.push("../show")
         }
    }

    if(state.students.length>0){
          return(
        <div>
             <div className="min-h-dvh bg-white text-black">
             <section className="max-w-7xl mx-auto">
                <h2 className="text-gray-800 text-[2.2rem] pt-[2rem] mb-[2rem] font-extrabold tracking-wide border-b-[4px] border-red-600 w-max">Edit Records</h2>
                <div >

                    <form className="max-w-[700px]  mx-auto" onSubmit={(e)=>{e.preventDefault()}}>

                    <label htmlFor="name"><span className='font-extrabold text-red-800 block'>Name:</span><input className="border border-gray-500 rounded-md focus:outline-none hover:border-red-500 transition duration-200 w-full block mb-[1.5rem] py-[.6rem] px-[.7rem]" type="text" value={formData.name} name="name"  onChange={handleChange}   placeholder="Name..."  /></label>

                    <label htmlFor="age"><span className='font-extrabold text-red-800 block'>Age:</span><input className="border border-gray-500 rounded-md focus:outline-none hover:border-red-500 transition duration-200  w-full block mb-[1.5rem] py-[.6rem] px-[.7rem]" type="number" value={formData.age} name='age' onChange={handleChange} placeholder="Age..." /></label>

                    <label htmlFor="email"><span className='font-extrabold text-red-800 block'>Email:</span><input className="border border-gray-500 rounded-md focus:outline-none hover:border-red-500 transition duration-200 w-full block py-[.6rem] px-[.7rem] mb-[1.5rem]" type="text" value={formData.email} name='email' onChange={handleChange} placeholder="Email..."/></label>

                    <input type="button" value="Update" onClick={handleClick} className="bg-red-800 w-full block py-[.6rem] px-[.7rem] font-extrabold hover:bg-red-700 transition duration-300 ease-in-out text-white tracking-wide rounded-md mb-4"/>

                    <input type="button" value="Cancel" onClick={handleClick} className="bg-red-800 w-full block py-[.6rem] px-[.7rem] font-extrabold hover:bg-red-700 transition duration-300 ease-in-out text-white tracking-wide rounded-md"/>

                    </form>
                </div>
             </section>
        </div>
        </div>
    )
    } else{
        return(
            <h2 className="min-h-dvh text-center pt-5 text-[1.3rem] text-red-700 animate-pulse">Records is not available for this {index} index</h2>
        )
    }        
   
}
export default EditTask
