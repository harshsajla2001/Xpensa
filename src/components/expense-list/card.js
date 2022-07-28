import React from "react";
import "./card.css";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../redux/actions/expenses";
import { BsTrash } from "react-icons/bs";

const Card = ({ item, notifySuccess }) => {
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();
  const handleDelete = () => {
    notifySuccess();
    dispatch(deleteExpense(item));
  };

  return (
    <div className="card" style={{ borderRight: `6px solid ${item.category.color}` }}>
      <div className="card-info">
        <label className="card-title">{item.title}</label>
        
        <label className="card-time">{time}</label>
      </div>
      <div className="card-right">
        <div>
          <label className="card-amount">₹ {item.amount}</label>
        </div>
        <div className="delete-icon" onClick={handleDelete}>
          <BsTrash className='BsTrash' />
        </div>
      </div>
    </div>
  );
};

export default Card;