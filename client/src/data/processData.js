import React from "react"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"


export const processData = [
    {
        title: "Over 100 Destinations",
        icon: (<GiEarthAmerica/>),
        desc: "Travel to over 100 unique places",
        css: "color: #047bf1 ;"
    },
    {
        title: "1 Million Trips Made",
        icon: (<MdAirplanemodeActive/>),
        desc: "Over 1 million trips completed last year",
        css: "color: #f3a82e;"
    },
    {
        title: "Fastest Support",
        icon: (<MdTimer/>),
        desc: "Access our support team 24/7",
        css: "color: #f34f2e;"
    },
    {
        title: "Best Deals",
        icon: (<FaMoneyCheck/>),
        desc: "We offer the best prices",
        css: "color: #3af576;"
    }
]