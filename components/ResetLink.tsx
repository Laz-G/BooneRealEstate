import {PlasmicCanvasContext} from '@plasmicapp/loader-nextjs';
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import {useCallback, useContext, useEffect, useState} from "react";
import React from "react";
import {ReCaptchaExecutor} from "./ReCaptchaExecutor";
import {ReactNodeLike} from "prop-types";

export function ResetLink({className, children}: {children: ReactNodeLike, className?: string}) {
    const [currentElement, setCurrentElement] = useState<HTMLDivElement | null>(null);

    const handleRefChange = useCallback((node: HTMLDivElement | null) => {
        setCurrentElement(node);
    }, []);

    useEffect(() => {
        if (currentElement) {
            const form = currentElement.closest('form');
            currentElement.querySelector('a')?.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                form?.reset();
            });
        }
    }, [currentElement]);
    
    return (
        <div className={className} ref={handleRefChange}>
            {children}
        </div>
    );
}