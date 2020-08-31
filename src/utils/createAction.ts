const createAction = (
    type: string,
    payload?: unknown
): { type: string; payload: unknown } => {
    return { type, payload }
}

export { createAction }
