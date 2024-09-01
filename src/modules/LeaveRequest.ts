interface LeaveRequest {
    id?: number;
    employee_id: number;
    start_date: string;
    end_date: string;
    leave_type: string;
    comments?: string;
    status: string;
    manager_comments?: string;
}
