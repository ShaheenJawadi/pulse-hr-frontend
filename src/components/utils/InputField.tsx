import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  InputBaseProps,
} from "@mui/material";
 
import { UseFormRegisterReturn } from "react-hook-form";

type Props = InputBaseProps & {
  label: string;
  formRegistartion?: UseFormRegisterReturn;

  isError?: boolean;
  errorMessage?: string;
};

export const InputField = (props: Props) => {
  const { label, formRegistartion, isError, errorMessage } = props;

  return (
    <FormControl fullWidth={true} error={isError} variant="outlined">
      <InputLabel>{label}</InputLabel>
      <OutlinedInput {...props} inputProps={formRegistartion} />
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
};
