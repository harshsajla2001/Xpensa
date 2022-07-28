import "./top-fold.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchExpense } from "../../redux/actions/expenses";

import { GoSearch } from 'react-icons/go';
import { IoAddCircleOutline } from 'react-icons/io5';
import { BiArrowBack } from 'react-icons/bi';
import { MdOutlineCancel } from 'react-icons/md';

const TopFold = () => {

    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const handleQuery = (e) => {
        setQuery(e.target.value);
        dispatch(searchExpense(e.target.value));
    };

    return (
        <div className="topfold">
            {window.location.pathname === "/" ? (
                <div className="home-topfold">
                    <div className="searchbar">
                        <GoSearch className="GoSearch"/>
                        <input
                            placeholder="Search for expenses"
                            value={query}
                            onChange={(e) => handleQuery(e)}
                        />
                    </div>
                    <Link to="/add-expense">
                        <div className="add-button">
                            <IoAddCircleOutline />
                            <label>Add</label>
                        </div>
                    </Link>
                </div>
            ) : (
                <div className="add-topfold">
                    <Link to="/">
                        <div className="add-topfold-button">
                            <BiArrowBack className='BiArrowBack'/>
                            <label>Back</label>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="add-topfold-button">
                            <MdOutlineCancel className='MdOutlineCancel'/>
                            <label>Cancel</label>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default TopFold;