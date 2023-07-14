import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { updFilter } from "redux/filterSlice";
import { selectFilterVal } from "redux/selectors";
import { StyledSearchInputLabel, StyledSerchInput } from "./SearchInput.styled";

export const SearchInput = () => {
    
    const dispatch = useDispatch();

    const filter = useSelector(selectFilterVal);

    const finderInputId = nanoid();

    const handleSetState = (e) => {

        const { value } = e.currentTarget;

        e.preventDefault();
        
        dispatch(updFilter(value));
    }

    return (
        <>
            <StyledSearchInputLabel
                htmlFor={finderInputId}>
                Find contacts by name
            </StyledSearchInputLabel>
            <StyledSerchInput
                type="text"
                name="filter"
                id={finderInputId}
                value={filter}
                onChange={handleSetState}
                placeholder="please enter name to find"
                required
            />
        </>
    )
}