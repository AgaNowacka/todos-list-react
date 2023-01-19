import { List, Item, Button, Content } from "./styled.js";

const Tasks = (props) => (
    <List>
        {props.tasks.map(task => (
            <Item 
            key={task.id} 
            hidden={task.done && props.hideDoneTasks}
            >
                <Button
                toggleDone
                onClick={() => props.toggleTaskDone(task.id)} 
                >
                    {task.done ? "✓" : ""}
                </Button>
                <Content done={task.done}>
                    {task.content}
                </Content>
                <Button 
                remove
                onClick={() => props.removeTask(task.id)} >
                    🗑
                </Button>
            </Item>
        ))}
    </List>
);

export default Tasks;