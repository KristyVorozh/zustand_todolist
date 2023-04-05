import React from 'react';
import {Button, Checkbox, Input, Space} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {useBearStore} from "../../../store/ToDoStore";
import toast from "react-hot-toast";

const ToDoList = () => {
    const [
        tasks,
        changeTasks,
        changeTasksTitle,
        deleteTask,
        completeTask,
    ] = useBearStore(state => [
        state.tasks,
        state.changeTasks,
        state.changeTasksTitle,
        state.deleteTask,
        state.completeTask,
    ]);
    return (
        <div style={{
            marginTop: 20,
            padding: '0px 22px'
        }}>
            {
                tasks.map((v) => (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 20,
                    }} key={v.id}>
                        <div style={{display: 'flex'}}>
                            <Checkbox className={v.change ? 'change_checkbox' : ''} style={{display: 'flex', marginRight: 10, alignItems: 'center'}} onChange={(e) => completeTask(v.id)} />
                            {
                                v.change === true ? (
                                    <Space.Compact>
                                        <Input value={v.name} onChange={(e) => changeTasksTitle(e.target.value, v.id)} />
                                        <Button onClick={() => {
                                            if (v.name === '') {
                                                toast.error("error")
                                            } else {
                                                changeTasks(v.id)
                                                toast.success('ok')
                                            }
                                        }} type="primary">save</Button>
                                    </Space.Compact>
                                ) : <div>{v.name}</div>
                            }
                        </div>
                        <div>
                            <EditOutlined onClick={() => {
                                changeTasks(v.id)
                            }} style={{fontSize: 22, marginLeft: 20, marginRight: 5, cursor: 'pointer'}} />
                            <DeleteOutlined onClick={() => deleteTask(v.id)} style={{fontSize: 22, cursor: 'pointer'}} />
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ToDoList;
