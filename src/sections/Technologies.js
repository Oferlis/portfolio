import Logo from "../components/Logo";
import SectionSeperator from "../components/sectionSeperator";

export default function Technologies() {
  return (
    <>
      <SectionSeperator sectionName="technologies" />
      <div id="technologies" className="row-div tech-div">
        <div className="col-div">
          <h2 className="tech-h2">Constantly enchanching my skills</h2>
        </div>
        <div className="logo-div">
          <Logo src={process.env.PUBLIC_URL + "/svgs/django.svg"} id="1" />
          <Logo src={process.env.PUBLIC_URL + "/svgs/react.svg"} id="2" />
          <Logo src={process.env.PUBLIC_URL + "/svgs/typescript.svg"} id="11" />
          <Logo src={process.env.PUBLIC_URL + "/svgs/nodejs.svg"} id="9" />
          <Logo src={process.env.PUBLIC_URL + "/svgs/docker.svg"} id="5" />
          <Logo src={process.env.PUBLIC_URL + "/svgs/html.svg"} id="8" />
          <Logo src={process.env.PUBLIC_URL + "/svgs/css.svg"} id="4" />
          <Logo src={process.env.PUBLIC_URL + "/svgs/ruby.svg"} id="10" />
          <Logo src={process.env.PUBLIC_URL + "/svgs/postgresql.svg"} id="12" />
          <Logo src={process.env.PUBLIC_URL + "/svgs/git.svg"} id="6" />
          <Logo src={process.env.PUBLIC_URL + "/svgs/mongodb.svg"} id="13" />
          <Logo src={process.env.PUBLIC_URL + "/svgs/ansible.svg"} id="3" />
        </div>
      </div>
    </>
  );
}