import {Singleton} from "../../Common/DI/Decorator/Singleton";
import {CatModel} from "./model/CatModel";
import {isEmpty, random, range} from "lodash";
import {Rest} from "../../Common/Rest/Rest";
import {Inject} from "../../Common/DI/Decorator/Inject";

@Singleton
export class CatService {

    @Inject
    private rest!: Rest;

    private names: ReadonlyArray<string> = [
        "Oscar",
        "Max",
        "Tiger",
        "Sam",
        "Misty",
        "Simba",
        "Coco",
        "Chloe",
        "Lucy",
        "Missy",
        "Molly",
        "Tigger",
        "Smokey",
        "Milo",
        "Cleo",
        "Sooty",
        "Monty",
        "Puss",
        "Kitty",
        "Felix",
        "Bella",
        "Jack",
        "Lucky",
        "Casper",
        "Charlie",
    ];

    public async generateCats(): Promise<Array<CatModel>> {
        const catsPromises = range(random(1, 20))
            .map(() => this.generateOneCat(this.getRandomName()));
        return Promise.all(catsPromises);
    }

    public async generateOneCat(catName: string): Promise<CatModel> {
        return new CatModel(catName, await this.fetchCatsSources(catName));
    }

    public async fetchCatsSources(name: string): Promise<string> {
        return this.rest.fetchAsBase64(this.getCatUrl(name));
    }

    public getCatUrl(name: string) {
        if (isEmpty(name)) {
            return "https://cataas.com/cat"
        }

        return `https://cataas.com/cat/says/${name}`
    }

    private getRandomName() {
        const min = 0;
        const max = this.names.length - 1;
        return this.names[random(min, max)];
    }

}
