'use client'
import { useEffect, useState } from "react"
import { JwtPayload, jwtDecode } from "jwt-decode";
import useCounter from "@/hooks/counter";


const Register = () => {
    const [data, setData] = useState<any>("")
    const [count, increment] = useCounter() // Utilizing useCounter
    useEffect(() => {
        // Perform localStorage action
        setData(localStorage.getItem("storedToken"))

    }, [data])

    if (data) {
        const decoded = jwtDecode<JwtPayload>(data);
        console.log("check decodded: ",decoded);
    }

    const fetchData = async () => {
        const res = await fetch('http://localhost:8081/api/v1/quiz/all', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${data}`
            },
        })
        const dataRes = await res.json();

        console.log("check data res: ", dataRes.DT)
    }

    return (
        <div>
            <h1>TRUNG</h1>

        
            <h2>counter custom hook: {count}</h2>
            <button onClick={increment}> button </button>
            <br></br>
            <button onClick={fetchData} className="p-4 bg-red-300">fetch</button>
        </div>
    )
}

export default Register;