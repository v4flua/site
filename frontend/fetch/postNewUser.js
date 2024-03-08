export async function postNewUser(newUser){
    return await fetch('http://localhost:3000/user', {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(newUser) 
    });
}