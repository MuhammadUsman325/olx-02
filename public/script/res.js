

/* Registration Process */



const firebaseDb = firebase.database();




// signup function
function signUp() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pwd').value;

    console.log(email, name, pass)

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        swal({
            title: "Warning!",
            text: "Please enter you email address. example@gmail.com",
            icon: "warning",
        });
    }
    if (name === '' || name === " ") {
        swal({
            title: "Warning!",
            text: "Please enter you name.",
            icon: "warning",
        });
    }
    else if (pass.length < 6) {
        swal({
            title: "Warning!",
            text: "Please enter atleast 6 number",
            icon: "warning",
        });
    } else {
       firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then((data) => {
                var objData = {
                    email: email,
                    name: name
                }
                firebaseDb.ref("users/" + data.user.uid +'/').set(objData)
                    .then(() => {
                        swal({
                            title: "Success!",
                            text: "congratulations",
                            icon: "success",
                        });
                        location = 'login.html'
                    })
            })
            .catch((error) => {
                // Handle Errors here.
                swal({
                    title: "Warning!",
                    text: error.message,
                    icon: "warning",
                });
                // ...
            });
    }

}

// signup function


// login function

function logIn() {
    var email = document.getElementById('userEmail').value;
    var password = document.getElementById('userPassword').value;

    console.log(email)
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById('error').style.display = 'none'
            console.log("success")
            location = 'home.html'
        })
        .catch((error) => {
            // Handle Errors here.
            document.getElementById('error').innerText = error.message
            // ...
        });
}

function logOut() {
    firebase.auth().signOut()
        .then(function (resolve) {
           
            console.log("Succesfully Signed-Out", resolve);
            location = 'index.html'
        })
        .catch(function (err) {
            console.log("Error", err);
        })
}

/* Registration End */



