
// ad post
var adbutton = document.getElementById('fileButton');
//listen for file selection
adbutton.addEventListener('change', function (e) {
    //Get file
    var file = e.target.files[0];

})

function adpost() {
    var adname = document.getElementById('adName');
    var addescription = document.getElementById('adDescription');

    var admodel = document.getElementById('adModel');
    var adyear = document.getElementById('adYear');

    //     .then(() => {
    //         // var snapUrl = snapshot.downloadURL
    //         // console.log(snapUrl);
    //         var storage = firebase.storage();
    //         var pathReference = storage.ref("image/" + file.name).getDownloadURL() .then((url) => {
    //                 console.log(url);
    //                 addobj.imageUrl = url
    //                 firebase.database().ref("hackathon").child("useradd").push(addobj)
    //                     .then(() => {
    //                         console.log('tata is uploaded');
    //                     })
    //             })
    //     })
    // })
    var storageRef = firebase.storage().ref('pic/' + file.name);
    // upload
    var uploadTask = storageRef.put(file)
    uploadTask.getDownloadURL().then((url) => {

    

    var adPost = {
        Name: adname.value,
        Description: addescription.value,
        Model: admodel.value,
        Year: adyear.value


    }
    })
    firebaseDb.ref('/data/').push(adPost)
        .then(() => {
            adname.value = "";
            addescription.value = "";
            admodel.value = "";
            adyear.value = "";
        })
    firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
        var username = snapshot.val().username;
        console.log(username);
        // ...
    });

    
    
}

