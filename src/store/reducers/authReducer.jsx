const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGGIN_ERROR": {
      // console.log("login error");
      return {
        ...state,
        authError: "Login failed"
      };
    }
    case "LOGGIN_SUCCESS": {
      //   console.log("login success");

      return {
        ...state,
        authError: null
      };
    }
    case "SIGNOUT_SUCCESS": {
      //  console.log("in auth reducersign out");
      return state;
    }

    case "SIGNUP_SUCCESS": {
      return {
        ...state,
        authError: null
      };
    }

    case "SIGNUP_ERROR": {
      return {
        ...state,
        authError: action.err.message
      };
    }

    default:
      return state;
  }
};

export default authReducer;
