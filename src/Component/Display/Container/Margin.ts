import styled from "styled-components";

export interface MarginProps {
    top?: boolean;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
    all?: boolean;
    xAxis?: boolean;
    yAxis?: boolean;
}

export const Margin = styled.div<MarginProps>`
    margin-top: ${props => props.top || props.all || props.yAxis ? "20px" : ""};
    margin-bottom: ${props => props.bottom || props.all || props.yAxis ? "20px" : ""};
    margin-left: ${props => props.left || props.all || props.xAxis ? "20px" : ""};
    margin-right: ${props => props.right || props.all || props.xAxis ? "20px" : ""};
`;
