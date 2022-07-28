import { IoSchoolSharp } from "react-icons/io5";
import { GiHealthNormal } from "react-icons/gi";
import { HiShoppingCart } from "react-icons/hi";
import { MdFastfood } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";

export const categories = [
  {
      id: 1,
      title: "Education",
      icon: <IoSchoolSharp />,
      color: "#A95EC2",
    },
    {
      id: 2,
      title: "Healthcare",
      icon: <GiHealthNormal />,
      color: "#FF768A",
    },
    {
      id: 3,
      title: "Shopping",
      icon: <HiShoppingCart />,
      color: "#EC60AB",
    },
    {
      id: 4,
      title: "Food",
      icon: <MdFastfood />,
      color: "#FF9E6D",
    },
    {
      id: 5,
      title: "Other",
      icon: <FaMoneyBillAlt />,
      color: "#FFCB5E",
    },
  ];