import {PlasmicCanvasContext} from '@plasmicapp/loader-nextjs';
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import {useContext} from "react";
import React from "react";
import {ReCaptchaExecutor} from "./ReCaptchaExecutor";

export function ReCaptcha({apiKey, showInEditor, inputId}: {apiKey: string, showInEditor: boolean, inputId: string}) {
    const inEditor = useContext(PlasmicCanvasContext);

    return (
        <>
            {inEditor ?
                (showInEditor ?
                    (<div>Verifying recaptcha - {apiKey}</div>) :
                    (<></>)) :
                ( apiKey &&
                    <GoogleReCaptchaProvider reCaptchaKey={apiKey}>
                        <ReCaptchaExecutor inputId={inputId}/>
                    </GoogleReCaptchaProvider>
                )
            }
        </>
    );
}