import { useSelector, useDispatch } from "react-redux";
import { toggleHideDone, setAllDone, selectAreTasksEmpty, selectHideDone, selectIsEveryTaskDone, fetchExampleTasks } from "../tasksSlice.js";
import { Wrapper, Button } from "./styled.js";



const Buttons = () => {
   const areTasksEmpty = useSelector(selectAreTasksEmpty);
   const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
   const hideDone = useSelector(selectHideDone);
    
    
    const dispatch = useDispatch();
    
    return (
        <Wrapper>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
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