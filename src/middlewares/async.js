// export default function({ dispatch }) {
//     return function(next) {
//         return function(action) {
            
//         }
//     }
// }


// identical code to above - valid JS for 3 functions
export default ({dispatch}) => next => action => {
    // Check to see if action has a promise on its 'payload' property
    if (!action.payload || !action.payload.then) {
        return next(action) // No payload / promise >>> send it on to next middleware ('bail out' of this middleware chain)
    }
    // If it does, then wait for it to resolve (chain on '.then()') >>> get its data >>> dispatch it
    action.payload.then(function(response) {
        const newAction = { ...action, payload: response } // grab ALL properties in action object
        dispatch(newAction)
    })
    // If it doesn't, then send the action on to the next middleware
}
