export interface ToDo{
    id: string;
    title: string;
    description: string;
    plannedDate: string;
}

export interface State{
    title: String;
    id: string;
    tasks: ToDo[];
}