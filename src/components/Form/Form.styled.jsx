import styled from "@emotion/styled";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
    width: 300px;
    padding: 10px 10px;
    border: 1px solid var(--cornflower);
    border-radius: 4px;
    background-color: var(--light-slate);
`
export const StyledLabel = styled.label`
    font-size: medium;
    font-weight: 700;
`
export const StyledInput = styled.input`
    border: 1px solid var(--navy-blue);
    border-radius: 4px;
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
        border: 1px solid var(--green);
    }
`
export const StyledAddButton = styled.button`
    border: 1px solid var(--green);
    background-color: var(--cornflower);
    border-radius: 4px;
    margin-top: 20px;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
        background-color: var(--green);
        border: 1px solid var(--cornflower);
    }
`