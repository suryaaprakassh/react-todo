import React from 'react'
import {getDocs,collection} from 'firebase/firestore'
import {db} from '../config/firebase'
import { useState } from 'react'
export default function Todos( ) {
    const tastRef=collection(db,"tasks")
    const [tasks,setTasks]=useState(null)
    const getPost=async ()=>{
        const data= await getDocs(tastRef)
        setTasks(data.docs.map((doc)=>({id:doc.id,task:doc.data().task})))
    }
    getPost()
    return(
        <div className='my-5 flex-row justify-center text-lg font-medium'>
            {
                tasks.map(task=>(<h2 key={task.id}>{task.task}</h2>))
            }
        </div>
    )
}