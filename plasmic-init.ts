import {initPlasmicLoader} from "@plasmicapp/loader-nextjs";
import {ReCaptcha} from "./components/ReCaptcha";
import {URLParser} from "./components/URLParser";
import {Web2AnyForm} from "./components/Web2AnyForm";
import {ResetLink} from "./components/ResetLink";
import {Web2Any} from "./components/Web2Any";

export const PLASMIC = initPlasmicLoader({
    projects: [
        {
            id: "eKabpdN7JB6uckJED15URF",
            token: "Hyr3tdKBo8dpJQlL5hIITwRpGEJo12lg8Y3zasUweb5HDXBg4UjHFTz5a3GGGMTMfx3nQMecj9I5l2pUmw",
        },
    ],

    // By default Plasmic will use the last published version of your project.
    // For development, you can set preview to true, which will use the unpublished
    // project, allowing you to see your designs without publishing.  Please
    // only use this for development, as this is significantly slower.
    preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
PLASMIC.registerComponent(ReCaptcha, {
    name: "ReCaptcha",
    props: {
        apiKey: 'string',
        showInEditor: 'boolean',
        inputId: 'string'
    }
});
PLASMIC.registerComponent(URLParser, {
    name: "URLParser",
    props: {
        config: 'object',
        showInEditor: 'boolean'
    }
});
PLASMIC.registerComponent(Web2Any, {
  name: "Web2Any",
  props: {
    object: 'string',
    redirectUrl: 'string',
    errorRedirectURL: 'string',
  }
});
PLASMIC.registerComponent(Web2AnyForm, {
    name: "Web2AnyForm",
    props: {
        object: 'string',
        action: 'string',
        method: {
            type: 'choice',
            options: ['POST', 'GET']
        },
        redirectUrl: 'string',
        errorRedirectURL: 'string',
        children: 'slot'
    }
});
PLASMIC.registerComponent(ResetLink, {
    name: "ResetLink",
    props: {
        children: 'slot',
        trackedFields: {
            type: 'choice',
            multiSelect: true,
            options: (props, context) => {
                return Array.from(document.querySelectorAll('input')).map(input => {
                    return input.name;
                }).filter(name => name);
            }
        }
    }
});