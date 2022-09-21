import { AbsoluteFill, interpolate, spring, useCurrentFrame } from "remotion";
import { useVideoConfig } from "remotion";
import React from "react";
import { Googlefonts } from "./signup";

export const Text_box_1: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps, durationInFrames} = useVideoConfig();
    const motion = spring({frame, fps, from: 0, to: 1, config:{ stiffness: 100}});
    const opacity = interpolate(frame, [0,90], [0,1]);

    return (
        <svg viewBox='0 0 1800 1000' style={{margin:'20px'}}>
            <path d='m 380 510 l 0 0 600 -100' style={{fill:'red', stroke:'red', strokeWidth:'120px'}} />
            <path d='m 380 600 l 0 0 600 -100' style={{fill:'green', stroke:'green', strokeWidth:'120px'}} />

            <defs>
                <path id='line' d='m 400 520 l 0 0 600 -100' style={{transform: `translate(${motion})`,fill:'blue', stroke:'blue', strokeWidth:'10px'}} />
                <path id='line1' d='m 400 620 l 0 0 600 -100' style={{transform: `translate(${motion})`, fill:'blue', stroke:'blue', strokeWidth:'10px'}} />
            </defs>

            <text style={{transform: `translate(${motion})`, fill:'#6600cc', fontFamily:'Nunito, sans-serif', fontSize:'35px', fontWeight:'900', color:'white'}}>
                <textPath xlinkHref='#line'>ARE YOU AN ARTIST TRYING</textPath>
                <textPath xlinkHref='#line1'>TO BREAK INTO THE MARKET</textPath>
            </text>
        </svg>
    );
};

