export interface Class<T> {
    new(...args: Array<any>): T
}