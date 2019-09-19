import styled from "styled-components";

export interface BorderProps {
    radius?: number;
}

export const Border = styled.div<BorderProps>`
    border: 1px solid black;
    border-radius: ${props => props.radius ? props.radius + "px" : null}
`;