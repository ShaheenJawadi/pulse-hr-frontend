export interface Department {
    id?: number;
    name: string;
    location?: string;
    manager_id?: number | null;
    created_at?: string;
    updated_at?: string;
}
