import { Col, Row, Button} from "antd"
import { FC } from "react"
import './index.css'
import {Menu} from "../../components/menu/menu"
import {Container} from "../../components/container/container"
import { ReactComponent as GithubImage } from "./data/github.svg"


const AboutMe = () => {
    return (
        <Row align={"middle"} justify={"center"} className={"aboutme-form-wrapper"}>
            <Container/>
            <Row className={"aboutme-content"}>
                <Row className={"aboutme-detail"}>

                    <Row className="grid-container">
                        <div className="name">
                            <Row align={"middle"} justify={"center"} className={"name-background"}>
                                <div className={"text"}>
                                    Mingliao Zhao
                                </div>
                            </Row>
                        </div>
                        <div className="school">
                            <Row align={"middle"} justify={"center"} className={"school-background"}>
                                <div className={"school-content"}>
                                    <div className={"text"}>
                                        Postgraduate at SMCLab
                                    </div>
                                    <div className={"text"}>
                                        Sun Yat-sen University
                                    </div>
                                </div>
                            </Row>

                        </div>
                        <Row className="contact">
                            <Row align={"middle"} justify={"center"} className={"contact-background"}>
                                <Row align={"middle"} justify={"center"} className={"contact-content"}>
                                    <div className={"text"}>
                                        Email
                                    </div>
                                    <div className={"text"}>
                                        zhaomliao@mail2.sysu.edu.cn
                                    </div>
                                    <div className={"text"}>
                                        GitHub
                                    </div>
                                    <div className={"text"}>
                                        <Button className={"github-link"} type={"link"} href={"https://github.com/big-lele"} target={"_blank"}>
                                            <GithubImage/>
                                        </Button>
                                    </div>
                                </Row>
                            </Row>
                        </Row>
                        <div className="maeng">
                            <Row align={"middle"} justify={"center"} className={"maeng-background"}>
                                <Row align={"middle"} justify={"center"} className={"maeng-content"}>
                                    <a href="https://www.sysu.edu.cn/" target="_blank" className="sysu">
                                    </a>
                                    <div className={"text"}>
                                        M.Eng in Computer Science and Technology
                                    </div>
                                    <div className={"text"}>
                                        Sep.2022-Present Guangzhou
                                    </div>
                                </Row>
                            </Row>
                        </div>
                        <div className="be">
                            <Row align={"middle"} justify={"center"} className={"be-background"}>
                                <Row align={"middle"} justify={"center"} className={"be-content"}>
                                    <a href="https://www.scut.edu.cn/new/" target="_blank" className="scut">
                                    </a>
                                    <div className={"text"}>
                                        B.E. in Information Engineering
                                    </div>
                                    <div className={"text"}>
                                        Sep.2018-Jun.2022 Guangzhou
                                    </div>
                                </Row>
                            </Row>
                        </div>
                    </Row>

                </Row>

            </Row>
        </Row>
    )
}

export default AboutMe
