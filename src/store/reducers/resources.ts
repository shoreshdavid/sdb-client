import * as types from '../../store/types';

const initialState = {
  allResources: {},
  allResourceIds: [],
  selectedResourceId: null,
};

export const resourcesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.LOAD_RESOURCES:
      return {
        ...state,
        allResources: action.payload.entities.resources,
        allResourceIds: action.payload.result,
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

export const getResourceBySlug = (allResources: any, slug: string) => {
  return Object.values(allResources).find((node: any) => node.slug === slug);
};
