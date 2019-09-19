import {IReactComponent, observer} from "mobx-react";

export function Observer<T extends IReactComponent>(Target: T) {
    return observer(Target);
}