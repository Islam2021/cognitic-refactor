

// TODO: Replace the following with your app's Firebase project configuration
// TODO: And don't forget to publish your facebook app too, it will not work in production. 

var firebaseConfig = {
    apiKey: "AIzaSyAd1cKnJOv-r0JMwFLXSm_F6kcGDpUL7mQ",
    authDomain: "cognitic-login-system.firebaseapp.com",
    projectId: "cognitic-login-system",
    storageBucket: "cognitic-login-system.appspot.com",
    messagingSenderId: "342740459685",
    appId: "1:342740459685:web:bc0b1a584cb0b66c692d4c"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function login_with_facebook(evt) {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(async function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user.email, user.displayName, user.uid, user.emailVerified, user.phoneNumber);

        let params = {
            uid: user.uid,
            email: user.email,
            name: user.displayName,
            status: user.emailVerified,
            phone: user.phoneNumber,
            type: "facebook"
        }
        submit_request(params, "social-login");

    }).catch(handleError);

}
function login_with_google(evt) {
    var provider = new firebase.auth.GoogleAuthProvider();

    // evt.preventDefault();
    firebase.auth().signInWithPopup(provider).then(async function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user.email, user.displayName, user.uid, user.emailVerified, user.phoneNumber);

        let params = {
            uid: user.uid,
            email: user.email,
            name: user.displayName,
            status: user.emailVerified,
            phone: user.phoneNumber,
            type: "google"
        }
        submit_request(params, "social-login");
    }).catch(handleError);
}


function handleError(error) {
    console.log(error);
    window.alert("Sorry! We Faced some error");
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
}