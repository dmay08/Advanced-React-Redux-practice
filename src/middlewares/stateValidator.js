import tv4 from 'tv4' // compares 'stateSchema' to '
import stateSchema from './stateSchema'

export default ({ dispatch, getState }) => (next) => (action) => {
    next(action)

    if (!tv4.validate(getState(), stateSchema)) {
        console.warn('Invalid state schema detected')
    }
}