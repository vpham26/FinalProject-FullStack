import { useDataContext, useAuthContext } from "../../Context";
import logo from "../../images/logo.jpg";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const {
    state: { itemsInCart: items, itemsInWishlist: wishes },
  } = useDataContext();
  const {login} = useAuthContext();
  const totalCartItems = items.reduce((acc, curr) => acc + curr.quantity, 0);
  return (
    <nav className="nav flex-container">
      <NavLink to="/" className="no-line nav-logo-container">
        <img className="img-rd img-logo" src={logo} alt="logo" />
        <span className="nav-header">Peace</span>
      </NavLink>
      <section className="sec-nav-btns">
        <NavLink
          to="/products"
          className="no-line fas fa-lg fa-store primaryBg-txt"
          activeClassName="no-line fas fa-lg fa-store secondary-txt"
        >
          <span className="badge-icon hidden-vis">0</span>
        </NavLink>
       {login &&  <NavLink
          to="/wishlist"
          className="no-line fas fa-lg fa-heart primaryBg-txt"
          activeClassName="no-line fas fa-lg fa-heart secondary-txt"
        >
          <span
            className={
              wishes.length > 0 ? "badge-icon primaryBg-txt" : "hidden-vis"
            }
          >
            {wishes.length}
          </span>
        </NavLink>}
        <NavLink
          to="/cart"
          activeClassName="no-line fas fa-lg fa-shopping-cart secondary-txt"
          className="no-line fas fa-lg fa-shopping-cart primaryBg-txt"
        >
          <span
            className={
              totalCartItems > 0 ? "badge-icon primaryBg-txt" : "hidden-vis"
            }
          >
            {totalCartItems}
          </span>
        </NavLink>
         <NavLink
          to="/user-profile"
          className="no-line fas fa-lg fa-user primaryBg-txt"
          activeClassName="no-line fas fa-lg fa-user secondary-txt"
        >
          <span className="badge-icon hidden-vis">0</span>
        </NavLink>
      </section>
    </nav>
  );
};
