import React from 'react';
import { Link } from "react-router-dom";

export default function SearchResult(props) {

    return (
        <div>
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