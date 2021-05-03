import * as React from 'react';
import {  useParams } from "react-router-dom";

export function RouteContainer(props) {
    const { id } = useParams();
    const Component = props.component;
    return <Component {...props.componentProps} id={id} />;
}
