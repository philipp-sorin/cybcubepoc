import React, {PureComponent} from "react";
import {Margin} from "./Margin";
import {Border} from "./Border";
import {FlexContainer} from "./FlexContainer";

interface CardProps {
    className?: string;
}

export class Card extends PureComponent<CardProps> {
    public render() {
        return (
            <Margin all>
                <Border radius={20}>
                    <FlexContainer className={this.props.className} centralize direction="column">
                        {this.props.children}
                    </FlexContainer>
                </Border>
            </Margin>
        );
    }
}