import styled from "@emotion/styled";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
    width: 300px;
    padding: 10px 10px;
    border: 1px solid black;
    border-radius: 4px;
    background-color: tomato;
`
export const StyledLabel = styled.label`
    font-size: medium;
    font-weight: 700;
`
export const StyledInput = styled.input`
    border: 1px solid grey;
    border-radius: 4px;
`
export const StyledAddButton = styled.button`
    border: 1px solid grey;
    border-radius: 4px;
    margin-top: 20px;
    cursor: pointer;

    :hover {
        background-color: blanchedalmond;
        border: 1px solid whitesmoke;
    }
`