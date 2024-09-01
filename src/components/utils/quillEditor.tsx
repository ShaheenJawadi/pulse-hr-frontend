import React, { useEffect, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Box, FormControl, FormHelperText, InputLabel } from "@mui/material";
import { useForm, Controller, Control, useController } from "react-hook-form";

 
interface Props {
  control: any;
  name: string;
}
const QuillEditor = (props: Props) => {
  const { control, name } = props;
 
  const modules = {
    toolbar: [
      [
        { header: "1" },
        { header: "2" },
        { header: "3" },
        { header: "4" },
        { font: [] },
      ],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: true,
    },
  };

  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: "",  
  });
  return (
    <>
      <FormControl
        fullWidth={true}
        error={error ? true : false}
        variant="outlined"
      >
        <Box
          sx={{
            border: `2px solid ${error && "var(--mui-palette-error-main)"}`, // Red border if there's an error, otherwise light gray
          }}
        >
    
          <ReactQuill
            placeholder="Écrivez quelque chose..."
            className="quill-editor"
            theme="snow"
            modules={modules}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        </Box>{" "}
        <FormHelperText>{error?.message}</FormHelperText>{" "}
      </FormControl>
    </>
  );
};

export default QuillEditor;
