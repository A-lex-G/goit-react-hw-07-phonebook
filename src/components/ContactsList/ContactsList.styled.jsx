import styled from "@emotion/styled";

export const StyledListOfContacts = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border: 1px solid var(--cornflower);
    border-radius: 4px;
    padding: 5px;
    background-color: var(--light-slate);
`
export const StyledContactItem = styled.li`
    display: flex;
    align-items: center;
    column-gap: 10px;
`
export const StyledDeleteButton = styled.button`
    border: 1px solid var(--navy-blue);
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
        background-color: var(--green);
        border: 1px solid var(--cornflower);
    }
}
`