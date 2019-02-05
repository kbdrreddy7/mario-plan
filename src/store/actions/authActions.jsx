export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGGIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    // console.log(" in auth actions sign out");

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // firebase to do firebase services ..like register user , authentication
    // firestore to interact with firestore
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(res => {
        // the res contains the user object with id(newly created in firebase)

        //  return firestore.collection('user').add()
        // add method crates a doc with new id // it'll creates id

        // but we want use the same id given by firebase after creating new user object

        return firestore
          .collection("user") // users
          .doc(res.user.uid)
          .set({
            firstName: newUser.fName,
            lastName: newUser.lName,
            initials: newUser.fName[0] + " " + newUser.lName[0]
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
