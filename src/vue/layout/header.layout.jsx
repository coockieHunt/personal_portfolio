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

            &:hover{
                color: red;
            }
        }
    }
`

const link_navigation = [
    {title : "un", to : "top"},
    {title : "deux", to : "deux"},
    {title : "trois", to : "trois"},
]

const BuildNavigation = () => {
    let count = 0;
    const rslt = link_navigation.map((i, k) => {
        count = count + 1;
        return <li key={'nav_' + count}>{count + '. ' + i.title}</li>
    })

    return rslt
}

export const HeaderLayout = () => {
    return (
        <Container>
            <div className="left">Logo</div>
            <div className="right">
                <Navigation>
                    <ul><BuildNavigation/></ul>
                    hey je suis une statue bar 😍
                </Navigation>
            </div>
            
        </Container>
    )
}