import {Html5QrcodeScanner} from 'html5-qrcode'
import { useEffect, useState } from 'react'

export default function Scan(){
    const [result,setresult]=useState()
   
useEffect(()=>{

    const scanner = new Html5QrcodeScanner('reader',{
        qrbox:{
            width:250,
            height:250,
        },
        fps:5,
    })
    scanner.render(succ,err)
    function succ(rs){
        scanner.clear()
        setresult(rs)
    }
    function err(err){
        console.warn(err)
    }

},[])
        
    return(
        <>
            <h1>scan</h1>
            {result?<a href={result}></a>:<div id='reader'></div>}
            
        </>
    )
}