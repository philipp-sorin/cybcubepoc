import React, {ChangeEvent, PureComponent} from "react";
import {TextDisplay} from "../../Component/Display/Text/TextDisplay";
import {Margin} from "../../Component/Display/Container/Margin";
import {Card} from "../../Component/Display/Container/Card";
import {TextInput} from "../../Component/Input/TextInput";
import {Image} from "../../Component/Display/Image/Image";


interface CatItemViewProps {
    name: string;
    src: string;
    isCreatedByUser: boolean;
    onNameChange: (name: string) => void;
}


export class CatItemView extends PureComponent<CatItemViewProps> {
    private get imageSrc(): string {
        return this.props.src
    }

    public render() {
        return (
            <Card>
                <TextInput onChange={this.handleNameChange} value={this.props.name}/>
                <Margin all>
                    <Image src={this.imageSrc}/>
                </Margin>
                <TextDisplay>
                    {this.props.isCreatedByUser ? 'This cat had been created by user' : 'This cat had been generated'}
                </TextDisplay>
            </Card>
        )
    }

    private handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.onNameChange(e.target.value);
    };
}