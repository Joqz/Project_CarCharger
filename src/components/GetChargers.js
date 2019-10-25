import React from 'react';
import { Link } from "react-router-dom";

export default function SearchResult(props) {

    return (
        <div style={{ padding: "50px", display: "flex"}}>
            <Link to={ `/charger/${props.id}` }>
                <div>
                    <div>{ props.name }</div>
                    <div>Price: { props.price } {props.price_per}</div> 
                    <div>{ props.type }</div>
                    <br></br>
                </div>
            </Link>
        </div>
    )
}