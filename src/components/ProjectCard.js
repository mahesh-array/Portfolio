import { Col } from "react-bootstrap";
export const ProjectCard = ({title, description, imgUrl, projectUrl})=>{
    return(
        <Col dm={6} md={4}>
            <div className="proj-imgbx">
            <a href={projectUrl} target="_blank">
                <img src={imgUrl} alt=""/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </a>  
            </div>
        </Col>
    )
}
