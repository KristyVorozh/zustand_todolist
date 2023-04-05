import React from 'react';
import {Button, Typography} from "antd";
import {useBearStore} from "../../../store/ToDoStore";

const ToDoListCompleted = () => {
    const [
        comebackCompleteTask,
        completedTasks
    ] = useBearStore(state => [
        state.comebackCompleteTask,
        state.completedTasks
    ])
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px 22px'
        }}>
            {
                completedTasks.map((v, index) => (
                    <div style={{display: 'flex', marginBottom: 10, width: '100%', justifyContent: 'space-between'}} key={v.id}>
                        <div style={{display: 'flex'}}>
                            <span style={{marginRight: 5}}>{index + 1}.</span>
                            <Typography>{v.name}</Typography>
                        </div>
                        <Button onClick={() => comebackCompleteTask(v, v.id)}>comeback</Button>
                    </div>
                ))
            }
        </div>
    );
};

export default ToDoListCompleted;
