import styled from "styled-components";

interface TextDisplayProps {
    bold?: boolean;
}

export const TextDisplay = styled.span<TextDisplayProps>`
    weight: ${props => props.bold ? "bold" : null};
`;