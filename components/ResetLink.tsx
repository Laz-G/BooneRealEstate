import React, {useCallback, useContext, useEffect, useState} from "react";
import {ReactNodeLike} from "prop-types";
import {FormContext} from "./context/FormContext";
import {PlasmicCanvasContext} from "@plasmicapp/loader-nextjs";

export function ResetLink({
                              className,
                              trackedFields,
                              children
                          }: { children: ReactNodeLike, trackedFields: string[], className?: string }) {
    const [currentElement, setCurrentElement] = useState<HTMLDivElement | null>(null);
    const [showComponent, setShowComponent] = useState<boolean>(false);

    const inEditor = useContext(PlasmicCanvasContext);
    const formContext = useContext(FormContext);

    const handleRefChange = useCallback((node: HTMLDivElement | null) => {
        setCurrentElement(node);
    }, []);

    useEffect(() => {
        if (currentElement && formContext.urlParsed) {
            const form: HTMLFormElement | null = currentElement.closest('form');
            if (form) {
                const hasFillOut = trackedFields?.reduce((acc, fieldName) => {
                    const field: HTMLInputElement | null = form?.querySelector(`[name="${fieldName}"]`);
                    return acc || !!field?.value;
                }, false);

                setShowComponent(hasFillOut);

                currentElement.querySelector('a')?.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    trackedFields?.forEach(fieldName => {
                        const field: HTMLInputElement | null = form.querySelector(`[name="${fieldName}"]`);
                        if (field) {
                            field.value = '';
                        }
                    });
                    form?.reset();
                });
            }
        }
    }, [formContext.urlParsed, currentElement, trackedFields]);

    return (
        <div className={className} ref={handleRefChange} style={{display: (inEditor || showComponent)? 'initial' : 'none'}}>
            {children}
        </div>
    );
}