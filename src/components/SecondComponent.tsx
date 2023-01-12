interface SecondComponentProps {
  name: string;
}

function SecondComponent(props: SecondComponentProps) {
  return (
    <div>
      <h2>Meu Segundo Componente</h2>
      <p>O nome dele: {props.name}</p>
    </div>
  );
}

export default SecondComponent;
