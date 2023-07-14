import { Form } from "./Form/Form";
import { ContactsList } from "./ContactsList/ContactsList";
import { SearchInput } from "./SearchInput/SearchInput";
import { StyledContainer } from "./App.styled";

export const App = () => {
  
  return (

    <StyledContainer>
      
      <h1>Phonebook</h1>

      <Form />
      
      <h2>Contacts</h2>

      <SearchInput />
      
      <ContactsList />
      
    </StyledContainer>
  );
}
  