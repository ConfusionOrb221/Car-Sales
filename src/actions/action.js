export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const ADD_FEATURE = 'ADDFEATURE';

export function removeFeature(feature){
    return{
        type: REMOVE_FEATURE,
        payload: feature
    };
}

export function addFeature(feature){
    console.log('added');
    return{
        type: ADD_FEATURE,
        payload: feature
    };
}