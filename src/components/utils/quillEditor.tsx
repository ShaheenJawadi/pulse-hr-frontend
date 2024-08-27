import React, { useEffect, useRef, useState } from "react";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";
import { Box } from "@mui/material";

interface QuillEditorProps {
  value: string;
  onChange: (content: string) => void;
}

const QuillEditor = ({ value, onChange }: QuillEditorProps) => {
 
 
    
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

  return (
    <Box  >
      <ReactQuill
      placeholder="Écrivez quelque chose..."
        className="quill-editor"
        theme="snow" 
        modules={modules}
        onChange={onChange}  
        value={value}  
      />
    </Box>
  );
};

export default QuillEditor;
