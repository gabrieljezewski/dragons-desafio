import React, { forwardRef } from "react";

import Text from "../Text";

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

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      placeholder,
      value,
      onChange,
      type = "text",
      disabled = false,
      error = false,
      errorMessage,
      width,
      ...rest
    },
    ref
  ) => {
    return (
      <S.Container width={width}>
        {label && (
          <Text fontSize="16px" fontWeight="bold">
            {label}
          </Text>
        )}
        <S.InputField
          ref={ref}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          error={error}
          {...rest}
        />
        {error && errorMessage && (
          <S.ContainerError>
            <Text fontSize="14px" color="var(--red-primary)" fontWeight="bold">
              {errorMessage}
            </Text>
          </S.ContainerError>
        )}
      </S.Container>
    );
  }
);

export default Input;
