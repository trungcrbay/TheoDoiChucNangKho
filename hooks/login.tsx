
const useLogin =() => {
    
    const fetchLogin = async (email: string, password: string) => {
        const res = await fetch('http://localhost:8081/api/v1/login', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await res.json();

        console.log("check data:", data.DT)
        setToken(data.DT.access_token);

    }
}