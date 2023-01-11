// IMPORTANDO COMPONENTE
import FirstComponent from "./components/FirstComponent";

function App() {
  // VARIAVEIS
  const name: string = "Átila";
  const age: number = 25;
  const isWorking: boolean = false;

  // FUNÇÕES

  /*
  const userGreeting = (n: string): string => {
    return `Olá, ${n}`;
  };
  */

  function userGreeting(n: string): string {
    return `Olá, ${n}`;
  }

  return (
    <div className="App">
      <h1>React com TypeScript</h1>

      {/* VARIAVEIS */}
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
        <div>
          <p>Está trabalhando!</p>
        </div>
      )}

      {/* FUNÇÕES */}
      <h3>{userGreeting(name)}</h3>

      {/* COMPONENTE SIMPLES */}
      <FirstComponent />
    </div>
  );
}

export default App;
