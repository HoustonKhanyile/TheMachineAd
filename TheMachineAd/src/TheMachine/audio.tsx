import { Audio, useCurrentFrame } from "remotion";
import audio from "./audio.mp3";

export const M_audio: React.FC = () => {

    return(

        <Audio src={audio} />
    )
};