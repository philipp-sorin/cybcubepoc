import {action} from "mobx";

export function Action<C>(target: C, key: string | symbol, baseDescriptor?: PropertyDescriptor) {
    return action(target, key, baseDescriptor);
}