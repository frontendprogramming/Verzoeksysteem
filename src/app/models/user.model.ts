
import { User } from 'firebase/app';

export class AppUser {
    firebaseUser: User;
    role: string;
    id?: string;
}
