import { Wrapper, Header, Title, Body } from "./styled.js"

const Section = (props) => (
    <Wrapper>
        <Header>
          <Title>{props.title}</Title>
         {props.extraHeaderContent}
        </Header>
        <Body>
         {props.body}
        </Body>
      </Wrapper>
);


export default Section;