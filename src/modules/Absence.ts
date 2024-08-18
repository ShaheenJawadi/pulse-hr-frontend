export interface Absence {
    id?: number;
    employee_id: number;
    start_date: string;
    end_date?: string;
    type?: string;
    status: 'approved' | 'pending' | 'rejected';
    reason?: string | null;
    created_at?: string;
    updated_at?: string;
}
