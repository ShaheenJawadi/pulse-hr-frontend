import { Theme } from '@mui/material/styles'


const MUIChip = (): Theme['components'] => {
   return {
    MuiChip: {
        variants: [
          {
            props: { variant: 'lightone', color: 'primary' },
            style: {
              backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
              color: 'var(--mui-palette-primary-main)',
           
            }
          },
          {
            props: { variant: 'lightone', color: 'secondary' },
            style: {
              backgroundColor: 'var(--mui-palette-secondary-lightOpacity)',
              color: 'var(--mui-palette-secondary-main)',
             
            }
          },
          {
            props: { variant: 'lightone', color: 'error' },
            style: {
              backgroundColor: 'var(--mui-palette-error-lightOpacity)',
              color: 'var(--mui-palette-error-main)',
            
            }
          },
          {
            props: { variant: 'lightone', color: 'warning' },
            style: {
              backgroundColor: 'var(--mui-palette-warning-lightOpacity)',
              color: 'var(--mui-palette-warning-main)',
             
            }
          },
          {
            props: { variant: 'lightone', color: 'info' },
            style: {
              backgroundColor: 'var(--mui-palette-info-lightOpacity)',
              color: 'var(--mui-palette-info-main)',
             
          
            }
          },
          {
            props: { variant: 'lightone', color: 'success' },
            style: {
              backgroundColor: 'var(--mui-palette-success-lightOpacity)',
              color: 'var(--mui-palette-success-main)',
            
            }
          }
        ],
       
      }
   }
}

export default MUIChip
