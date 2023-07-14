import styled from "@emotion/styled";

export const StyledListOfContacts = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border: 1px solid black;
    border-radius: 4px;
    padding: 5px;
    background-color: tomato;
`
export const StyledContactItem = styled.li`
    display: flex;
    align-items: center;
    column-gap: 10px;
`
export const StyledDeleteButton = styled.button`
    border: 1px solid grey;
    border-radius: 4px;
    cursor: pointer;

    :hover {
        background-color: blanchedalmond;
        border: 1px solid whitesmoke;
}
`