import { Fragment } from "react";
import Card from "./Card";
import Newentry from "./Newentry";
const Entries=(props)=>{
    const displayentires=props.items;
    return(
        <Fragment>
            <h1>Welcome to your board</h1>
            <Newentry onSaveItem={props.onNewSave}></Newentry>
            <section className="Entries">
            {displayentires.length>0 && displayentires.map((itemsarr)=>
            <Card 
            key={itemsarr.id}
            onDeleteItem={props.onDelete}
            CardTitle={itemsarr.Title}
            CardDescription={itemsarr.Description}>
            </Card>)}
            </section>
        </Fragment>
    )


}
export default Entries;