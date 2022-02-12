const initialState = {
  persons: [
    {
      id: 1,
      name: 'Yamileth',
      email: 'yams@gmail.com',
      number: '123456',
    },
    {
      id: 2,
      name: 'Tiel',
      email: 'tiel@gmail.com',
      number: '12121',
    },
  ],

  editPerson: null,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        persons: [...state.persons, action.payload],
      };

    case 'GET_EDIT':
      return {
        ...state,
        editPerson: action.payload,
      };

    case 'UPDATE_PERSON':
      return {
        ...state,
        editPerson: null,
        persons: state.persons.map((person) =>
          person.id === action.payload.id ? action.payload : person
        ),
      };

    case 'DELETE':
      return {
        ...state,
        persons: state.persons.filter((person) => person !== action.payload),
      };

    default:
      return state;
  }
};

export default contactReducer;
