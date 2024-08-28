import { Box, Card, CardContent, Stack, Typography } from "@mui/material"



const KanbanColumns = () => {


    return (
        <Stack  spacing={4} >

            <Stack paddingX={5} direction={"row"} justifyContent={"space-between"} alignItems={"center"} >

                <Box>

                <Typography variant="h6" fontWeight={600} color={"secondary"}> col name</Typography>

                </Box>
               
               <Box>
                op
               </Box>

            </Stack>


            <Stack spacing={2} >

                <Card sx={{width:300 , maxWidth:300}}>
                    <CardContent>
                        <Typography  >single task</Typography>
                    </CardContent>
                </Card>

                <Card sx={{width:300 , maxWidth:300}}>
                    <CardContent>
                        <Typography  > single task</Typography>
                    </CardContent>
                </Card>

                <Card sx={{width:300 , maxWidth:300}}>
                    <CardContent>
                        <Typography  > single task</Typography>
                    </CardContent>
                </Card>

            </Stack>
            

        </Stack>

    )
}

 export default KanbanColumns;