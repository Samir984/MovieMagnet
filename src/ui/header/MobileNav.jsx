/* eslint-disable react/prop-types */
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

function MobileNav({ setOpenMobileNav, openMobileNav, setSeachAction }) {
  return (
    <div
      onClick={() => {
        setSeachAction(false);
        setOpenMobileNav((prev) => !prev);
      }}
    >
      {!openMobileNav && <IoMdMenu size={24} color="white" />}
      {openMobileNav && <RxCross1 size={24} color="white" />}
    </div>
  );
}

export default MobileNav;
