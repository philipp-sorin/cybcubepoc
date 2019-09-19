import {capitalize, random} from "lodash";
import {Singleton} from "../../Common/DI/Decorator/Singleton";
import {CatEntity} from "./entity/CatEntity";
import {Observable} from "../../Common/MobX/Decorator/Observable";
import {CatService} from "../../Service/Cat/CatService";
import {Inject} from "../../Common/DI/Decorator/Inject";
import {Action} from "../../Common/MobX/Decorator/Action";
import {Debounce} from "../../Common/Lang/Decorator/Debounce";

@Singleton
export class CatStore {

    @Observable
    public cats: Array<CatEntity> = [];

    @Inject
    private catService!: CatService;

    @Action
    public async fetchCat(): Promise<Array<CatEntity>> {
        const cats = await this.catService.generateCats();
        const entities = cats
            .map((it) => new CatEntity(this.generateCatId(), capitalize(it.name), it.src));
        this.cats = entities;
        return entities;
    }

    @Action
    public async updateName(name: string, entity: CatEntity): Promise<CatEntity> {
        entity.name = name;
        this.updateImage(name, entity);
        return entity;
    }

    @Action
    public async createNewCat(catName: string): Promise<CatEntity> {
        const cat = await this.catService.generateOneCat(catName);
        const entity = new CatEntity(this.generateCatId(), cat.name, cat.src, true);
        this.cats.unshift(entity);
        return entity;
    }

    @Action
    @Debounce(300)
    private async updateImage(name: string, entity: CatEntity) {
        entity.src = await this.catService.fetchCatsSources(name);
    }

    private generateCatId(): string {
        return random(Infinity).toString()
    }
}