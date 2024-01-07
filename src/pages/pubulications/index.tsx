import { Col, Row } from "antd"
import { FC } from "react"
import './index.css'
import {Menu} from "../../components/menu/menu"
import {Container} from "../../components/container/container"

const Publications = () => {
    return (
        <Row align={"middle"} justify={"center"} className={"publications-form-wrapper"}>
            <Container/>
            <Row className={"publications-content"}>
                <Row align={"middle"} justify={"center"} className={"publications-background"}>
                    <div className={"publications-detail"}>
                        <div className={"text-publication"}>
                            M. Zhao, K. Zhao, Z. Zhou and X. Chen, "Edge Resource Autoscaling for Hierarchical Federated Learning Over Public Edge Platforms," 2022 IEEE UIC.
                            <a href="https://ieeexplore.ieee.org/abstract/document/10189760" target="_blank">[Link]</a>
                        </div>
                    </div>
                </Row>
            </Row>
        </Row>
    )
}

export default Publications