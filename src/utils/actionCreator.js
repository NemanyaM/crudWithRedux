export const makeActionCreator = (type, ...argNames) => (...args) => {
    let action = {type}; // action =  { type: type } e.g. { type: REFRESH_TICKET }
    argNames.forEach((argName, index) => {
        action[argName] = args[index]; // for each argName assign arg value from (...args) e.g. action['ticketId'] = id;
    });
    return action;
};