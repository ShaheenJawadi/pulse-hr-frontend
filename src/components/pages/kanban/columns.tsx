import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material"
import KanbanTask from "./task";
import AddIcon from '@mui/icons-material/Add';


const KanbanColumns = () => {


    return (
        <Stack  padding={2} spacing={4} >

            <Stack paddingX={5} direction={"row"} justifyContent={"space-between"} alignItems={"center"} >

                <Box>

                <Typography variant="h6" fontWeight={600} color={"secondary"}> col name</Typography>

                </Box>
               
               <Box>
                op
               </Box>

            </Stack>


            <Stack spacing={2} >

                {[1,2,3,4,5].map((item, index) => {
                    return (
                    <KanbanTask/>
                    )
                })}

                <Button startIcon={ <AddIcon/> }>
                Ajouter une tâche
                </Button>
            </Stack>
            

        </Stack>

    )
}

 export default KanbanColumns;