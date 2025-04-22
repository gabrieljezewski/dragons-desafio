import React, { forwardRef, useState } from "react";

import Text from "../Text";

import * as S from "./styles";
import { HideEyeIcon } from "../../assets/icons/hideEyeIcon";
import { EyeIcon } from "../../assets/icons/eyeIcon";

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
    const [showPassword, setShowPassword] = useState(false);

    const isPasswordType = type === "password";

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <S.Container width={width}>
        {label && (
          <S.ContainerLabel>
            <Text fontSize="16px" color="var(--dark-gray)" fontWeight="bold">
              {label}
            </Text>
          </S.ContainerLabel>
        )}
        <S.InputWrapper>
          <S.InputField
            ref={ref}
            type={isPasswordType && showPassword ? "text" : type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            error={error}
            {...rest}
          />
          {isPasswordType && (
            <S.IconButton type="button" onClick={togglePasswordVisibility}>
              {showPassword ? <HideEyeIcon /> : <EyeIcon />}
            </S.IconButton>
          )}
        </S.InputWrapper>
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
