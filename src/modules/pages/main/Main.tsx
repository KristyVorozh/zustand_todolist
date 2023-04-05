import React, {useState} from 'react';
import {Button, Card,  Input, Space} from "antd";
import ToDoList from "./components/ToDoList";
import {useBearStore} from "../../store/ToDoStore";
import toast from "react-hot-toast";
import ToDoListDeleted from "./components/ToDoListDeleted";
import ToDoListCompleted from "./components/ToDoListCompleted";
const Main = () => {
    const [inputTitle, setInputTitle] = useState({value: '', error: false});
    const [
        addTasks,
        deletedTasks,
        completedTasks,
    ] = useBearStore(state => [
        state.addTasks,
        state.deletedTasks,
        state.completedTasks,
    ]);
    return (
       <>
           <Card title='To do list' style={{ width: 500, borderRadius: 20 }}>
               <Space>
                   <Space.Compact style={{ width: 400 }}>
                       <Input status={inputTitle.error ? 'error' : ''} value={inputTitle.value} onChange={(e) => setInputTitle({value: e.target.value, error: false})} placeholder='to do...' />
                       <Button onClick={() => {
                           if (inputTitle.value === '') {
                               setInputTitle({value: '', error: true})
                               toast.error('error')
                           } else {
                               addTasks(inputTitle.value)
                               setInputTitle({value: '', error: false})
                           }
                       }} type="primary">+</Button>
                   </Space.Compact>
               </Space>
              <ToDoList />
           </Card>
           {
               completedTasks.length > 0 && (
                   <Card title='completed' style={{ width: 500, marginTop: 20, borderRadius: 20 }}>
                       <ToDoListCompleted />
                   </Card>
               )
           }
           {
               deletedTasks.length > 0 && (
                   <Card title='deleted' style={{ width: 500, marginTop: 20, borderRadius: 20 }}>
                       <ToDoListDeleted />
                   </Card>
               )
           }
       </>
    );
};

export default Main;
