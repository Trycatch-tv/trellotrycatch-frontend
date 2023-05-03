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

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface projects {
  id: string;
  name: string;
  description: string;
  backgroundColor: 'sky' | 'yellow' | 'green' | 'red' | 'violet' | 'gray';
  members: User[];
}