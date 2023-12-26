import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";

function Logout() {
  const { logoutUser, isLoggingOut } = useLogout();

  return (
    <ButtonIcon onClick={() => logoutUser()} disabled={isLoggingOut}>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
}

export default Logout;
