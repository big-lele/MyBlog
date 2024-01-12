import { Col, Row } from "antd"
import { FC } from "react"
import './index.css'
import {Menu} from "../../components/menu/menu"
import {Title} from "./title/title"
import {Container} from "../../components/container/container"

const Home: FC = () => {
    return (
        <Row align={"middle"} justify={"center"} className={"home-form-wrapper"}>
            <Container/>
            <div className={"home-content"}>
                <div className={"home-photo"}>
                    <Title/>
                    <div className={"home-icp"}>
                        <a href="https://beian.miit.gov.cn/" target="_blank">湘ICP备2024042247号</a>
                    </div>
                </div>
            </div>
        </Row>
    )
}

export default Home
