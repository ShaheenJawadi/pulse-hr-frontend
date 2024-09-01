import * as yup from "yup";




export interface Department {
    id?: number;
    name: string;
    location?: string;
    manager_id?: number | null;
    created_at?: string;
    updated_at?: string;
}

export const createDepartmentSchema = yup.object().shape({
    name: yup.string().required("Entrer une designation"),
    manager_id: yup.number(),
    location: yup.string().required("Entrer une location"),
});

export const departmentDefaultValues = { name: "", location: "" , manager_id: null};
