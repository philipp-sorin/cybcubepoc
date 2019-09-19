import {observable} from "mobx";

export function Observable<C>(target: C, key: string | symbol, baseDescriptor?: PropertyDescriptor) {
    return observable(target, key, baseDescriptor);
}