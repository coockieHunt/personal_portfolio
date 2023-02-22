// package
import styled from "styled-components";

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
    gap: 2em;

    & ul{
        text-decoration: none;

        & li {
            text-align: center;
            display: inline-block;
            padding: 0 .8em;
            cursor: pointer;

            &:hover{
                color: red;
            }
        }
    }
`