import React from 'react';
import { Autocomplete, Chip, TextField, FormControl, FormHelperText } from '@mui/material';
import { UseFormRegisterReturn } from 'react-hook-form';

interface AutocompleteTagsInputProps {
  formRegistration?: UseFormRegisterReturn;
  isError?: boolean;
  errorMessage?: string;
  defaultTags?: string[];
  name:string 
}

const AutocompleteTagsInput: React.FC<AutocompleteTagsInputProps> = ({
  formRegistration,
  isError,
  errorMessage,
  defaultTags = [],
  name
}) => {
  const [tags, setTags] = React.useState<string[]>(defaultTags);

  const handleTagsChange = (event: React.ChangeEvent<{}>, newValue: string[]) => {
    setTags(newValue);

    if (formRegistration) { 
      const customEvent = {
        target: {
          name: formRegistration.name,
          value: newValue,
        },
      };
      formRegistration.onChange(customEvent as any);
    }
  };

  return (
    <FormControl fullWidth={true} error={isError} variant="outlined">
      <Autocomplete
        multiple
        freeSolo
        options={[]}
        value={tags}

        onChange={handleTagsChange}
        renderTags={(value: readonly string[], getTagProps) =>
          value.map((option: string, index: number) => (
            <Chip
              label={option}
              {...getTagProps({ index })}
              color="secondary"
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            error={isError}
           
            placeholder="Type and press Enter"
            inputRef={formRegistration?.ref}
            label={name}
          />
        )}
      />
      {isError && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};

export default AutocompleteTagsInput;
