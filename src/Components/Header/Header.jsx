import React from "react";

const Header = () => {
    return (
        <>
            <div className="headerTop">
                <div className="container">
                    <div className="navPc">
                        <div class="navPc__left">
                            <Link href="route('top')">
                                <div className="logo">
                                    <i>
                                        <img
                                            src="/img/logo/RentalHouse.svg"
                                            alt="RentalHouses"
                                        />
                                    </i>
                                </div>
                                <h1>RentalHouses</h1>
                            </Link>
                        </div>
                        <div className="navPc__search">
                        <button className="buttonImage left">
                            <img src="/img/icon/Search.svg" alt="" />
                        </button>
                        <div className="search__wrap">
                            <input
                                className="pc searchInput"
                                type="text"
                            />
                            <textarea
                                className="mobile searchInput"
                                type="text"
                            ></textarea>
                        </div>
                        <button className="buttonImage right">
                            <img src="/img/icon/Category.svg" alt="" />
                        </button>
                    </div>
                        <div className="navPc__right">
                    <Link
                        href="route('login.method')"
                        className="buttonHeader"
                    >
                        Sign in
                    </Link>
                    <Link
                        href="route('register.method')"
                        className="buttonHeader green"
                    >
                        Join
                    </Link>
                    <Link
                        href="route('logout')"
                        className="buttonHeader"
                    >
                        Logout
                    </Link>
                    <button className="buttonImage">
                        <img src="/img/icon/List.svg" alt="" />
                    </button>
                    {/*<MultiLanguage />*/}
                    {/*<Notification/>*/}
                    {/*<Hamburger />*/}
                </div>
                        <div className="lineFull"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;