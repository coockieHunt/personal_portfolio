// style
import * as Navigation_style from'./header_style'

const link_navigation = [
    {title : "un", to : "top"},
    {title : "deux", to : "deux"},
    {title : "trois", to : "trois"},
]

const BuildNavigation = () => {
    let count = 0;
    const rslt = link_navigation.map(i => {
        count = count + 1;
        return <li key={'nav_' + count}>{count + '. ' + i.title}</li>
    })

    return rslt
}

export const HeaderLayout = () => {
    return (
        <Navigation_style.Container>
            <div className="left">Logo</div>
            <div className="right">
                <Navigation_style.Navigation>
                    <ul><BuildNavigation/></ul>
                    hey je suis une statue bar 😍
                </Navigation_style.Navigation>
            </div>
            
        </Navigation_style.Container>
    )
}