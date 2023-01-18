import * as S from "./style";

export function Styled() {
  return (
    <div>
      <S.Title>
        Hello World
        <span>texto menor</span>
      </S.Title>

      <S.TitleSmall>Menor</S.TitleSmall>
    </div>
  );
}

export default Styled;
