import { Col, Row } from "antd"
import { FC } from "react"
import './container.css'
import {Menu} from "../menu/menu"

export const Container = () => {
    return (
        <Row align={"middle"} justify={"center"} className={"container-form-wrapper"}>
            <div className={"background"}>
            </div>
            <div className={"content"}>
                <div className={"menu"}>
                    <Menu/>
                </div>
            </div>
        </Row>
    )
}

