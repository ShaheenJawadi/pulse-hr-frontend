import * as yup from "yup";




export interface WorkPOsition {
    id?: number;
    designation: string;
    created_at?: string;
    updated_at?: string;
}

export const createWorkPositionSchema = yup.object().shape({
    designation: yup.string().required("Entrer une designation"), 
});

export const WorkPositionDefaultValues = { designation: "" };
