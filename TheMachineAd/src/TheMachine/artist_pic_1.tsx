import React from "react";
import { Img, staticFile, useCurrentFrame } from "remotion";

export const Artist_pic_1: React.FC = () => {
    const frame = useCurrentFrame();

        return<Img style={{
                position: "absolute",
                top: "303px",
                right: "419px",
                width: "auto", 
                height: "auto",
                borderRadius: "20px"
            }}
            src={staticFile("Marcus_Miller__The_Renaissance_Tour____Black_Sea_JAZZ_FESTIVAL-removebg-preview.png")} />;

};

