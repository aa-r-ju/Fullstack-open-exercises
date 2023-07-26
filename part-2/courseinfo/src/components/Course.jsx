import Header from "./Header";
import Content from "./Content";
import Part from "./Part";
import Total from "./Total";
const Course = (props) => {
    // let var1 = props.course.map(x => console.log(x.name, ) );
    // console.log(var1, " name")
    return(
        <div>
            {/* { props.course.map((x) =><Header name = {x}/> )} */}
             <Header name = {props.course[0].name}/> 
            {/* <Header course = {props.course[courses]}/> */}
            <Content content = {props.course[0].parts}/>
            <Total total = {props.course[0].parts}/>
            <Header name = {props.course[1].name}/> 
            <Content content = {props.course[1].parts}/>
            <Total total = {props.course[1].parts}/>



        </div>
    )

}
export default Course;