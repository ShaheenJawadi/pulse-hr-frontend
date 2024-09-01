export interface User {
    id?: number;
    name: string;
    email: string;
    email_verified_at?: string | null;
    role: 'admin' | 'user' | 'employee';
    password?: string;
    remember_token?: string | null;
    created_at?: string;
    updated_at?: string;
}
