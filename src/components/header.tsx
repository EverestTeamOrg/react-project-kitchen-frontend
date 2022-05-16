import React, { FC } from "react";
import { useAppSelector } from "../services/hooks";
import Banner from "./Home/Banner";
import Navigation from "./Navigation";
import { HeaderContainer } from "./StyledComponents/headerStyles";

const Header: FC = () => {
  const { appName, token } = useAppSelector((store: any) => store.common);

  return (
    <HeaderContainer>
      <Navigation />
      <Banner token={token} appName={appName} />
    </HeaderContainer>
  );
};

export default Header;
