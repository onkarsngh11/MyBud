import { useState } from "react";
import { useWindowSize } from "CustomHooks";
import CompactHeader from "./CompactHeader";
import DesktopHeader from "./FullHeader";
import { PublicHeader } from "./PublicHeader";

export const Header = (props: any) => {
  const [searchValue, setSearchValue] = useState("");
  const UpdateSearchValue = (value: string) => setSearchValue(value);
  const SearchValueChangeHandler = (e: any) => {
    const value = e.target.value.toLowerCase();
    UpdateSearchValue(value);
  };

  const [, width] = useWindowSize();
  return (
    <>
      {props.isUserLoggedIn ? (
        width < 768 ? (
          <CompactHeader
            SearchValueChangeHandler={SearchValueChangeHandler}
            searchValue={searchValue}
          />
        ) : (
          <DesktopHeader
            SearchValueChangeHandler={SearchValueChangeHandler}
            searchValue={searchValue}
            isUserLoggedIn={props.isUserLoggedIn}
          />
        )
      ) : (
        <PublicHeader />
      )}
    </>
  );
};
