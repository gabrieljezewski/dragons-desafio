import * as S from "./styles";

type LoadingProps = {
  variant?: "default" | "secondary";
};

const Loading = ({ variant = "default" }: LoadingProps) => (
  <S.LoadingContainer variant={variant}>
    <S.Spinner variant={variant} />
  </S.LoadingContainer>
);

export default Loading;
