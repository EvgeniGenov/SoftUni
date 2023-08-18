import { UserRole } from "./user-role";

export interface User {
    role: UserRole;
    firstName: string;
    lastName: string;
    phoneNumber: number;
    dateOfBirth: Date
}