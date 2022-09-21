import { Img, staticFile, useCurrentFrame } from "remotion";
import { Googlefonts } from "./signup";


export const Audience_image: React.FC = () => {
    const frame = useCurrentFrame();

    return<Img style={{
            position: "absolute",
            top: "400px",
            left:"450px",
            margin: "auto",
            width:"550px",
            height: "auto",
            borderRadius: "20px",
            
        }}
        src={staticFile("Pexels-thibault-trillet-167491.jpg")} />
    
};

export const Audience_image_text: React.FC = () => {
    const frame = useCurrentFrame();

    return(
        
        <svg viewBox='0 0 1800 1000' style={{margin:'20px'}}>
            <path d="m 1100 450 l 0 100 550 -50 0 -100 z " style={{fill:'green', stroke:'green', strokeWidth:'5px'}} />
            <path d="m 1120 480 l 0 100 500 -50 0 -100 z " style={{fill:'red', stroke:'red', strokeWidth:'5px'}} />
            <text x='1100' y='645' style={{fill:'#6600cc', fontFamily: 'Nunito, sans-serif', fontSize:'35px', fontWeight:'900', transform:'rotate(-6deg)'}}>BUT INSTEAD OF THIS</text>
        </svg>
        
    )
};

export const Audience_image_2: React.FC = () => {
    const frame = useCurrentFrame();

    return<Img style={{
        position: 'absolute',
        top: '500px',
        left: '800px',
        margin: "auto",
        width: "auto",
        height: "auto"
    }}
    src={staticFile("home_-_Marcus_Miller-removebg-preview.png")} />;
}

export const Audience_image_text_2: React.FC = () => {
    const frame = useCurrentFrame();

    return(
        <svg viewBox='0 0 1880 1000' style={{margin:'20px'}}>
            <path d='m 570 360 l 640 0 0 100 -640 0 z' style={{fill:'green', stroke:'green', strokeWidth:'5px'}} />
            <path d='m 600 400 l 580 0 0 100 -580 0 z' style={{fill:'brown', stroke:'brown', strokeWidth:'5px'}} />
            <text x='700' y='450' style={{fill:'#6600cc', fontFamily: 'Nunito, sans-serif', fontSize:'35px', fontWeight:'900'}}>YOU GETTING THIS</text>
        </svg>
    )
};

