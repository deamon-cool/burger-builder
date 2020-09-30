export const updateObject = (oldObj, updProp) => {
    return {
        ...oldObj,
        ...updProp,
    };
};