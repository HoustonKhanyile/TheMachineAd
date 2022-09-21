import React from "react";
import { Img, staticFile, useCurrentFrame } from "remotion";
import { abrilFatface, Nunito, Poppins, rubikDirt, secularOne} from "./font.css";


export const Info_img: React.FC = () => {
    const frame = useCurrentFrame();

    return<Img style={{
        position: 'absolute',
        left: '220px',
        top: '200px',
        WebkitBoxReflect:'right 700px'
    }} src={staticFile("Modern_Senior_Photography_Art_of_Aperture-removebg-preview.png")} />
};

export const Info_text: React.FC = () => {
    const frame = useCurrentFrame();
    

    return(
        <svg viewBox='0 0 1800 1000' style={{margin:'20px'}}>
            <text x='560' y='250' style={{fill:'#6600cc', fontFamily: 'Nunito, sans-serif', fontSize:'30px', fontWeight:'bold'}}>
                <tspan x='560' y='380'>A commercial system that helps artist</tspan> 
                <tspan x='560' y='420'>achieve commercial success in the market.</tspan>
                <tspan x='550' y='460'><q>TheMachine</q> consist of a</tspan>

                <tspan x='600' y='500'>Data Analytics System</tspan>
                <tspan x='600' y='530'>Brand Management System</tspan>
                <tspan x='600' y='560'>Advertising System</tspan>
                <tspan x='600' y='590'>Financial System</tspan>

                <tspan x='560' y='630'>using these tools <q>TheMachine</q> helps artist</tspan> 
                <tspan x='560' y='670'>achieve their commercial goals as well as</tspan> 
                <tspan x='560' y='710'>have successful careers within the music industry.</tspan> 
                <tspan x='550' y='740'><q>TheMachine</q> is artist most powerful tool.</tspan> 
            </text>
            <circle cx='580' cy='490' r='5' style={{fill:'#6600cc', stroke:'#6600cc', strokeWidth:'1px' }} />
            <circle cx='580' cy='520' r='5' style={{fill:'#6600cc', stroke:'#6600cc', strokeWidth:'1px' }} />
            <circle cx='580' cy='550' r='5' style={{fill:'#6600cc', stroke:'#6600cc', strokeWidth:'1px' }} />
            <circle cx='580' cy='580' r='5' style={{fill:'#6600cc', stroke:'#6600cc', strokeWidth:'1px' }} />
        </svg>
    )
};

