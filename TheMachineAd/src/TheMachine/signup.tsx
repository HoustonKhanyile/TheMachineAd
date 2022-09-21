import React from "react";
import { useCurrentFrame, Img, staticFile } from "remotion";
import  GoogleFontLoader  from 'react-google-font-loader';

export const Googlefonts = () => {
   <GoogleFontLoader>
        font = {[
            {font: 'Abril Fatface'}, {font: 'Nunito'}, {font: 'Poppins'}, {font: 'SecularOne'}
        ]}
   </GoogleFontLoader>
};

export const Signup_image: React.FC = () => {
    const frame = useCurrentFrame();

    return<Img style={{
        position: 'absolute',
        top: '380px',
        left: '410px',
        width: '230px',
        height: 'auto'
    }} src={staticFile("Clave_Baja-removebg-preview.png")} />
};

export const Signup_form: React.FC = () => {
    const frame = useCurrentFrame();
    const reservation_form: React.CSSProperties = {position: 'absolute', top: '100px', right: '0px', width: '275px', marginTop: '50px'};
    const form_inline: React.CSSProperties = {display: 'flex', flexDirection: 'column', flexFlow: 'column nowrap', alignItems: 'center'};
    const form_label: React.CSSProperties = {margin: '5px 10px 5px 0'};
    const form_input: React.CSSProperties = {display: 'block', margin: '5px 10px 5px 0', padding: '10px', backgroundColor: '#fff', border: '1px solid #ddd'};
    const form_button: React.CSSProperties = {padding: '10px 20px', backgroundColor: 'dodgerblue', border: '1px solid #ddd', color: 'white', cursor: 'pointer', marginTop: '6px'};
    const form_last_name: React.CSSProperties = {marginRight: '0px'};
    const form_artist_name: React.CSSProperties = {marginRight: '0px'};
    const know_more: React.CSSProperties = {position: 'relative', left: '0px', marginTop: '20px', width: '275px', height: 'fitContent', textAlign: 'center', fontFamily: 'Abril Fatface, sans-serif', fontSize: '14px'};
    const glass: React.CSSProperties = {position: 'absolute',height: '629px',width: '274px',right: '241px',top: '220px',borderRadius: '15px',boxShadow: '0px 5px 15px rgba(0, 0, 0, .5)',background: ' #296c8b',margin: '15px',color: 'white', fontFamily: 'Poppins', transform: 'rotate(20deg)'};
    const logo: React.CSSProperties = {position: 'absolute',height: '102px',width: '121px',left: '77px',top: '39px',borderRadius: '0px'};
    const logo_img: React.CSSProperties = {position: 'absolute', height: '57.599998474121094px', width: '100px', left: '12px', top: '31px'};
    const company: React.CSSProperties = {position: 'relative',top: '79px', marginLeft: '12px', fontSize: '9px'};

    return(
        <>
        <div style={glass} className="glass">
            <div style={logo} className="logo">
                <Img style={logo_img} src={staticFile("The_Machine_2.png")} />;
            </div>
            <div style={reservation_form} className="reservation-form">
                <form style={form_inline} className="form-inline" action="/action_page.php">
                    <div className="form-name" id="form-details">
                    <label style={form_label}>Name:</label>
                    <input style={form_input} type="name" name="Name" id="name" placeholder="Name" />
                    </div>
                    <div style={form_last_name} className="form-last-name" id="form-details">
                    <label style={form_label} >Last Name:</label>
                    <input style={form_input} type="last name" name="last name" id="last-name" placeholder="Last Name" />
                    </div>
                    <div style={form_artist_name} className="form-artist-name" id="form-details">
                    <label style={form_label}> Artist Name:</label>
                    <input style={form_input} type="artist name" name="artist name" id="artist-name" placeholder="Artist Name" />
                    </div>
                    <div className="form-email" id="form-details">
                    <label style={form_label}>Email:</label>
                    <input style={form_input} type="email" name="email" id="email" placeholder="Email" />
                    </div>
                    <button style={form_button} type="submit" className="submit-button">Submit</button>
                </form>
                <div style={know_more} className="know-more">
                    To know more about <q>TheMachine</q> <br /> <a href="F.A.Q.html">click here</a>
                </div>
                <div style={company} className="company">
                     @2022 CVEST MUSIC SOLUTIONS&reg;. ALL RIGHTS RESERVED.
                </div>
            </div>
        </div>
        </>
    )
};

export const Signup_text: React.FC = () => {
    const frame = useCurrentFrame();
    const ___text_box_1: React.CSSProperties = {display: 'none',position: 'relative', top: '385px', left: '664px', width: '310px', height: '350px', border: '5px', borderStyle: 'solid', borderRadius: '20px', color: 'white', textAlign: 'center',fontFamily: 'Abril Fatface, sans-serif', fontSize: '48px',fontWeight: 'bolder',fontStyle: 'normal',margin: '10px'};

    return(
        <svg viewBox='0 0 1800 1000' style={{margin: '20px'}}>
            <path d='m 340 230 l 320 300 c 0 0 46 45 -32 95 l -290 140 ' style={{fill:'#00ff00', stroke:'#ff00bf', strokeWidth:'20px'}} />
            
            <path d='m 720 460 l 0 -40 c 0 0 0 -60 60 -60 l 60 0' style={{fill:'none', stroke:'green', strokeWidth:'20px'}} />
            <path d='' style={{fill:'none', stroke:'green', strokeWidth:'5px'}} />
            <path d='' style={{fill:'none', stroke:'green', strokeWidth:'5px'}} />
            <path d='m 1180 600 l 0 40 c 0 0 0 60 -60 60 l -60 0 ' style={{fill:'none', stroke:'green', strokeWidth:'20px'}} />
            
            <text x='' y='' style={{}}>
                <tspan x='770' y='450' style={{fill:'blue',fontFamily: 'Nunito, sans-serif', fontSize:'35px', fontStyle:'normal', fontWeight:'900'}}>"DO YOUR CAREER</tspan>
                <tspan x='790' y='520' style={{fill:'blue',fontFamily: 'Nunito, sans-serif', fontSize:'35px', fontStyle:'normal', fontWeight:'900'}}>A FAVOR SIGNUP</tspan>
                <tspan x='770' y='580' style={{fill:'blue',fontFamily: 'Nunito, sans-serif', fontSize:'35px', fontStyle:'normal', fontWeight:'900'}}>YOU WON'T REGRET</tspan>
                <tspan x='930' y='650' style={{fill:'blue',fontFamily: 'Nunito, sans-serif', fontSize:'35px', fontStyle:'normal', fontWeight:'900'}}>IT"</tspan>
            </text>
        </svg>
    )
};
