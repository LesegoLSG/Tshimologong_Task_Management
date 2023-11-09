import React from 'react';
import Button from './Reusable/Button';
import { HeaderProps } from './Reusable/Properties';
import { BiBellPlus } from 'react-icons/bi';
import { RxCrossCircled } from 'react-icons/rx'


const Header: React.FC<HeaderProps> = ({ handleBtnChange, showAddTask, ChangeAnimateState }) => {


    return (
        <div className="bg-green-500 flex justify-between items-center my-2 mx-2 px-3 h-12 ">
            <h1 className="font-bold">Tracker</h1>
            <Button
                color={showAddTask ? "red" : "#4287f5"}
                text={showAddTask ? (<><RxCrossCircled />Close</>) : (<><BiBellPlus /> Add</>)}
                handleAddClick={handleBtnChange}
                handleAnimate={ChangeAnimateState}
            />

        </div>
    )
}

export default Header