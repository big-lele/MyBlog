import { Col, Row } from "antd"
import './menu.css'
import Navigation from "./Navigation"
import { NavLink } from "react-router-dom";

export const Menu = () => {
    return (
        <Row align={"middle"} justify={"center"} className={"menu-form-wrapper"}>
            <Row align={"middle"} justify={"center"} className={"avatar"}>
            </Row>
            <div className={"menu-content"}>
                <div className={'navigation-block'}>
                    <Navigation title={'Home'} link={'./'}/>
                </div>
                <div className={'navigation-block'}>
                    <Navigation title={'About Me'} link={'./'}/>
                </div>
                <div className={'navigation-block'}>
                    <Navigation title={'Resume'} link={'./'}/>
                </div>
            </div>
        </Row>
    )
}
