import { useState } from "react";
import { UserCardDetail } from "./UserCardDetail";
import { type CardUserProps } from "../libs/CardUserType";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";



export const UserCard = (userInfo:CardUserProps) => {
  const [isDetailShown, setIsDetailShown] = useState(false);

  const userCardOnClick = () => {
    setIsDetailShown(!isDetailShown);
  };

  return (
    <div className="border-bottom">
      <div className="d-flex align-items-center p-3" onClick={userCardOnClick}>
        <img src={userInfo.imgUrl} width="90px" className="rounded-circle me-4"></img>
        <span className="text-center display-6 me-auto">{userInfo.name}</span>
        {isDetailShown ? <BsChevronUp /> : <BsChevronDown />}
      </div>
      {isDetailShown && <UserCardDetail email={userInfo.email} address={userInfo.email} />}
    </div>
  );
};
