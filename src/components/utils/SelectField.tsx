 
import { getDynamicSelectData } from "@/hooks/selectItemsData";
import { DepService } from "@/services/department";
import { SelectDataTypes, ServiceRegistryCall } from "@/types/structureTypes";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  MenuItem,
  Select,
  MenuItemProps,
  styled,
  alpha,
  Button,
  Typography,
  Stack,
  SelectChangeEvent,
  TextField,
  SelectProps,
} from "@mui/material";

import {
  ChangeEventHandler,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = SelectProps & {
  formRegistartion?: UseFormRegisterReturn;
  isError?: boolean;
  errorMessage?: string;
  selectData?: SelectDataTypes[];
  dataValue?: any;
  getNewValue?: (value: any) => void;
  allowNull?: string;
};

export const SelectField = (props: Props) => {
  const {
    label,
    formRegistartion,
    isError,
    errorMessage,
    selectData,
    dataValue,
    allowNull,
    getNewValue,
  } = props;

  const [selectVal, setSelectVal] = useState(dataValue);

  const handleChange = (event: any) => {
    setSelectVal(event?.target?.value as string);

    if (getNewValue) {
      getNewValue(event?.target?.value);
    }
  };

  useEffect(() => {
    setSelectVal(dataValue);
  }, [dataValue]);

  return (
    <FormControl fullWidth error={isError}>
      <InputLabel>{label}</InputLabel>
      <Select
        error={isError}
        {...props}
        inputProps={formRegistartion}
        onChange={handleChange}
        value={selectVal}
      >
        {allowNull && (
          <MenuItem value={undefined}>
            <Stack direction={"row"} spacing={2}>
              <Typography>{allowNull} </Typography>
            </Stack>
          </MenuItem>
        )}

        {selectData?.map((item, index) => {
          return (
            <MenuItem key={index} value={item.value}>
              {item.labelText}
            </MenuItem>
          );
        })}
      </Select>

      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
};


type DynamicProps ={
  targetMenu:ServiceRegistryCall,
}

export const DynamicSelectField = (props: Props &DynamicProps) => {
  const {
    label,
    formRegistartion,
    isError,
    errorMessage, 
    dataValue,
    allowNull,
    targetMenu,
    getNewValue,
  } = props;


 

    const {options:selectData, isLoading, error}=getDynamicSelectData({target:targetMenu});
 


  const [selectVal, setSelectVal] = useState(dataValue);

  const handleChange = (event: any) => {
    setSelectVal(event?.target?.value as string);

    if (getNewValue) {
      getNewValue(event?.target?.value);
    }
  };

  useEffect(() => {
    setSelectVal(dataValue);
  }, [dataValue]);

  return (
    <FormControl fullWidth error={isError}>
      <InputLabel>{label}</InputLabel>
      <Select
        error={isError}
        {...props}
        inputProps={formRegistartion}
        onChange={handleChange}
        value={selectVal}
      >
        {allowNull && (
          <MenuItem value={undefined}>
            <Stack direction={"row"} spacing={2}>
              <Typography>{allowNull} </Typography>
            </Stack>
          </MenuItem>
        )}

        {selectData?.map((item, index) => {
          return (
            <MenuItem key={index} value={item.value}>
              {item.labelText}
            </MenuItem>
          );
        })}
      </Select>

      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
};


