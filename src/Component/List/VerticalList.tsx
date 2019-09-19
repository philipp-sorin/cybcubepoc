import React, {PureComponent} from "react";
import {FlexContainer} from "../Display/Container/FlexContainer";

export class VerticalList extends PureComponent {
    public render() {
        return (
            <FlexContainer direction="column">
                {this.props.children}
            </FlexContainer>
        )
    }
}