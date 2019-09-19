import * as React from "react";
import {Component} from "react";
import {Observer} from "../../Common/MobX/Decorator/Observer";
import {CatStore} from "../../Domain/Cat/CatStore";
import {Inject} from "../../Common/DI/Decorator/Inject";
import {VerticalList} from "../../Component/List/VerticalList";
import {CatItemView} from "./CatItemView";
import {CatEntity} from "../../Domain/Cat/entity/CatEntity";
import {NewCatView} from "./NewCatView";
import {Loader} from "../../Component/Display/Loader/Loader";


interface CatListViewState {
    loading: boolean;
}

@Observer
export class CatListView extends Component<Object, CatListViewState> {

    public state = {
        loading: false,
    };

    @Inject
    private catStore!: CatStore;

    public componentDidMount(): void {
        this.catStore.fetchCat();
    }

    public render() {
        return (
            <VerticalList>
                <Loader loading={this.state.loading}>
                    <NewCatView
                        onCatCreated={this.handleNewCatCreation}
                    />
                </Loader>
                {this.catStore.cats.map(it => (
                    <CatItemView
                        key={it.id}
                        name={it.name}
                        src={it.src}
                        isCreatedByUser={it.isCreateByUser}
                        onNameChange={this.createEntityNameChangeHandler(it)}
                    />
                ))}
            </VerticalList>
        )
    }

    private createEntityNameChangeHandler(entity: CatEntity) {
        return (name: string) => {
            this.catStore.updateName(name, entity);
        }
    }

    private handleNewCatCreation = (catName: string) => {
        this.setState({loading: true}, async () => {
            await this.catStore.createNewCat(catName);
            this.setState({loading: false});
        });
    }
}