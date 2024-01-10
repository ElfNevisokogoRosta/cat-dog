import React from 'react';
import Diagram from "../../components/Diagram/Diagram";
import CategoryList from "../../components/Category/CategoryList";
import Statistic from "../../components/Statistic/Statistic";
export const data = [
    { title: "Cat", value: 90, color: 'blue' },
    { title: "Dog", value: 12, color: 'red'},
    { title: "Birds", value: 34, color: 'teal'},
    { title: "Fish", value: 53, color:'orange' },
    { title: "Rat", value: 58, color: 'green'},
];
const AdminDashboard = () => {
    return (
        <div>
            <Diagram />
            <CategoryList/>
            <Statistic/>
        </div>
    );
};

export default AdminDashboard;