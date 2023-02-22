// package
import styled from "styled-components";

//config
import { Color } from "../../config";

export const Container = styled.div`
    padding: 0 20px;

    height: 10vh;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Navigation = styled.nav`
    display: flex; 
    align-items: center;
    gap: 1.8em;

    & .button{
        display: flex; 
        gap: 1em;
    }

    & ul{
        text-decoration: none;

        & li {
            text-align: center;
            display: inline-block;
            padding: 0 .8em;
            cursor: pointer;

            & span{
                color: ${Color.primary}
            }

            &:hover{
                color: ${Color.primary};
                transition: all .4s
            }
        }
    }
`