import React from "react";
import { useCurrentFrame, staticFile, Img } from "remotion";

export const Logo_img: React.FC = () => {
    const frame = useCurrentFrame();

    return<Img style={{
        position: 'absolute',
        top: '530px',
        left: '890px',
        width: '130px',
        height: 'auto',
        zIndex: 4
    }} src={staticFile("The_Machine_2.png")} />
};

export const Logo_text_1: React.FC = () => {
    const frame = useCurrentFrame();

    return(
        <svg viewBox='0 0 1800 1000' style={{margin:'20px'}}>
            <defs>
                <path id='circle' d='m 730 510 a 2 3 0 0, 1340 300' style={{stroke:'green', strokeWidth:'10px', fill:'white'}}/>
            </defs>
            <text style={{fill:'#6600cc', fontFamily:'Nunito, sans-serif', fontSize:'35px', fontWeight:'900', color:'white'}}>
                <textPath xlinkHref='#circle'>
                        WELL, WORRY NO MORE.
                </textPath>
            </text>
            <text x='600' y='730' style={{fill:'#6600cc', fontFamily: 'Nunito, sans-serif', fontSize:'35px', fontWeight:'900'}}>
                ARTIST MOST POWERFUL TOOL.
            </text>
            <circle cx='900' cy='530' r='140' style={{fill:'none', stroke:'red', strokeWidth:'10px'}} />
            <circle cx='900' cy='530' r='110' style={{fill:'none', stroke:'green', strokeWidth:'10px'}} />
            <circle cx='900' cy='530' r='80' style={{fill:'none', stroke:'brown', strokeWidth:'10px'}} />
        </svg>
    )
};

export const Company_logo: React.FC = () => {
    const frame = useCurrentFrame();

    return<Img style={{
            position:'absolute',
            top:'450px',
            left:'640px',
            width:'220px',
            height: 'auto',
            zIndex: 4
        }} src={staticFile("favicon.png")} />
};

export const Company_text: React.FC = () => {
    const frame = useCurrentFrame();

    return(
        <svg viewBox='0 0 1800 1000' style={{ margin: '20px'}}>
            <path d=' m 860 400 v 0 220' style={{fill:'none', stroke:'green', strokeWidth:'10px'}}/>
            <text x='880' y='470' style={{fill:'#6600cc', fontFamily:'Nunito, sans-serif', fontSize:'35px', fontWeight:'900',fontStyle:'normal'}}>INNOVATION</text>
            <text x='880' y='520' style={{fill:'#6600cc', fontFamily:'Nunito, sans-serif', fontSize:'35px', fontWeight:'900',fontStyle:'normal'}}>WITH </text>
            <text x='880' y='570' style={{fill:'#6600cc', fontFamily:'Nunito, sans-serif', fontSize:'35px', fontWeight:'900',fontStyle:'normal'}}>A RHYTHM</text>
        </svg>
    )
};