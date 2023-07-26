import Header from "./Header";
import Content from "./Content";
import Part from "./Part";
import Total from "./Total";
const Course = (props) => {
    // let var1 = props.course.map(x => console.log(x.name, ) );
    // console.log(var1, " name")
    return(
        <div>
            { props.course.map((x) =>
            <div><Header name = {x}/> <Content parts = {x.parts} /> <Total total = {x.parts}/> </div>)}


        </div>
    )

}
export default Course;