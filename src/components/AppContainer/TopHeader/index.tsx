import { useNavigate } from "react-router-dom";
import { useInternationalization } from "@/hooks/internationalization";

import { Container, Menu, MenuItem, UserInfo } from "./styles";

export default function TopHeader() {
  const { t } = useInternationalization();
  const navigate = useNavigate();

  return (
    <Container>
        <UserInfo>Eduardo</UserInfo>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Service</MenuItem>
          <MenuItem>Portfolio</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
    </Container>
  );
}
