"use client"
import { useRouter } from "next/navigation"

import { useData } from "../_component/DataProvider";
const Show=()=>{
    const router=useRouter();

    const{state,dispatch}=useData();
    console.log(state);
    
    const handleDelete=(index:number)=>{
        dispatch({type:"delete-task",payload:index})
    }
    const handleEdit=(index:number)=>{ 
        router.push(`./edit/${index}`)
    }
     
    
    return(
        <div className="min-h-dvh bg-white text-black pb-4">

              <section className="max-w-7xl mx-auto">
               <h2 className="text-gray-800 text-2xl sm:text-3xl pt-8 mb-6 font-extrabold border-b-4 border-red-600 w-max tracking-wide">
                Visualize
                </h2>

                <div>
                    
                    <div className="grid grid-cols-3 gap-[2rem] ">

                        {
                            
                            state.students.length===0?(
                                    <p className="text-gray-700 text-lg mt-8 animate-pulse text-center">
                                    🚀 No data yet! Add your records to visualize them here ✨
                                     </p>  
                            ):(


                           state.students.map((row,index)=>{
                           return(
                           <div key={index}  className=" neon-border bg-white border-2 border-gray-200 rounded-xl shadow-md hover:shadow-2xl p-6 transition-shadow duration-300 ease-in-out text-center">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">👤 {row.name}</h3>

                                    <p className="text-gray-600 mb-1"><span className="font-semibold">Age:</span>{row.age}</p>

                                    <p className="text-gray-600 mb-1 mb-4"><span className="font-semibold ">Email:</span>{row.email}</p>

                                    <input type="button" value="X" onClick={()=>handleDelete(index)} className="border-2 py-[.6rem] px-[1.5rem] rounded-[1.4rem] bg-red-400 hover:bg-red-700 text-white shadow-md me-[1.3rem]"/>

                                    <input type="button" value="Edit" onClick={()=>handleEdit(index)} className="border-2 py-[.6rem] px-[1.5rem] rounded-[1.4rem] bg-red-400 hover:bg-red-700 text-white shadow-md "/>
                           </div> 
                           )})

                            )

                        }

                    </div>
                      
                </div>
             </section>
        </div>
    )
}
export default Show;