
import { 
    Button,  
    Stack,
    TextField, 
  } from "@mui/material";
   
  
  const AddPoste = () => {
    return (
      <Stack spacing={5} justifyContent={"center"} height={"100%"}>
        <TextField
          
          sx={{ width: "100%" }}
          label="Designation"
          variant="outlined"
        />
   
        <Button variant="contained" size="large">
          Créer
        </Button>
  
      
      </Stack>
    );
  };
  
  export default AddPoste;
  