import { AppUser } from './user.model';
import { Item } from './item.model';

export interface Request {
    startDate: string;
    endDate: string;
    itemRef: any;
    userRef: any;
    user?: AppUser;
    item?: Item;
}
