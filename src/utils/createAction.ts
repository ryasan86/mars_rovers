const createAction = (type: string, payload = {}) => {
    return { type, payload }
}

export { createAction }
