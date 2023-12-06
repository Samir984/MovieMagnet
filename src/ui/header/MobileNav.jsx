/* eslint-disable react/prop-types */
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

function MobileNav({ setOpenMobileNav, openMobileNav }) {
  return (
    <div onClick={() => setOpenMobileNav((prev) => !prev)}>
      {!openMobileNav && <IoMdMenu size={24} color="#2563eb" />}
      {openMobileNav && <RxCross1 size={24} color="red" />}
    </div>
  );
}

export default MobileNav;
