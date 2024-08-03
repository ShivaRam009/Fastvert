import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function AdminPanel() {
    const [h1Text, seth1Text]=useState("");
    const [newh1, setNewh1]=useState("");

    useEffect(()=>{
        axios.get("http://localhost:5000/geth1").then(res=>{
            seth1Text(res.data);
        });
    },[]);

    const handleSubmit=(e)=>{
        e.preventDefault(); 
        axios.post("http://localhost:5000/posth1", {text:newh1}).then(res=>{
            seth1Text(res.data);
            setNewh1('');
        });
    };






  return (
    <>
        <div>{h1Text}</div>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={newh1}
            onChange={(e)=>setNewh1(e.target.value)}
            ></input>
            <button type="submit">Update H1</button>
        </form>
    </>
    

  )
}
