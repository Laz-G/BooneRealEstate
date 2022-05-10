import React from "react";
import {FormProvider} from "./context/FormContext";

export function Web2AnyForm({
                            className,
                            object,
                            action,
                            method,
                            redirectUrl,
                            errorRedirectURL,
                            children
                        }: { className?: string, object: string, action: string, method: string, redirectUrl: string, errorRedirectURL: string, children: React.ReactNode }) {

    return (
        <FormProvider>
            <form className={className} action={action} method={method}>
                {children}
                <input name="objectType" type="hidden" value={object}/>
                {redirectUrl && <input name="redirectUrl" type="hidden" value={redirectUrl}/>}
                {errorRedirectURL &&
                    <input name="errorRedirectURL" type="hidden" value={errorRedirectURL}/>}
            </form>
        </FormProvider>
    );
}