import React, { forwardRef } from "react";

import Text from "../Text";

import * as S from "./styles";

type TextareaProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  width?: string;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      placeholder,
      value,
      onChange,
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
          <S.ContainerLabel>
            <Text fontSize="16px" color="var(--dark-gray)" fontWeight="bold">
              {label}
            </Text>
          </S.ContainerLabel>
        )}
        <S.TextAreaField
          ref={ref}
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

export default Textarea;
