// style
import * as Navigation_Style from'./header_style'

//component
import { LightenButton } from '../../component/button.component';

const link_navigation = [
    {title : "un", to : "top"},
    {title : "deux", to : "deux"},
    {title : "trois", to : "trois"},
]

const BuildNavigation = () => {
    let count = 0;
    const rslt = link_navigation.map(i => {
        count = count + 1;
        return <li key={'nav_' + count}><span>{count}. </span>{i.title}</li>
    })

    return rslt
}

export const HeaderLayout = () => {
    return (
        <Navigation_Style.Container>
            <div className="left">Logo</div>
            <div className="right">
                <Navigation_Style.Navigation>
                    <ul><BuildNavigation/></ul>
                    <div className='button'>
                        <LightenButton>Resum</LightenButton>
                        <LightenButton Color={"#967bb6"}>Github</LightenButton>
                    </div>
                </Navigation_Style.Navigation>
            </div>
            
        </Navigation_Style.Container>
    )
}