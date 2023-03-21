import { Redirect, Route, Switch } from "react-router-dom";
import TaskPage from "../features/tasks/TaskPage";
import TasksPage from "../features/tasks/TasksPage";
import TipsPage from "../features/tips/TipsPage";
import { Item, List, StyledNavLink } from "./styled";


export default () => {
    return (
        <nav>
            <List>
                <Item>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink to="/planowanie">Efektywne planowanie i organizacja czasu pracy</StyledNavLink>
                </Item>
            </List>
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/planowanie">
                    <TipsPage />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </nav>
    );
};
