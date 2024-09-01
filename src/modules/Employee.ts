
import * as yup from "yup";

export type EmployeeType = {
    name: string;
    last_name: string;
    email: string;
    phone: string;
    birthday: string;
    sexe: string;
    avatar?: string | null;
    hire_date: string;
    end_contract?: string | null;
    contract_type_id: number;
    department_id: number;
    shift_id: number;
    supervisor_id?: number | null;
    position_id: number;
    additional_infos?: string | null;
    user_id?: number;
};



export const EmployeeDefaultValues: EmployeeType = {
    name: "",
    last_name: "",
    email: "",
    phone: "",
    birthday: "",
    sexe: "",
    avatar: null,
    hire_date: "",
    end_contract: null,
    contract_type_id: 0,
    department_id: 0,
    shift_id: 0,
    supervisor_id: null,
    position_id: 0,
    additional_infos: null,
    user_id: 0,
};


/* 
export const EmployeeSchema = yup.object().shape({
    name: yup.string().required("Entrez un nom"),
    last_name: yup.string().required("Entrez un prénom"),
    email: yup.string().email("Entrez un email valide").required("Entrez un email"),
    phone: yup.string().required("Entrez un numéro de téléphone"),
    birthday: yup.string().required("Entrez une date de naissance"),
    sexe: yup.string().oneOf(["h", "f"]).required("Sélectionnez un sexe"),
    avatar: yup.string().nullable().defined(),
    hire_date: yup.string().required("Entrez une date d'embauche"),
    end_contract: yup.string().nullable().defined(),
    contract_type_id: yup.number().required("Sélectionnez un type de contrat"),
    department_id: yup.number().required("Sélectionnez un département"),
    shift_id: yup.number().required("Sélectionnez un horaire"),
    supervisor_id: yup.number().nullable().defined(),
    position_id: yup.number().required("Sélectionnez un poste"),
    additional_infos: yup.string().nullable().defined(),
}); */



 const EmployeeSchemaStep1 = yup.object().shape({
    name: yup.string().required("Entrez un nom"),
    last_name: yup.string().required("Entrez un prénom"),
    email: yup.string().email("Entrez un email valide").required("Entrez un email"),
    phone: yup.string().required("Entrez un numéro de téléphone"),
    birthday: yup.string().required("Entrez une date de naissance"),
    sexe: yup.string().oneOf(["h", "f"]).required("Sélectionnez un sexe"),
    avatar: yup.string().nullable().defined(),
});


 const EmployeeSchemaStep2 = yup.object().shape({
    department_id: yup.number().required("Sélectionnez un département"),
    position_id: yup.number().required("Sélectionnez un poste"),
    supervisor_id: yup.number().nullable().defined(),
    shift_id: yup.number().required("Sélectionnez un horaire"),

    hire_date: yup.string().required("Entrez une date d'embauche"),
    contract_type_id: yup.number().required("Sélectionnez un type de contrat"),
    end_contract: yup.string().nullable().defined(),




});


 const EmployeeSchemaStep3 = yup.object().shape({



});


 const EmployeeSchemaStep4 = yup.object().shape({



    additional_infos: yup.string().nullable().defined(),
});


export const EmployeeSchema  = [EmployeeSchemaStep1, EmployeeSchemaStep2, EmployeeSchemaStep3 ,EmployeeSchemaStep4];
