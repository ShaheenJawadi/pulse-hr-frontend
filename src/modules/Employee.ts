
export type EmployeeType = {
    name: string;
    last_name: string;
    email: string;
    phone: string;
    birthday: string;
    sexe: string;
    avatar?: string;
    hire_date: string;
    end_contract?: string;
    contract_type_id: number;
    department_id: number;
    shift_id: number;
    supervisor_id?: number;
    position_id: number;
    additional_infos?: string;
    user_id: number;
};
