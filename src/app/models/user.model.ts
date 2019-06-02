
import { User } from 'firebase/app';

export interface Roles {
    beheerder: boolean;
    student: boolean;
    docent: boolean;
}
export class AppUser {
    firebaseUser: User;
    roles: Roles;
}
