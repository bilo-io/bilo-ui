//#region Remote Data
/**
 * initialises state for remote data in the form { data: obj_or_array, isInit: true }
 *
 * @param {*} obj
 * @returns { data: obj, isInit: true }
 */
export const initState = (obj) => {
    return Array.isArray(obj)
        ? {
            data: [],
            isInit: true
        }
        : {
            data: {},
            isInit: true
        }
}
/**
 * updates the remote data state, with response, error, and fetching states
 *
 * @param {*} payload
 * @returns { data: obj_or_array, isLoading | isSuccess | isError }
 */
export const setState = (payload) => {
    if (!payload) {
        return {
            data: [],
            isLoading: true
        }
    } else if (payload.data) {
        return {
            data: payload.data,
            isSuccess: true
        }
    } else if (payload.error) {
        return {
            data: payload.error,
            isError: true
        }
    } else {
        return {
            data: payload,
            isLoading: true
        }
    }
}
//#endregion

//#region REST Resource manipulation
/**
 *
 *
 * @param {*} state
 * @param {*} id
 * @returns
 */
export const accessMember = (state, id) => {
    // const keys = Object.keys(searchObj)
    // state.find( e => keys.forEach( key => searchObj.key === searchObj.key))
    return state.find( member => member.id === id)
}

/**
 * creates a new member of a collection in redux
 *
 * @param {*} state
 * @param {*} payload
 * @returns
 */
export const createMember = (state, payload) => {
    const memberIndex = state.findIndex(item => item.id === payload.meta.id)
    return [
        ...state,
        payload
    ]
}
/**
 * updates a member of a collection in redux
 *
 * @param {*} state
 * @param {*} payload
 * @returns
 */
export const updateMember = (state, payload) => {
    const memberIndex = state.findIndex(item => item.id === payload.meta.id)
    return [
        ...state.slice(0, memberIndex),
        payload,
        ...state.slice(memberIndex + 1)
    ]
}
/**
 * deletes a member of a collection in redux
 *
 * @param {*} state
 * @param {*} payload
 * @returns
 */
export const deleteMember = (state, payload) => {
    return memberIndex = state.filter(item => item.id !== payload.meta.id)
}
//#endregion