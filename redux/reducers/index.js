import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE,
        GET_POST, GET_POST_SUCCESS, GET_POST_FAILURE,
        SAVE_POST, SAVE_POST_SUCCESS, SAVE_POST_FAILURE,
        UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE,
        DELETE_POST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE } from '../actions'

const INITIAL_STATE = {
    posts: { data: [], error: null, loading: true },
    currentPost: { data: [], error: null, loading: true }
}

export default function Reducer(state=INITIAL_STATE, action)
{
    let error
    switch (action.type) {
        case GET_POSTS:
            return {...state, posts: { data: [], error: null, loading: true }}
        case GET_POST_SUCCESS:
            return {...state, posts: { data: action.payload, error: null, loading: false }}
        case GET_POST_FAILURE:
            error = action.payload.error || { message: action.payload.message }
            return {...state, posts: { data: [], error, loading: false }}
        case GET_POST:
            return {...state, currentPost: { data: [], error: null, loading: true }}
        case GET_POST_SUCCESS:
            return {...state, currentPost: { data: action.payload, error: null, loading: false }}
        case GET_POST_FAILURE:
            error = action.payload.error || { message: action.payload.message }
            return {...state, currentPost: { data: [], error, loading: false }}
        case SAVE_POST:
            return {...state, posts: {...state.posts, loading: true }}
        case SAVE_POST_SUCCESS:
            state.posts.data.push(action.payload.data)
            return {...state, posts: { data: state.posts.data, error: null, loading: false }}
        case SAVE_POST_FAILURE:
            error = action.payload.error || { message: action.payload.message }
            return {...state, posts: {...state.posts, error }}
        case UPDATE_POST:
            return {...state, currentPost: { data: [], error: null, loading: true }}
        case UPDATE_POST_SUCCESS:
            return {...state, currentPost: { data: action.payload, error: null, loading: false }}
        case UPDATE_POST_FAILURE:
            error = action.payload.error || { message: action.payload.message }
            return {...state, currentPost: { data: [], error, loading: false }}
        case DELETE_POST:
            return {...state, posts: {...state.posts, loading: true}}
        case DELETE_POST_SUCCESS:
            return {...state, posts: { data: state.posts.data.filter((el, index) => index != action.payload.index), error: null, loading: false }}
        case DELETE_POST_FAILURE:
            error = action.payload.error || { message: action.payload.message }
            state.posts.data.error = error
            return state
        default:
            return state
    }
}
