import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";

import { ChangeEventHandler, ReactElement } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  label: string;
  formRegistartion?: UseFormRegisterReturn;
  inputType: string;
  isError?: boolean;
  errorMessage?: string;

  minRows?: number;
  endAdornment?: ReactElement;
  startAdornment?: ReactElement;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value?: any;
  name?: string;
  defaultValue?: any;
};

export const InputField = (props: Props) => {
  const { label, formRegistartion, inputType, isError, errorMessage, minRows } =
    props;

  return (
    <FormControl fullWidth={true} error={isError} variant="outlined">
      <InputLabel>{label}</InputLabel>
      <OutlinedInput
        type={inputType}
        {...props}
        label={label}
        inputProps={formRegistartion}
        multiline={minRows ? true : false}
        minRows={minRows}
      />
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
};
