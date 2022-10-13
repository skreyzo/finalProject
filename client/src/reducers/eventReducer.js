const INIT_EVENTS = "INIT_EVENTS"
const DEL_EVENT = "DEL_EVENT"
const ADD_EVENT = "ADD_EVENT"

const initState = {
    event: [],
  };
  
  export const eventReducer = (state = initState, action) => {
    switch (action.type) {
      case "INIT_EVENTS":
        const eventList = action.payload;                        
        return { ...state, event: eventList };
  
      case "DEL_EVENT":
        //console.log('action.payload.ID', action.payload);
        const filteredEvent = state.event.filter((event) => 
          event.id !== action.payload
        );         
        return { ...state, event: filteredEvent };
  
      case "ADD_EVENT":
        const eventValue = action.payload;  
        //console.log('action.payload.FROM', action.payload);        
        return {
          ...state, event: [...state.event, eventValue ],
        };
  
      default:
        return state;
    }
  }; 
  
  export const initEvents = events => ({type: INIT_EVENTS, payload: events});
  export const delEvent = idevent => ({type: DEL_EVENT, payload: idevent});
  export const addEvent = event => ({type: ADD_EVENT, payload: event});