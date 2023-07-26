import Header from "./Header";
import Content from "./Content";
import Part from "./Part";
import Total from "./Total";
const Course = (props) => {
    console.log(props, " name")
    return(
        <div>
            <Header course = {props.course.name}/>
            <Content content = {props.course.parts}/>
        </div>
    )

}
export default Course;