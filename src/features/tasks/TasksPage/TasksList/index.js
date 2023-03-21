import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice.js";
import { useQueryParameter } from "../queryParameters.js";
import searchQueryParamName from "../searchQueryParamName.js";
import { List, Item, Button, Content, StyledLink } from "./styled.js";

const TasksList = () => {
    const query = useQueryParameter(searchQueryParamName);
    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✓" : ""}
                    </Button>
                    <Content done={task.done}>
                        <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
                    </Content>
                    <Button
                        remove
                        onClick={() => dispatch(removeTask(task.id))} >
                        🗑
                    </Button>
                </Item>
            ))}
        </List>
    )
};

export default TasksList;