import { AbsoluteFill, Sequence, useCurrentFrame, Audio, interpolate } from 'remotion';
import {useVideoConfig} from "remotion";
import { Text_box_1 } from './TheMachine/text-box-1';
import { Artist_pic_1 } from "./TheMachine/artist_pic_1";
import { Audience_image, Audience_image_2, Audience_image_text, Audience_image_text_2 } from "./TheMachine/audience_image";
import React from 'react';
import { Logo_img, Logo_text_1, Company_logo, Company_text } from './TheMachine/logo_design';
import { Info_img, Info_text } from './TheMachine/info';
import { Signup_form, Signup_image, Signup_text } from './TheMachine/signup';
import audio from "./audio.mp3";
import  Zula from  "./Zula.mp3";
import { Googlefonts } from './TheMachine/signup';

export const TheMachine: React.FC = () => {
    const frame = useCurrentFrame();
    const {fps, durationInFrames, width, height} = useVideoConfig();

    return (
        <AbsoluteFill  style={{backgroundColor: 'rgb(255, 51, 119, 0.3)'}}>
            <Audio src={audio} startFrom={40} endAt={1160} />
            <Audio src={Zula} startFrom={330} endAt={1450} volume={0.2} />
            <svg viewBox='0 0 1800 1000' style={{ margin: "50px" }}>
                {/*
                <path d='M 100 0 V 0 1000' stroke='blue' strokeWidth="4px" fill='none' />
                <path d='M 200 0 V 0 1000' stroke='blue' strokeWidth="4px" fill='none' />
                <path d='M 300 0 V 0 1000' stroke='blue' strokeWidth="4px" fill='none' />
                <path d='M 400 0 V 0 1000' stroke='blue' strokeWidth="4px" fill='none' />
                <path d='M 500 0 V 0 1000' stroke='blue' strokeWidth="4px" fill='none' />
                <path d='M 600 0 V 0 1000' stroke='blue' strokeWidth="4px" fill='none' />
                <path d='M 700 0 V 0 1000' stroke='blue' strokeWidth="4px" fill='none' />
                <path d='M 800 0 V 0 1000' stroke='blue' strokeWidth="4px" fill='none' />
                <path d='M 900 0 V 0 1000' stroke='blue' strokeWidth="4px" fill='none' />
                <path d='M 1000 0 V 0 1000' stroke='blue' strokeWidth="4px" fill='none' />
                <path d='M 1100 0 V 0 1000' stroke='blue' strokeWidth="4px" fill='none' />
                <path d='M 1200 0 V 0 1000' stroke='blue' strokeWidth="4px" fill='none' />
                <path d='M 1300 0 V 0 1000' stroke='blue' strokeWidth="4px" fill='none' />
                <path d='M 1400 0 V 0 1000' stroke='blue' strokeWidth="4px" fill='none' />
                <path d='M 1500 0 V 0 1000' stroke='blue' strokeWidth="4px" fill='none' />
                <path d='M 1600 0 V 0 1000' stroke='blue' strokeWidth="4px" fill='none' />
                <path d='M 1700 0 V 0 1000' stroke='blue' strokeWidth="4px" fill='none' />

                <path d='M -31 100 H 0 1880' stroke='blue' strokeWidth='4px' fill='none' />                
                <path d='M -31 200 H 0 1880' stroke='blue' strokeWidth='4px' fill='none' />                
                <path d='M -31 300 H 0 1880' stroke='blue' strokeWidth='4px' fill='none' />                
                <path d='M -31 400 H 0 1880' stroke='blue' strokeWidth='4px' fill='none' />                
                <path d='M -31 500 H 0 1880' stroke='blue' strokeWidth='4px' fill='none' />                
                <path d='M -31 600 H 0 1880' stroke='blue' strokeWidth='4px' fill='none' />                
                <path d='M -31 700 H 0 1880' stroke='blue' strokeWidth='4px' fill='none' />                
                <path d='M -31 800 H 0 1880' stroke='blue' strokeWidth='4px' fill='none' />                
                <path d='M -31 900 H 0 1880' stroke='blue' strokeWidth='4px' fill='none' />                
                <path d='M -31 1000 H 0 1880' stroke='blue' strokeWidth='4px' fill='none' />                
                */}
                
                <path d='M -31 600 L 500 1000 -31 1000 -31 600 Z' stroke='rgb(153, 0, 51)' strokeWidth='10px' fill='rgb(153, 0, 51)' />                
                <path d='M 1880 570 L 1300 1000 1830 1000 1830 610 Z' stroke='rgb(153, 0, 51)' strokeWidth='10px' fill='rgb(153, 0, 51)' />                
                <path d='M 1300 00 L 1830 400 1830 0 1830 0 Z' stroke='rgb(153, 0, 51)' strokeWidth='10px' fill='rgb(153, 0, 51)' />                
                <path d='M 500 0 L -31 400 -31 0 500 0 Z' stroke='rgb(153, 0, 51)' strokeWidth='10px' fill='rgb(153, 0, 51)' />                
                
                <polygon points='500 950 1300 950, 1300 950 1760 600, 1760 600 1760 400, 1760 400 1300 50, 1300 50 500 50, 500 50 50 400, 50 400 50 600' 
                style={{stroke: 'rgb(153, 0, 51)', strokeWidth:'10px', fill: 'rgb(153, 0, 51)'}} />
       
                <path d='m 500 100 l 0 80 80 -80 -80 0' style={{fill:'none', stroke:'green', strokeWidth:'5px'}}/>
                <path d='m 500 320 l 80 0 -80 -90 0 90' style={{fill:'none',stroke:'green', strokeWidth:'5px'}} />
                <path d='m 1120 320 l 80 0 0 -90  -80 90' style={{fill:'none',stroke:'green', strokeWidth:'5px'}} />
                <path d='m 1120 100 l 80 0 0 80 -80 -80' style={{fill:'none',stroke:'green', strokeWidth:'5px'}} />
                
                <polygon points='600 320 1100 320, 1100 320 1200 200, 1200 200 1100 100, 1100 100 600 100, 600 100 500 200' 
                style={{fill:'none', stroke:'green', strokeWidth:'5px', opacity:'1'}} />
                <defs>
                    <filter id='c1' x='0' y='0' width='200%' height='200%'>
                        <feOffset result='offOut' in='SourceGraphic' dx='7' dy='7' />
                        <feGaussianBlur result='offOut' in='SourceGraphic' dx='7' dy='7' />
                        <feBlend in='SourceGraphic' in2='offOut'  mode='normal'/>
                    </filter>
                </defs>   
                <text x="750" y="160"  style={{fill:'white', letterSpacing:'0px', stroke:'#ff0066', strokeWidth:'10px', fontFamily:'Abril Fatface, sans-serif', fontSize:'60px', fontWeight:'900', filter: 'url(#c1)'}}>CVEST
                    <tspan x="750" y="230">MUSIC</tspan>
                    <tspan x="650" y="300">SOLUTIONS</tspan>
                </text>
            </svg>
            
            <Sequence from={0} durationInFrames={95}>
                <Text_box_1 />
                <Artist_pic_1 />
            </Sequence>
        
        
            <Sequence from={93} durationInFrames={39}>
                <Audience_image_text />
                <Audience_image />
            </Sequence>
        
            <Sequence from={136} durationInFrames={41}>
                <Audience_image_text_2 />
                <Audience_image_2 />
            </Sequence>
        
        
            <Sequence from={175} durationInFrames={175}>
                <Logo_text_1 />
                <Logo_img />
            </Sequence>
        
        
            <Sequence from={348} durationInFrames={511}>
                <Info_img />
                <Info_text />
            </Sequence>
        
        
            <Sequence from={858} durationInFrames={137}>
                <Signup_image />
                <Signup_text />
                <Signup_form />
            </Sequence>
        
            <Sequence from={994} durationInFrames={128}>
                <Company_text />
                <Company_logo />
            </Sequence>
        
        
            <div style={{
                position: "absolute",
                bottom: "100px",
                left: "500px",
                width: "900px",
                height: "auto",
                margin: "20px",
                textAlign: "center",
                fontFamily: "Abril Fatface, sans-serif",
                fontSize: "24px",
                fontStyle: "normal",
                color: "black",
                opacity: "1"
            }}
            >
                <q>TheMachine</q> is a CVEST MUSIC SOLUTIONS&reg; product subject to terms & conditions of CVEST MUSIC SOLUTIONS&reg;. 
                Which are in line with various jurisdictions that the company operates in. All information contained in the 
                informacial may be subject to change depending on various circumstances that may arise further down the line. 
                All rights reserved.
            </div>
        
        </AbsoluteFill>
    )
};
