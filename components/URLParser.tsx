import { PlasmicCanvasContext } from '@plasmicapp/loader-nextjs';
import {useContext, useEffect} from "react";
import React from "react";
import {FormContext} from "./context/FormContext";

// urlParam -> SFField
export function URLParser({config, showInEditor}:{config: Record<string, string>, showInEditor: boolean}) {
    const inEditor = useContext(PlasmicCanvasContext);
    const formContext = useContext(FormContext);

    useEffect(() => {
        if (!inEditor) {
            const url = new URL(window.location.href);
            const params = url.searchParams;
            const paramsArray = Array.from(params.entries());
            paramsArray.forEach(([key, value]) => {
                const fieldName = config && config[key] || key
                const input: HTMLInputElement | null = document.querySelector(`[name="${fieldName}"]`);
                if (input) {
                    input.value = value;
                }
            });
            formContext.setUrlParsed(true);
        }
    }, [config, formContext, inEditor]);

    return (
        <>
            {inEditor ? showInEditor && (<div>URL parser placeholder</div>) : (<></>)}
        </>
    );
}