import { Fragment } from "react";
import Card from "./Card";
const Notes=(props)=>{
    
    const displayentires=props.notes;
    console.log(displayentires);
    return(
        <Fragment>
            <h1>All tests</h1>
            <div className="alltest-wrapper">
            {displayentires.length>0 && displayentires.map((note)=>
            <Card 
            default={note.default}
            Id={note.id}
            onDeleteItem={props.onDelete}
            CardTitle={note.quizname}
            CardDescription={note.description}
            timelimit={note.timelimit}>
            </Card>)}
            </div>
        </Fragment>
    )
}
export default Notes;