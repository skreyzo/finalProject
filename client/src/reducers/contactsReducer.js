const ADD_CONTACTS = "ADD_CONTACTS"
const DEF_CONTACTS = "DEF_CONTACTS"

const initialState = {
  contacts: {},
}

export default function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case DEF_CONTACTS:      
      return {         
        ...state, contacts: action.payload
      };    
    
    case ADD_CONTACTS:      
      return {         
        ...state, contacts: action.payload
      };    
    default:
      return state;
  }
}

export const defContacts = contacts => ({type: DEF_CONTACTS, payload: contacts});
export const newContacts = newcontacts => ({type: ADD_CONTACTS, payload: newcontacts});

