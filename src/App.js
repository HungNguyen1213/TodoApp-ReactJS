import { StoreProvider } from "./store";
import Form from "./components/Form";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <h1>Hung's Todo List</h1>
        <Form />
        <ListTodo />
      </div>
    </StoreProvider>
  );
}

export default App;
