// swap for demo {goes to editTask.tasx}
import EditTask from "./editTask";

const editPage=async({params}:{params:Promise<{index:number}>})=>{
    const{index}=await params;
    console.log("editPage",index);
    
     return <EditTask index={index}/>
}

export default editPage;

