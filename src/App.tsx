// IMPORTANDO COMPONENTE
import FirstComponent from "./components/FirstComponent";

// COMPONENTE COM PROPS
import SecondComponent from "./components/SecondComponent";

// COMPONETE COM DESESTRUTURAÇÃO DE PROPS
import Destructuring, { Category } from "./components/Destructuring";

// HOOK useState
import State from "./components/State";

// CONTEXT API
import { createContext } from "react";
import Context from "./components/Context";

// TYPES
type textOrNull = string | null;
type lang = "javascript" | "typescript" | "java";

// CONTEXT API
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // VARIAVEIS
  const name: string = "Marcus";
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

  // TYPES

  const myText: textOrNull = "um texto qualquer";
  let mySecondText: textOrNull = null;

  mySecondText = "um outro texto";

  const testLang: lang = "java";

  // CONTEXT API
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 250,
  };

  return (
    <AppContext.Provider value={contextValue}>
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

        {/* COMPONENTE COM PROPS */}
        <SecondComponent name="Blue" />

        {/* COMPONETE COM DESESTRUTURAÇÃO DE PROPS */}
        <Destructuring
          title="Primeiro post"
          content="Algum conteúdo"
          commentQty={10}
          tags={["TS", "JS"]}
          category={Category.JS}
        />

        <Destructuring
          title="Segundo post"
          content="Mais outro conteúdo"
          commentQty={5}
          tags={["Python", "Java", "PHP", "Ruby"]}
          category={Category.TS}
        />

        {/* HOOK useState */}
        <State />

        {/* TYPES */}
        {myText && <p>A variável "myText" possui um texto</p>}
        {mySecondText && <p>A variável "mySecondText" possui um texto</p>}

        {/* CONTEXT API */}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
