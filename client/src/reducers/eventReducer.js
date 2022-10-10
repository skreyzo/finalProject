const initState = {
    event: [],
  };
  
  export const eventReducer = (state = initState, action) => {
    switch (action.type) {
      case "INIT_EVENT":
        const eventList = action.payload.dataEvent;        
        //console.log('action.payload.dataEvent', action.payload)        
        return { ...state, event: eventList };
  
      case "DELETE_EVENT":
        const filteredEvent = state.event.filter(
          (event) => event.id !== action.payload.id
        );         
        return { ...state, event: filteredEvent };
  
      case "ADD_EVENT":
        const { eventValue } = action.payload;  
        return {
          ...state,
          event: [
            ...state.event,
            { ...eventValue },
          ],
        };
  
      default:
        return state;
    }
  }; 
  