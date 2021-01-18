import React,{useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import {BiDoughnutChart, BiMoney, BiLockAlt, BiPurchaseTag, BiUserCheck, BiChat} from 'react-icons/bi';

const AdminboardDataArray = [
    {
        
    },
    {

        title: "Customers",
        path: "/customers",
        class: "nav-text",
        icon: <BiDoughnutChart/>
    },
    {
        title: "All Users",
        path: "/users",
        class: "nav-text",
        icon: <BiUserCheck/>
    },
    {
        title: "Orders",
        path: "/orders",
        class: "nav-text",
        icon: <BiPurchaseTag/>
    },
    {
        title: "Fundings",
        path: "/fundings",
        class: "nav-text",
        icon: <BiMoney/>
    },
    {
        title: "Chat",
        path: "/chat",
        class: "nav-text",
        icon: <BiChat/>
    }
]

export default AdminboardDataArray;