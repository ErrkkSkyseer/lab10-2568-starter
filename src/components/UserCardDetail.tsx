import { BsMailbox2, BsFillPinMapFill } from "react-icons/bs";

interface CardDetail {
  email: string;
  address: string;
}

export const UserCardDetail = (detail: CardDetail) => {
  return (
    <div className="text-center">
      <p>
        <BsMailbox2 /> {detail.email}
      </p>
      <p>
        <BsFillPinMapFill /> {detail.address}
      </p>
    </div>
  );
};
