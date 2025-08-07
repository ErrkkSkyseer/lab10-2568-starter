import { useState } from "react";
import { UserCardDetail } from "./UserCardDetail";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
export const UserCard = ({ _name, _imgUrl, _address, _email }) => {
  const [isDetailShown, setIsDetailShown] = useState(false);

  const userCardOnClick = () => {
    setIsDetailShown(!isDetailShown);
  };

  return (
    <div className="border-bottom">
      <div className="d-flex align-items-center p-3" onClick={userCardOnClick}>
        <img src={_imgUrl} width="90px" className="rounded-circle me-4"></img>
        <span className="text-center display-6 me-auto">{_name}</span>
        {isDetailShown ? <BsChevronUp /> : <BsChevronDown />}
      </div>
      {isDetailShown && <UserCardDetail email={_email} address={_address} />}
    </div>
  );
};
