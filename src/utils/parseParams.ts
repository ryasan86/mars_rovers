export const parseParams = (str: string): string[] => {
    return str.match(/\w+$|(?<=\?)\w+/g)
}
