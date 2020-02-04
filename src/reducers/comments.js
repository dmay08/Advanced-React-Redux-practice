import { SAVE_COMMENT, FETCH_COMMENTS } from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case SAVE_COMMENT:
            return [...state, action.payload]
            // return [...state, action.payload, {}]     // danny 2/4 - this will log a console error from <stateValidator> after going to 'https://jsonschema.net/' and typing in our data structure of state
                // data structure === { [ "comment 1", "comment 2" ], "auth": true }
                    // so if we add the '{}' to the reducer (line 7) we'll get an error message that the 
        case FETCH_COMMENTS:
            const comments = action.payload.data.map(comment => comment.name)
            return [...state, ...comments]
        default:
            return state
    }
}