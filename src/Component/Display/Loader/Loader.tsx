import styled from "styled-components";
import {Block} from "../Container/Block";
import {TextDisplay} from "../Text/TextDisplay";
import React, {Component} from "react";

const LoaderWrapper = styled(Block)`
    position: relative;
`;

const LoaderIcon = styled(TextDisplay)`
    content: "Loading...";
    background-color: rgba(255, 255, 255, 0.7);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

interface LoaderProps {
    loading: boolean;
}


export class Loader extends Component<LoaderProps> {
    public render() {
        return (
            <LoaderWrapper>
                {this.props.loading && <LoaderIcon>Loading....</LoaderIcon>}
                {
                    <Block>
                        {this.props.children}
                    </Block>
                }
            </LoaderWrapper>
        )
    }
}