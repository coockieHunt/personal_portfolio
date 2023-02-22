// package
import styled from "styled-components";

//config
import { Color } from "../config";

//LIGHTEN
const LightenButtonSyle = styled.button`
    background-color: transparent;
    color: ${props => props.color && props.color};
    border: 1px solid ${props => props.color && props.color};;
    padding: 10px 15px;
    border-radius: .2em;
    transition: all .6s;


    &:hover{
        cursor: pointer;
        color: white;
        box-shadow: inset 6.5em 0 0 0 ${props => props.color && props.color};

        transition: all .6s;
    }
`

export const LightenButton = ({children, Color}) => {
    return <LightenButtonSyle color={Color}>{children}</LightenButtonSyle>
}

LightenButton.defaultProps = {
    Color: Color.primary,
}