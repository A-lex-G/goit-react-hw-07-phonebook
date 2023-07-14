import { createSelector } from "@reduxjs/toolkit";

export const selectContactsArr = state => state.contacts;

export const selectFilterVal = state => state.filter;

export const selectVisibleContacts = createSelector(
    [selectContactsArr, selectFilterVal],
    ({items}, filter) => {
        if (items.length > 0) {

            switch (true) {
                case filter !== "":
                    return items.filter(contact =>
                        contact.name.toLowerCase().includes(filter.toLowerCase())
                    );
                default:
                    return items;
            }
        } else {
            return [];
        }
    }
);