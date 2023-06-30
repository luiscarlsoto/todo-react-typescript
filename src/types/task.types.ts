export interface TaskResponse {
    tasks:  Task[];
    status: Status;
  }
  
export interface Status {
    type: string;
    key:  string;
}

export interface Task {
    id:          number;
    title:       string;
    description: string;
    done:        boolean;
    disabled:    boolean;
    deletedAt:   null;
    createdAt:   Date;
    updatedAt:   Date;
}