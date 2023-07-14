import React, { useEffect } from "react";
import css from "./ContactsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, fetchContacts } from "redux/operations";
import { selectContactsArr, selectVisibleContacts } from "redux/selectors";

export const ContactsList = () => {
    
    const dispatch = useDispatch();

    const { isLoading, error } = useSelector(selectContactsArr);

    const visibleContacts = useSelector(selectVisibleContacts);

    const handleDeleteContact = (idValue) => dispatch(deleteContact(idValue));

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    
    return (
        <>
            <ul>
                {isLoading && <p>Loading tasks...</p>}
                {error && <p>{error}</p>}
                {visibleContacts.map((contact) => (
                    <li
                        className={css.list_item}
                        key={contact.id}>
                        <p>
                            {contact.name}: <span>{contact.phone}</span>
                        </p>
                        <button
                            className={css.deleteBtn}
                            onClick={() => handleDeleteContact(contact.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};