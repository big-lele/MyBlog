import { Col, Row } from "antd"
import './title.css'
import useTypewriter from 'react-typewriter-hook'
import React, {useState, useEffect} from "react";


export const Title = () => {

    const first_text = "Welcome to";
    const second_text = "Mingliao's Blog!";

    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (text1 !== first_text) {
                setText1(first_text.slice(0, text1.length + 1));
            }
            else if (text1 === first_text){
                setText2(second_text.slice(0, text2.length + 1));
            }
        }, 200);
        return () => clearTimeout(timeout);
    }, [text1, text2]);


    return (
        <Row align={"middle"} justify={"center"} className={"title"}>
            <Row className={"home-text"}>
                {text1}
            </Row>
            <Row className={"home-text"}>
                {text2}
            </Row>
        </Row>
    )
}


