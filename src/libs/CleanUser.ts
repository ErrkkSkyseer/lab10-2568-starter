import type { CardUserProps } from "./CardUserType";

export const cleanUser = (user: any) => {
  const newUser: CardUserProps = {
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    imgUrl: user.picture.large,
    address: `${user.location.city} ${user.location.state}`,
  };
  return newUser;
};
