export type TaksEntity = {
    name:string;
    priority:number;
    end_date: Date;
    user: string
};

export class Task {
    ok: boolean;
    tasksDb:[TaksEntity];
    count: 2;
    user:object;
}