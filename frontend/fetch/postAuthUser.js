export async function postAuthUser(authUser){
    return await fetch('http://localhost:3000/users', {
        method: "POST",
        body: JSON.stringify(authUser),
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
    }).then(res=>res.json())
}