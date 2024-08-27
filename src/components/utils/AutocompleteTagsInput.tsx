import { Autocomplete, Chip, TextField } from "@mui/material";
import { useState } from "react";

type AutocompleteTagsInputProps ={
  onTagsChange: (tags: string[]) => void;
  defaultTags:string[];
}

const AutocompleteTagsInput =({ onTagsChange,defaultTags}:AutocompleteTagsInputProps)=>{
    const [tags, setTags] = useState<string[]>(defaultTags);

    return (
        <Autocomplete
                  multiple
                  freeSolo
                  options={[]}
                  value={tags}
                  onChange={(event, newValue) => {
                    setTags(newValue);
                    onTagsChange(newValue);
                  }}
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
                      label="Mots clés"
                      placeholder="Tapez et appuyez sur Entrée"
                    />
                  )}
                />
    )
}


export default AutocompleteTagsInput;