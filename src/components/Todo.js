import React from 'react'
import {getDocs,collection,deleteDoc,doc} from 'firebase/firestore'
import {db} from '../config/firebase'
import { useState ,useEffect} from 'react'
export default function Todos( ) {
    const tastRef=collection(db,"tasks")
    const [tasks,setTasks]=useState(null)
    useEffect(()=>{
        const getPost=async ()=>{
        const data= await getDocs(tastRef)
        setTasks(data.docs.map((doc)=>({id:doc.id,task:doc.data().task})))
    }
        getPost();
    },[]);
    return(
        <div className='my-5 flex-row justify-center text-lg font-medium'>
            {
                tasks && tasks.map(task=>(<div key={task.id} className='flex items-end'>
                    <h2  className="inline-block">{task.task}</h2>
                    <button className='w-10 h-6 bg-cyan-500 text-white rounded-lg text-center text-sm' onClick={async ()=>{
                        
                       setTasks(tasks.filter(current=>current!==task)) 
                       await deleteDoc(doc(db,"tasks",task.id))

                    }}>del</button>
                </div>))
            }
        </div>
    )
}