const url = "http://localhost:54653/api/users";

let newuser = {id: 0, 
    username: "chasjohnson22", 
    password: "password", 
    firstname: "Chas", 
    lastname: "Johnson", 
    email: "chasjohnson22@yahoo.com", 
    isReviewer: true, 
    isAdmin: false}

$().ready(() => {
    
    console.log("jQuery is ready!");

    $.ajax({
        method: "POST",
        url: url,
        data: newuser,
        contentType: 'application/json'
    })
        .done((res) => {
            console.log(res);
        })
        .fail((err) => {
            console.error(err);
        })

    // $.getJSON(url)
    //     .done((users) => {
    //         console.log(users);
    //     })
    //     .fail((err) => {
    //         console.error(err)
    //     })
})