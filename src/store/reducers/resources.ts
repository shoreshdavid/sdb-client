import * as types from '../../store/types';

const initialState = {
  allResources: {},
  selectedResourceId: null,
};

export const resourcesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.LOAD_RESOURCES:
      return {
        ...state,
        allResources: action.payload.entities.resources,
      };

    case types.LOAD_RESOURCE:
      return {
        ...state,
        allResources: action.payload.entities.resources,
      };

    case types.SELECT_RESOURCE:
      return {
        ...state,
        selectedResourceId: action.payload,
      };

    default:
      return state;
  }
};

type Type = 'jewish' | 'article';

export const getResourcesByType = (allResources: any, type: Type) => {
  return Object.values(allResources)
    .filter((node: any) => node.resourceType === type)
    .sort((a: any, b: any) => (a.order > b.order) as any);
};

export const searchResources = (allResources: any, query: string) => {
  return Object.values(allResources)
    .filter((node: any) => node.title === query)
    .sort((a: any, b: any) => (a.order > b.order) as any);
};
