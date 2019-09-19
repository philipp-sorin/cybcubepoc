import React, {ChangeEvent, Component, PureComponent} from "react";
import {Card} from "../../Component/Display/Container/Card";
import {TextDisplay} from "../../Component/Display/Text/TextDisplay";
import {TextInput} from "../../Component/Input/TextInput";
import {Submit} from "../../Component/Button/Submit";
import {FlexContainer} from "../../Component/Display/Container/FlexContainer";
import styled from "styled-components";
import {Margin} from "../../Component/Display/Container/Margin";

interface NewCatViewProps {
    onCatCreated: (name: string) => void;
}

interface NewCatViewState {
    name: string;
}

const WideCard = styled(Card)`
    width: 600px;
    height: 150px;
`;

export class NewCatView extends PureComponent<NewCatViewProps, NewCatViewState> {

    public state = {
        name: "",
    };

    public render() {
        return (
            <WideCard>
                <TextDisplay bold>
                    Add new cat
                </TextDisplay>
                <Margin top>
                    <FlexContainer direction="column">
                        <TextInput
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            placeholder="Enter name"
                        />
                        <Submit onClick={this.handleButtonClick}>
                            Create new
                        </Submit>
                    </FlexContainer>
                </Margin>
            </WideCard>
        )
    }

    private handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: e.target.value
        })
    };

    private handleButtonClick = () => {
        this.props.onCatCreated(this.state.name);
        this.setState({name: ''})
    }
}