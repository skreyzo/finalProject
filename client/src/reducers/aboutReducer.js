const ADD_PERSONS = "ADD_PERSONS"
const DEL_PERSON = "DEL_PERSON"
const ADD_NEW_PERSON = "ADD_NEW_PERSON"

const initialState = {
  team: [],
}

export default function aboutReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSONS:      
      return {
        ...state, team: action.payload
      };

    case DEL_PERSON:
      const newRoster = state.team.filter(item => {
        if (Number(item.id) !== action.payload) {          
          return item;
        }
      })
      return {
        ...state, team: newRoster,
      };

      case ADD_NEW_PERSON:
      return {
        ...state, team: [...state.team, action.payload]
      };
    default:
      return state;
  }
}

export const addPersons = ourTeam => ({type: ADD_PERSONS, payload: ourTeam});
export const delPerson = idPerson => ({type: DEL_PERSON, payload: idPerson});
export const addNewPerson = person => ({type: ADD_NEW_PERSON, payload: person});