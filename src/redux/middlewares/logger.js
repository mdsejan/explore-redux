const logger = (store) => (next) => (action) => {
    const currentState = store.getState();
    console.log("currentState =>", currentState);
    console.log("Action Dispatched =>", action);

    next(action);

    console.log("Update State =>", store.getState());
};

export default logger;