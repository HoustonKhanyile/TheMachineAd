import { useCurrentFrame } from "remotion";
import React from "react";

export const Color_design_1: React.FC = () => {
    const frame = useCurrentFrame();

    return(
        <div style={{
            position: "absolute",
            top: "50px",
            left: "500px",
            width: "595px",
            height: "636px",
            backgroundColor: "fuchsia",
            borderBottomRightRadius: "50px",
            opacity: "0.7"
        }}
        >

        </div>
    );
};