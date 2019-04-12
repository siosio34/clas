export type Omit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>;

export type Diff<T, U> = T extends U ? never : T;

export const tuple = <T extends string[]>(...args: T) => args;
