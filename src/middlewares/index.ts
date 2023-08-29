export const logger = (store) => (next) => (action) => {
    next(action);
}

export const featuring = (store) => (next) => (actionInfo) => {
    const featuring = [{ name: 'eddie' }, ...actionInfo.action.payload];
    const updatedActionInfo = {
        ...actionInfo,
        action: { ...actionInfo.action, payload: featuring },
    };
    next(updatedActionInfo);
}