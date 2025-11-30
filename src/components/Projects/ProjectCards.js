import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub, BsFileEarmarkText, BsFileEarmarkSlides } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ color: "#c770f0", fontWeight: "bold" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}

          {!props.isBlog && props.paperLink && (
            <Button
              variant="primary"
              href={props.paperLink}
              target="_blank"
            >
              <BsFileEarmarkText /> &nbsp;
              {"Research Paper"}
            </Button>
          )}

          {!props.isBlog && props.docsLink && (
            <Button
              variant="primary"
              href={props.docsLink}
              target="_blank"
            >
              <BsFileEarmarkSlides /> &nbsp;
              {"Working Docs"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
