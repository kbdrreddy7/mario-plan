const initState = {
  projects: [
    {
      id: 0,
      title: "help me find patch",
      content: " some content from stroe "
    },
    {
      id: 1,
      title: "Title 2 me find patch",
      content: " some content from stroe "
    },
    {
      id: 2,
      title: "Title 3 me find patch",
      content: " some content from stroe "
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      //  console.log("created project ", action.project);
      return state;
    case "ADD_PROJECT_ERR":
      //  console.log("created project err ", action.err);
      return state;

    default:
      return state;
  }
};

export default projectReducer;
