
import { User } from 'firebase/app';

export class AppUser {
    firebaseUser?: User;
    role: string;
    name: string;
    id?: string;
}
