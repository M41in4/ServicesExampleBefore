import { User } from './user';

export class Page {
    public pageNumber = 1;
    public perPage = 1;
    public total: number;
    public totalPages: number;

    public users: User[] = new Array<User>();
}
