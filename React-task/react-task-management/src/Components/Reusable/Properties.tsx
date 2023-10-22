export interface ButtonProps {
    text: string;
    color: string;
    handleAddClick?: () => void;
    onAdd?: () => void;
}

export interface TaskProps {
    id?: number;
    task: string;
    date: string;
    time: string;
    onDelete?: (id: number) => void;
    openModalProp?: () => void;
}

export interface HeaderProps {
    handleBtnChange: () => void;
    showAddTask: boolean;

}

export interface AddTaskFormProps {
    onAdd: (task: TaskProps) => void;
}

export interface UpdateModalProps {
    taskToEdit: TaskProps;
    closeModalProp?: () => void;
    onEdit: (task: TaskProps) => void
}

