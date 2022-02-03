import {IconProp} from "@fortawesome/fontawesome-svg-core";

import { faReact, faUbuntu, faJs, faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faPalette, faCode, faServer, faNetworkWired, faMobile, faDatabase, faDumpster } from '@fortawesome/free-solid-svg-icons'

type IRawTopic = {
    label: string;
    id: string;
    icon: IconProp;
    color: string;
    thumbnail_url: string;
}

export default
    [

        {
            label: "React",
            id: "react",
            icon: faReact,
            color: "#fff",
            thumbnail_url: ""
        },
        {
            label: "Design",
            id: "design",
            icon: faPalette,
            color: "#9C6",
            thumbnail_url: ""
        },
        {
            label: "Hosting",
            id: "hosting",
            icon: faServer,
            color: "#9C6",
            thumbnail_url: ""
        },
        {
            label: "Snippets",
            id: "snippets",
            icon: faCode,
            color: "#9C6",
            thumbnail_url: ""
        },
        {
            label: "Network",
            id: "network",
            icon: faNetworkWired,
            color: "#9C6",
            thumbnail_url: ""
        },
        {
            label: "Apps",
            id: "apps",
            icon: faMobile,
            color: "#9C6",
            thumbnail_url: ""
        },
        {
            label: "DevOps",
            id: "devops",
            icon: faDatabase,
            color: "#9C6",
            thumbnail_url: ""
        },
        {
            label: "JavaScript",
            id: "javascript",
            icon: faJs,
            color: "#9C6",
            thumbnail_url: ""
        },
        {
            label: "Wordpress",
            id: "wordpress",
            icon: faWordpress,
            color: "#9C6",
            thumbnail_url: ""
        },
        {
            label: "Linux",
            id: "linux",
            icon: faUbuntu,
            color: "#9C6",
            thumbnail_url: ""
        },
        {
            label: "Offtopic",
            id: "offtopic",
            icon: faDumpster,
            color: "#9C6",
            thumbnail_url: ""
        },

        

    ] as IRawTopic[]