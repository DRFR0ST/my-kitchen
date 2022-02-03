import {IconProp} from "@fortawesome/fontawesome-svg-core";

import { faCookieBite, faPizzaSlice, faBreadSlice, faBacon, faEgg} from '@fortawesome/free-solid-svg-icons'

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
            label: "Pizza",
            id: "pizza",
            icon: faPizzaSlice,
            color: "#9A275A",
            thumbnail_url: ""
        },
        {
            label: "Breakfast",
            id: "breakfast",
            icon: faEgg,
            color: "#fff",
            thumbnail_url: ""
        },
        {
            label: "Sweets",
            id: "sweets",
            icon: faCookieBite,
            color: "#9A275A",
            thumbnail_url: ""
        },
        {
            label: "Fried",
            id: "fried",
            icon: faBacon,
            color: "#9A275A",
            thumbnail_url: ""
        },
        {
            label: "Baked",
            id: "baked",
            icon: faBreadSlice,
            color: "#9A275A",
            thumbnail_url: ""
        },
        

    ] as IRawTopic[]