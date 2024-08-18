export interface LeaveRequest {
    id?: number;
    employee_id: number;
    request_date?: string;
    start_date?: string;
    end_date: string;
    leave_type: string;
    status?: 'approved' | 'pending' | 'rejected';
    manager_comments?: string | null;
    created_at?: string;
    updated_at?: string;
}
