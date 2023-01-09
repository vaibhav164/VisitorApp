const initialState = {
  userName: '',
  password: '',
};
export const loggedUser = ({state = initialState, action}) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        usename: action.payload.userName,
        password: action.payload.password,
      };
    default:
      return state;
  }
};
