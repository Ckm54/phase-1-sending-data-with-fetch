// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poddle",
// }

// const configurationObject = {
//     // method: 'POST',
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//     },
//     body: JSON.stringify(formData)
// }

// fetch(" http://localhost:3000/dogs", configurationObject)
// .then(function(respunse){
//     return respunse.json();
// })
// .then(function(object){
//     console.log(object)
// })
// .catch(function(err){
//     alert("Bad things! Ragnarok!");
//     console.log(err.message)
// })

function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(response => response.json())
    .then(userData => {
        const id = userData.id
        document.querySelector("body").innerHTML = `
            ${id}
        `
    })
    .catch(function(error){
       document.querySelector("body").innerHTML = `
            ${error.message}
       `
    })
}


