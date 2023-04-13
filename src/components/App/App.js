import ContactsForm from "../ContactsForm";
import ContactsList from "../ContactsList";

function App() {
  return (
    <main>
      <section className='wrapper container'>
        <ContactsForm />
        <ContactsList />
      </section>
    </main>
  );
}

export default App;
