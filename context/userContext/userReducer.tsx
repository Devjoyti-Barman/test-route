type Actions = {
  type: string;
  user: any;
};

export const userReducer = (state: any, action: Actions) => {
  switch (action.type) {
    case "ADD_USER":
      return action.user;
    default:
      return state;
  }
};
