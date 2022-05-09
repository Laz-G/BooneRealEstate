import { PlasmicCanvasContext } from '@plasmicapp/loader-nextjs';
import {useContext, useEffect} from "react";
import React from "react";

// urlParam -> SFField
export function URLParser({config, showInEditor}:{config: Record<string, string>, showInEditor: boolean}) {
    const inEditor = useContext(PlasmicCanvasContext);
    useEffect(() => {
        if (!inEditor) {
            const url = new URL(window.location.href);
            const params = url.searchParams;
            const paramsArray = Array.from(params.entries());
            paramsArray.forEach(([key, value]) => {
                const input: HTMLInputElement | null = document.querySelector(`#${config[key] || key}`);
                if (input) {
                    input.value = value;
                }
            });
        }
    }, [config, inEditor]);

    return (
        <>
            {inEditor ? showInEditor && (<div>URL parser placeholder</div>) : (<></>)}
        </>
    );
}