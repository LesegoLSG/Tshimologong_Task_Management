export interface ButtonProps {
    text: any;
    color: string;
    handleAddClick?: () => void;
    onAdd?: () => void;
    handleAnimate?: () => void;
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
    ChangeAnimateState: () => void;

}

export interface AddTaskFormProps {
    onAdd: (task: TaskProps) => void;

}

export interface UpdateModalProps {
    taskToEdit: TaskProps;
    closeModalProp?: () => void;
    onEdit: (task: TaskProps) => void
}

export interface PageChangeProps {
    totalPosts: number;
    postsPerPage: number;
    currentPage: number;
    firstPostIndex: number;
    lastPostIndex: number;
    setCurrentPage(page: number): void;

}
