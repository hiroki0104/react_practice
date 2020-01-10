import { READEVENTS } from '../actions'


export default (state = {},  action) => {
    switch (action.type) {
        case READEVENTS:
            return state
        default:
            return state
    }
}