import { create } from 'zustand'
interface ToDoArray {
    id: number,
    name: string
    change?: boolean;
}
interface ToDoStore {
    completedTasks: ToDoArray[];
    deleteTask: (value: number) => void;
    tasks: ToDoArray[];
    deletedTasks: ToDoArray[];
    addTasks: (value: string) => void;
    changeTasks: (value: number) => void;
    changeTasksTitle: (title: string, id: number) => void;
    comebackTask: (value: ToDoArray, id: number) => void;
    comebackCompleteTask: (value: ToDoArray, id: number) => void;
    completeTask: (value: number) => void;
}
export const useBearStore = create<ToDoStore>((set, get) => ({
    tasks: [],
    deletedTasks: [],
    completedTasks: [],
    addTasks: (title: string) => {
        const {tasks} = get();
        const newTask = {
            id: Math.random(),
            name: title,
            change: false
        }
        set({
            tasks: tasks.concat(newTask),
        })
    },
    changeTasks: (id: number) => {
        const {tasks} = get();
        set(() => ({
            tasks: tasks.map((task) => ({
                ...task,
                change: task.id === id ? !task.change : task.change
            }))
        }));
    },
    changeTasksTitle: (title: string, id: number) => {
        const {tasks} = get();
        set(() => ({
            tasks: tasks.map((task) => ({
                ...task,
                name: task.id === id ? title : task.name
            }))
        }));
    },
    deleteTask: (id: number) => {
        const {tasks, deletedTasks} = get();
        const newTask = {
            id: Math.random(),
            name: tasks.find((v) => v.id === id)?.name || "",
        }
        set({
            tasks: tasks.filter((v) => v.id !== id),
            deletedTasks: deletedTasks.concat(newTask),
        })
    },
    comebackTask: (value, id) => {
        const {tasks, deletedTasks} = get();
        set({
            deletedTasks: deletedTasks.filter((v) => v.id !== id),
            tasks: tasks.concat(value),
        })
    },
    comebackCompleteTask: (value, id) => {
        const {tasks, completedTasks} = get();
        set({
            completedTasks: completedTasks.filter((v) => v.id !== id),
            tasks: tasks.concat(value),
        })
    },
    completeTask: (id: number) => {
        const {tasks, completedTasks} = get();
        const newTask = {
            id: Math.random(),
            name: tasks.find((v) => v.id === id)?.name || "",
        }
        set({
            tasks: tasks.filter((v) => v.id !== id),
            completedTasks: completedTasks.concat(newTask),
        })
    }
}))