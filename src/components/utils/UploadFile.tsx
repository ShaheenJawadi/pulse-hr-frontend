import { useState } from "react";
import {
  List,
  Avatar,
  Button,
  ListItem,
  IconButton,
  Typography,
  Box,
  styled,
  Stack,
  Divider,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import InsertDriveFileTwoToneIcon from "@mui/icons-material/InsertDriveFileTwoTone";
import BackspaceTwoToneIcon from '@mui/icons-material/BackspaceTwoTone';
import CloudUploadTwoToneIcon from "@mui/icons-material/CloudUploadTwoTone";
type FileProp = {
  name: string;
  type: string;
  size: number;
};
type Prop = {
    maxSize: number;
    maxFiles: number; 
  };

const DropDownZone = styled(Box)(({ theme }) => ({
  border: `2px dashed ${theme.palette.text.secondary}`,
  borderRadius: 10, 
  padding: theme.spacing(3),
}));

const UploadFileInput = ({maxFiles , maxSize}:Prop) => {
  const [files, setFiles] = useState<File[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: maxFiles,
    maxSize: maxSize*1000000,
    accept: {
      "application/pdf": [".pdf"],
    },
    onDrop: (acceptedFiles: File[]) => setFiles(acceptedFiles),
  });

  const renderFilePreview = (file: FileProp) =>
    file.type.startsWith("image") ? (
      <Image
        width={38}
        height={38}
        alt={file.name}
        src={URL.createObjectURL(file as any)}
      />
    ) : (
      <InsertDriveFileTwoToneIcon color="primary" />
    );

  const handleRemoveFile = (file: FileProp) =>
    setFiles((prevFiles) => prevFiles.filter((f) => f.name !== file.name));

  const fileList = files.map((file: FileProp) => (
    <Stack direction={"row"} justifyContent={"space-between"} key={file.name}>
      <Stack alignItems={"center"} direction={"row"} spacing={2} >
        {renderFilePreview(file)}
        <Box>
          <Typography variant="body2" >{file.name}</Typography>
          <Typography   variant="caption">
            {(file.size / 1000).toFixed(1)} ko
          </Typography>
        </Box>
      </Stack>
      <IconButton onClick={() => handleRemoveFile(file)} sx={{fontSize:20}}>
        <BackspaceTwoToneIcon color="error" fontSize="inherit"  />
      </IconButton>
    </Stack>
  ));

  return (
    <Stack spacing={2}>
      <DropDownZone {...getRootProps()}>
        <input {...getInputProps()} />
        <Stack
          direction={"row"}
          alignContent={"center"}
          spacing={3}
          justifyContent={"center"}
        >
          <Box>
            <CloudUploadTwoToneIcon color="primary" sx={{ fontSize: 40 }} />
          </Box>
          <Box>
            <Typography variant="body2">
              Déposez les fichiers ici ou cliquez pour télécharger.
            </Typography>
            <Box>
            <Typography variant="caption">Fichiers autorisés: *.pdf</Typography>

            </Box>
            <Box>
            <Typography  variant="caption">Max {maxFiles} fichier(s) et taille max de {maxSize} Mo</Typography> 
                
            </Box>
          </Box>
        </Stack>
      </DropDownZone>
      {files.length > 0 && (
        <>
          <Stack divider={<Divider/>} spacing={1}>{fileList}</Stack>
        </>
      )}
    </Stack>
  );
};

export default UploadFileInput;
