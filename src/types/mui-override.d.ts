import { ChipPropsVariantOverrides } from '@mui/material/Chip';
import { PaperPropsVariantOverrides } from '@mui/material/Paper';


declare module '@mui/material/Chip' {
    interface ChipPropsVariantOverrides {
      lightone: true;
    }
}

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    lightone: true;
  }
}

