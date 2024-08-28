import { Theme } from '@mui/material/styles'


const MUIChip = (): Theme['components'] => {
   return {
    MuiChip: {
      defaultProps: {
        size: 'small',
        color:"primary",
    },
        variants: [
          {
            props: { variant: 'lightone', color: 'primary' },
            style: {
              backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
              color: 'var(--mui-palette-primary-main)',
              fontWeight: 500,
           
            }
          },
          {
            props: { variant: 'lightone', color: 'secondary' },
            style: {
              backgroundColor: 'var(--mui-palette-secondary-lightOpacity)',
              color: 'var(--mui-palette-secondary-main)',
              fontWeight: 500,

             
            }
          },
          {
            props: { variant: 'lightone', color: 'error' },
            style: {
              backgroundColor: 'var(--mui-palette-error-lightOpacity)',
              color: 'var(--mui-palette-error-main)',
              fontWeight: 500,
            
            }
          },
          {
            props: { variant: 'lightone', color: 'warning' },
            style: {
              backgroundColor: 'var(--mui-palette-warning-lightOpacity)',
              color: 'var(--mui-palette-warning-main)',
              fontWeight: 500,

             
            }
          },
          {
            props: { variant: 'lightone', color: 'info' },
            style: {
              backgroundColor: 'var(--mui-palette-info-lightOpacity)',
              color: 'var(--mui-palette-info-main)',
              fontWeight: 500,

             
          
            }
          },
          {
            props: { variant: 'lightone', color: 'success' },
            style: {
              backgroundColor: 'var(--mui-palette-success-lightOpacity)',
              color: 'var(--mui-palette-success-main)',
              fontWeight: 500,

            
            }
          }
        ],
       
      }
   }
}

export default MUIChip
