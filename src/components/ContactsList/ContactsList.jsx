import React, { useEffect } from "react";
// import css from "./ContactsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, fetchContacts } from "redux/operations";
import { selectContactsArr, selectVisibleContacts } from "redux/selectors";
import { Loader } from "components/Loader/Loader";
import {
    StyledListOfContacts,
    StyledContactItem,
    StyledDeleteButton
} from "./ContactsList.styled";
import Notiflix from "notiflix";

export const ContactsList = () => {
    
    const dispatch = useDispatch();

    const { isLoading, error } = useSelector(selectContactsArr);

    const visibleContacts = useSelector(selectVisibleContacts);

    const handleDeleteContact = ({id, name}) => {
        dispatch(deleteContact(id));
        Notiflix.Notify.success(`${name} was deleted from your contacts`);
    }

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    
    return (
        <>
            {visibleContacts.length > 0 &&
                <StyledListOfContacts>
                    {isLoading &&
                        <Loader />
                    }
                    {error &&
                        <p>
                            {error}
                        </p>
                    }
                    {visibleContacts.map((contact) => (
                        <StyledContactItem
                            key={contact.id}>
                            <p>
                                {contact.name}:
                                <span>
                                    {contact.phone}
                                </span>
                            </p>
                            <StyledDeleteButton
                                onClick={() => handleDeleteContact(contact)}
                            >
                                Delete
                            </StyledDeleteButton>
                        </StyledContactItem>
                    ))}
                </StyledListOfContacts>
            }
        </>
    );
};