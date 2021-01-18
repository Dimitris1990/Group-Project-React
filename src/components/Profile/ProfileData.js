import React from 'react';
import {BiDoughnutChart, BiMessageRoundedDots, BiPoll, BiBarChart, BiNews,BiMoney} from 'react-icons/bi';

const SidebarDataArray = [
    {
        
    },
    {
        title: "Portfolio",
        path: "/portfolio",
        class: "nav-text",
        icon: <BiDoughnutChart/>
    },
    {
        title: "Transactions",
        path: "/transactions",
        class: "nav-text",
        icon: <BiPoll/>
    },
    {
        title: "Fundings",
        path: "/userfundings",
        class: "nav-text",
        icon: <BiMoney/>
    },
    {
        title: "Available Market",
        path: "/availablemarket",
        class: "nav-text",
        icon: <BiBarChart/>
    },
    {
        title: "News Feed",
        path: "/newsfeed",
        class: "nav-text",
        icon: <BiNews/>
    },
    {
        title: "Chat",
        path: "/userchat",
        class: "nav-text",
        icon: <BiMessageRoundedDots/>
    },
]

export default SidebarDataArray;