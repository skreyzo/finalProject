/* const INIT_USEREVENTS = "INIT_USEREVENTS"

const initState = {
    event: [],
  };
  
  export const eventReducer = (state = initState, action) => {
    switch (action.type) {

      case INIT_USEREVENTS:
        const eventUserList = action.payload;                        
        return { ...state, userEvent: eventUserList };
  
      default:
        return state;
    }
  }; 
  
  export const initEvents = events => ({type: INIT_USEREVENTS, payload: events}); */
