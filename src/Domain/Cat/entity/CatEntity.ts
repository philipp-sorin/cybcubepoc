import {Observable} from "../../../Common/MobX/Decorator/Observable";

export class CatEntity {

    public readonly id: string;

    @Observable
    public name: string;

    @Observable
    public src: string;

    @Observable
    public isCreateByUser: boolean;

    public constructor(id: string, name: string, description: string, isCreateByUser: boolean = false) {
        this.id = id;
        this.name = name;
        this.src = description;
        this.isCreateByUser = isCreateByUser;
    }
}