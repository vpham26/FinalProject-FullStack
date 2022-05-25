import homeImg from "../../images/home_page.jpg";
import { useDataContext } from "../../Context";
import cannabisOil from "../../images/oil.jpg";
import mariEdibles from "../../images/edibles.jpg";
import prescription from "../../images/prescription.jpg";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const { dispatch } = useDataContext();

  useEffect(() => {
    document.title = "Peace | Home";
  }, []);

  return (
    <>
      <h2 className="txt-header-1">
        {"If you want Peace, prepare to get "}
        <span className="secondary-txt">Weed</span>!
      </h2>

      <img className="img-res img-svg img-main" src={homeImg} alt="Home page" />

      <div className="home-txt-desc">
        <p className="txt-desc primaryBg-txt">
          Lorem ipsum dolor sit amet, consectetur <b> lorem ipsum dolor sit </b>. 
          Lorem ipsum dolor sit amet, consectet <em> Lorem </em> needs!
        </p>
        <NavLink to="/products">
          <button
            type="button"
            className="btn btn-solid"
          >
            Shop Now
          </button>
        </NavLink>
      </div>

      <h2 className="txt-header-2">
        Featured <span className="secondary-txt">Items</span>
      </h2>

      <div className="cartegory-container">
        <NavLink to="/products">
          <img
            className="img-res img-svg"
            src={cannabisOil}
            alt="Cannabis Oil"
            onClick={() => dispatch({type: "TOGGLE_BRAND", payload:"CannabisOils"})}
          />
        </NavLink>
        <NavLink to="/products">
        <img
          className="img-res img-svg"
          src={mariEdibles}
          alt="Marijuana Edibles"
          onClick={() => dispatch({type: "TOGGLE_BRAND", payload:"Marijuana Edibles"})}
        />
        </NavLink>
        <NavLink to="/products">
        <img
          className="img-res img-svg"
          src={prescription}
          alt="prescription"
          onClick={() => dispatch({type: "TOGGLE_BRAND", payload:"Prescription"})}
        />
        </NavLink>
      </div>
    </>
  );
};
