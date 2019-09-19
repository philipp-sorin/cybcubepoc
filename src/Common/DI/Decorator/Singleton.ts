import {isString} from "lodash";
import {Context} from "../Context";
import {Class} from "../../Type/Class";
import {injectable} from "inversify";

export function Singleton(qualifierOrClazz: string | Class<any>): any {
    if (!isString(qualifierOrClazz)) {
        Context.INSTANCE.bind(injectable()(qualifierOrClazz)).toSelf().inSingletonScope();
        return;
    }
    return (clazz: Class<any>) => {
        Context.INSTANCE.bind(qualifierOrClazz).to(injectable()(clazz)).inSingletonScope();
    }
}