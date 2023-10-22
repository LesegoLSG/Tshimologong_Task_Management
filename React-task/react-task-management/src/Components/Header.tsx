import React from 'react';
import Button from './Reusable/Button';
import { HeaderProps } from './Reusable/Properties';


const Header: React.FC<HeaderProps> = ({ handleBtnChange, showAddTask }) => {


    return (
        <div className="bg-green-500 flex justify-between items-center my-2 mx-2 px-3 h-12 ">
            <h1 className="font-bold">Tracker</h1>
            <Button
                color={showAddTask ? "red" : "green"}
                text={showAddTask ? "Close" : "Add"}
                handleAddClick={handleBtnChange}
            />

        </div>
    )
}

export default Header