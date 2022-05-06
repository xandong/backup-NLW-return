function Button() {
  return <button className="py-2 px-4">Enviar</button>;
}

interface ButtonEditableProps {
  text: string;
}

function ButtonEditable(props: ButtonEditableProps) {
  return (
    <button className="bg-purple-500 text-zinc-100 w-auto py-2 px-6 rounded border-2 hover:bg-purple-600 hover:font-medium transition-colors">
      {props.text}
    </button>
  );
}

function App() {
  return (
    <>
      <h1 className="App">Hello World!</h1>
      <Button />
      <ButtonEditable text="Clique em mim!" />
    </>
  );
}

export default App;
