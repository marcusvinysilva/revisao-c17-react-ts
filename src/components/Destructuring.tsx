interface DestructuringProps {
  title: string;
  content: string;
  commentQty: number;
  tags: string[];
}

function Destructuring({
  title,
  content,
  commentQty,
  tags,
}: DestructuringProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentQty}</p>
      <div>
        {tags.map((tag) => (
          <span>#{tag} </span>
        ))}
      </div>
    </div>
  );
}

export default Destructuring;
