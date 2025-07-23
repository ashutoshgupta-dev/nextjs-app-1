
// demo purpose only from page.tsx

"use client";
import { useData } from "@/app/_component/DataProvider";
import react, { useState,useReducer } from "react";
import { useRouter } from "next/navigation";
// type EditTaskParams={
//     params:{index:number}
// }
const EditTask=({index}:{index:number})=>{
// const EditTask=({params}:EditTaskParams)=>{
    // const index=params.index;
    console.log("editTask",index);
    const{state,dispatch}=useData();
    const student=state.students[index]
    console.log(student);
    
    const [formData,setFormData]=useState({name:student?.name||"",age:student?.age,email:student?.email})

    const handleChange=(e: react.ChangeEvent<HTMLInputElement>)=>{
         setFormData({...formData,[e.target.name]:e.target.value});
    }
    const router=useRouter();
    const handleClick=(e:react.MouseEvent<HTMLInputElement>)=>{
         const value=e.currentTarget.value;
         
         if(value==="Update"){
             dispatch({type:"update",payload:formData,index:index});
             router.push("../show")
         }else if(value==="Cancel"){
            //   dispatch({type:"cancel"});
              router.push("../show")
         }
    }

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

                    <input type="button" value="Cancel" onClick={handleClick} className="bg-red-800 w-full block py-[.6rem] px-[.7rem] font-extrabold hover:bg-red-700 transition duration-300 ease-in-out text-white tracking-wide rounded-md"/>
                    <input type="button" value="Update" onClick={handleClick} className="bg-red-800 w-full block py-[.6rem] px-[.7rem] font-extrabold hover:bg-red-700 transition duration-300 ease-in-out text-white tracking-wide rounded-md"/>

                    </form>
                </div>
             </section>
        </div>
        </div>
    )
}
export default EditTask