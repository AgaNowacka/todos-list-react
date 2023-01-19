import { Wrapper , Button } from "./styled.js"


const Buttons = (props) => {
    if (props.tasks.length === 0) {
        return null
    }

    return (
        <Wrapper>
            <Button onClick={props.toggleHideDoneTasks} >
                {props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button onClick={props.setAllDone} disabled={props.tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </Button>
        </Wrapper>
    )

};


export default Buttons;