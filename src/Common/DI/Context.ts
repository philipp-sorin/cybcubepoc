import {Container} from "inversify";
import getDecorators from "inversify-inject-decorators";

export class Context extends Container {
    public static readonly INSTANCE = new Container();
    public static readonly lazyInject = getDecorators(Context.INSTANCE).lazyInject;
}