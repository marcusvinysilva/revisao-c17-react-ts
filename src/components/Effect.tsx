import { useEffect, useState } from "react";

function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Página Carregada");
    document.title = `Contador: ${count}`;
  });

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Adicionar</button>
    </div>
  );
}

export default Effect;
