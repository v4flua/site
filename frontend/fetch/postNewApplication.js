export async function postNewApplication(newApplication){
    return await fetch('http://localhost:3000/application', {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(newApplication),
    });
};