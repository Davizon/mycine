/* eslint-disable no-var */
/* eslint-disable no-fallthrough */
const reducer = (state, action) => {

  switch (action.type) {
    case 'SET_FAVORITE':
      // eslint-disable-next-line vars-on-top
      var existe = false;
      state.myList.forEach((element) => {
        if (element.id === action.payload.id) {
          existe = true;
          alert('Este elemento esta agregado');
        }
      });
      if (!existe) {
        return {
          ...state,
          myList: [...state.myList, action.payload],
        };
      }
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }

};

export default reducer;
