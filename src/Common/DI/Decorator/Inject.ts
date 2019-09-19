import {Context} from "../Context";

export function Inject<C>(target: any, key: any): any {
    Context.lazyInject(Reflect.getMetadata("design:type", target, key))(target, key);
}