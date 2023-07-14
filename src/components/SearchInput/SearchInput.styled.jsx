import styled from "@emotion/styled";

export const StyledSearchInputLabel = styled.label`
    display: flex;
    margin-bottom: 5px;
    color: tomato;
`
export const StyledSerchInput = styled.input`
    border: 1px solid var(--navy-blue);
    border-radius: 4px;
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
        border: 1px solid var(--green);
    }
`