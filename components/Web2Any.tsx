import {PlasmicCanvasContext} from '@plasmicapp/loader-nextjs';
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import {useContext} from "react";
import React from "react";
import {ReCaptchaExecutor} from "./ReCaptchaExecutor";

export function Web2Any({object, redirectUrl, errorRedirectURL}: {object: string, redirectUrl: string, errorRedirectURL: string}) {

    return (
        <>
            <input name="objectType" type="hidden" value={object} />
            { redirectUrl && <input name="redirectUrl" type="hidden" value={redirectUrl} /> }
            { errorRedirectURL && <input name="errorRedirectURL" type="hidden" value={errorRedirectURL} /> }
        </>
    );
}