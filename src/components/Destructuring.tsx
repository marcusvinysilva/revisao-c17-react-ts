// ENUM
export enum Category {
  JS = "JavaScript",
  TS = "TypeScript",
  P = "Python",
}

interface DestructuringProps {
  title: string;
  content: string;
  commentQty: number;
  tags: string[];
  category: Category;
}

function Destructuring({
  title,
  content,
  commentQty,
  tags,
  category,
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
      <h4>Categoria: {category}</h4>
    </div>
  );
}

export default Destructuring;
