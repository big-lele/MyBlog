import { Col, Row } from "antd"
import { FC } from "react"
import './index.css'
import {Menu} from "../../components/menu/menu"
import {Title} from "./title/title"

const Home: FC = () => {
    return (
        <Row align={"middle"} justify={"center"} className={"home-form-wrapper"}>
            <Row align={"middle"} justify={"center"} className={"container"}>
                <Col className={"menu"}>
                    <Menu/>
                </Col>
                <Col className={"content"}>
                    <Title/>
                </Col>
            </Row>
        </Row>
    )
}

export default Home
