import * as types from '../../store/types';

const initialState = {
  allSermons: {},
  allSermonIds: [],
  selectedSermonId: null,
};

export const sermonsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.LOAD_SERMONS:
      return {
        ...state,
        allSermons: action.payload.entities.sermons,
        allSermonIds: action.payload.result,
      };

    case types.SELECT_SERMON:
      return {
        ...state,
        selectedSermonId: action.payload,
      };

    default:
      return state;
  }
};

export const getSermonsByCategory = (allSermons: any, category: string) => {
  return Object.values(allSermons)
    .filter((node: any) => node.category === category)
    .sort((a: any, b: any) => (a.order > b.order) as any);
};

export const getSermonBySlug = (allSermons: any, slug: string) => {
  return Object.values(allSermons).find((node: any) => node.slug === slug);
};
