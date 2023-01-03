import "./style.css";

const Section = (props) => (
    <section className="section">
        <header className="section__header">
          <h2 className="section_title">{props.title}</h2>
         {props.extraHeaderContent}
        </header>
        <div className="section__body">
         {props.body}
        </div>
      </section>
);


export default Section;