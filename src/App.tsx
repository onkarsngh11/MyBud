import { useWindowSize } from "Store/CustomHooks/useWindowSizeHook";
import { Routes, Route } from "react-router";
import { DesktopHeader } from "Components/Desktop/DesktopHeader";
import { MobileHeader } from "Components/Mobile/Header/MobileHeader";
import { Home } from "Pages/Home";
import { Products } from "Pages/Products";
import { Wishlist } from "Pages/Wishlist";
import { Orders } from "Pages/Orders";
import { Cart } from "Pages/Cart";
import { Account } from "Pages/Account";
import { Login } from "Components/Shared/Login";
import { Logout } from "Components/Shared/Logout";
import { useState } from "react";

export const App = () => {
  // Props drilling pattern
  // const [searchValue, setSearchValue] = useState("");
  // const UpdateSearchValue = (value: string) => setSearchValue(value);

  // const SearchValueChangeHandler = (e: any) => {
  //   const value = e.target.value.toLowerCase();
  //   UpdateSearchValue(value);
  // };
  const isDesktopMode = useWindowSize();

  return (
    <>
      {isDesktopMode ? <DesktopHeader /> : <MobileHeader />}
      

      {/* Props drilling pattern       
      {isDesktopMode ? (
        <DesktopHeader
          SearchValueChangeHandler={SearchValueChangeHandler}
          searchValue={searchValue}
        />
      ) : (
        <MobileHeader
          SearchValueChangeHandler={SearchValueChangeHandler}
          searchValue={searchValue}
        />
      )} */}
      <div className="content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
      </div>
    </>
  );
}
