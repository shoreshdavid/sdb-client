import * as types from '../../store/types';

const initialState = {
  allEvents: {},
  selectedEventId: null,
};

export const eventsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.LOAD_EVENTS:
      return {
        ...state,
        allEvents: action.payload.entities.events,
      };

    case types.SELECT_EVENT:
      return {
        ...state,
        selectedEventId: action.payload,
      };

    default:
      return state;
  }
};
