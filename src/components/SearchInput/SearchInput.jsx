import { nanoid } from "nanoid";
import css from "./SearchInput.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updFilter } from "redux/filterSlice";
import { selectFilterVal } from "redux/selectors";

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
            <label
                className={css.search_title}
                htmlFor={finderInputId}>
                Find contacts by name
            </label>
            <input
                className={css.search_input}
                type="text"
                name="filter"
                id={finderInputId}
                value={filter}
                onChange={handleSetState}
                required
            />
        </>
    )
}