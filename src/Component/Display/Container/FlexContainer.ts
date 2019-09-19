import styled from "styled-components";

interface FlexContainerProps {
    direction: 'row' | 'column';
    centralize?: boolean;
}

export const FlexContainer = styled.div<FlexContainerProps>`
    display: flex;
    flex-direction: ${props => props.direction}
    align-items: center;
    justify-content: ${props => props.centralize ? "center" : null}
`;