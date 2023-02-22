// package
import styled from "styled-components";


// style
const Container = styled.div`
    padding: 0 15px;

    height: 10vh;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Navigation = styled.nav`
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
        }
    }
 
`

export const HeaderLayout = () => {
    return (
        <Container>
            <div className="left">Logo</div>
            <div className="right">
                <Navigation>
                    <ul>
                        <li>1. un</li>
                        <li>2. deux</li>
                        <li>3. trois</li>
                        <li>4. tamère</li>
                    </ul>
                hey je suis une statue bar 😍
                </Navigation>


                
            </div>
            
        </Container>
    )
}