import { useSelector, useDispatch } from "react-redux";
import { toggleHideDone, setAllDone, selectAreTasksEmpty, selectHideDone, selectIsEveryTaskDone, fetchExampleTasks } from "../../tasksSlice";
import { Button } from "../Button";
import FetchExampleTasksButton from "../FetchExampleTasksButton";
import { Wrapper, } from "./styled.js";



const Buttons = () => {
   const areTasksEmpty = useSelector(selectAreTasksEmpty);
   const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
   const hideDone = useSelector(selectHideDone);
    
    
    const dispatch = useDispatch();
    
    return (
        <Wrapper>
            <FetchExampleTasksButton />
            {!areTasksEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button onClick={() => dispatch(setAllDone())} disabled={isEveryTaskDone}>
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Wrapper>
    )
};


export default Buttons;