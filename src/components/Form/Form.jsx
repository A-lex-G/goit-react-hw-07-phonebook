// import css from "./Form.module.css";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from '../../redux/operations';
import { selectContactsArr } from "redux/selectors";
import {
    StyledForm,
    StyledLabel,
    StyledInput,
    StyledAddButton
} from "./Form.styled";
import Notiflix from "notiflix";

export const Form = () => {
    
    const dispatch = useDispatch();

    const {items} = useSelector(selectContactsArr);

    const nameInputId = nanoid();

    const numberInputId = nanoid();

    const handleSubmitForm = (e) => {

        e.preventDefault();

        const form = e.target;
        
        const { value } = form.elements.name;

        if ((items.map(contact => contact.name)).includes(value)) {
            Notiflix.Notify.warning(`${value} is already in contacts`);
            return
        };

        const contactData = {
            [form.elements.name.name]: value,
            [form.elements.phone.name]: form.elements.phone.value,
        }
        
        dispatch(addContact(contactData));

        Notiflix.Notify.success(`${value} was added to your contacts`);

        form.reset();
    };

    return (
        <>
            <StyledForm
                onSubmit={handleSubmitForm}
                action="">
                <StyledLabel
                    htmlFor={nameInputId}>
                    Name
                </StyledLabel>
                <StyledInput
                    name="name"
                    id={nameInputId}
                    type="text"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    placeholder="please enter name"
                    required
                />
                <StyledLabel
                    htmlFor={numberInputId}>
                    Number
                </StyledLabel>
                <StyledInput
                    name="phone"
                    id={numberInputId}
                    type="tel"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    placeholder="please enter phone number"
                    required
                />
                <StyledAddButton
                    type="submit">
                    Add contact
                </StyledAddButton>
            </StyledForm>
        </>
    );
}