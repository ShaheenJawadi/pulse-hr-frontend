export interface Employee {
    id?: number;
    hire_date: string;
    contract_type: string;
    department_id: number | null;
    position: string;
    created_at?: string;
    updated_at?: string;
}
