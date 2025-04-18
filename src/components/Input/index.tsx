import React from "react";

import * as S from "./styles";

type InputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  width?: string;
};

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  disabled = false,
  error = false,
  errorMessage,
  width,
}) => {
  return (
    <S.Container width={width}>
      {label && <S.Label>{label}</S.Label>}
      <S.InputField
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        error={error}
      />
      {error && errorMessage && <S.ErrorText>{errorMessage}</S.ErrorText>}
    </S.Container>
  );
};

export default Input;
