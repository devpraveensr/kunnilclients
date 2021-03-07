import appGlobalState from '../../appconfig';

const settingsReducer = (state = {...appGlobalState.settings}, action) => {
    if(action.type === 'HAS_TOKEN'){
        if(action.payload) {
            return {
                ...state,
                userData: action.payload,
                api: {
                    ...state.api,
                    apiRequestHeaders: {
                        ...state.api.apiRequestHeaders,
                        headers: {
                            ...state.api.apiRequestHeaders.headers,
                            'Authorization' : `${action.payload.token_type} ${action.payload.token}`,
                            'Accept': 'application/json',
                        }
                    }
                }
            }
        } 
       
    }

    if(action.type === 'LOGIN_USER'){
        // console.log(action.payload)
        return {
            ...state,
            userData: action.payload,
            api: {
                ...state.api,
                apiRequestHeaders: {
                    ...state.api.apiRequestHeaders,
                    headers: {
                        ...state.api.apiRequestHeaders.headers,
                        'Authorization' : `${action.payload.token_type} ${action.payload.token}`,
                        'Accept': 'application/json',
                    }
                }
            }
        }
    }

    return state;
}

export default settingsReducer;