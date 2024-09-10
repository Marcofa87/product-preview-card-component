import imagePerfumDesktop from "@/images/image-product-desktop.jpg";
import imagePerfumMobile from "@/images/image-product-mobile.jpg";
import iconCart from "@/images/icon-cart.svg";
import "./product-card.css";

function ProductCard() {
  return (
    <>
      <div className="card-container">
        <picture>
          <source media="(min-width: 768px)" srcSet={imagePerfumDesktop} />
          <img src={imagePerfumMobile} alt="perfum image" />
        </picture>
      </div>
      <div className="text-container">
        <div className="text-container-product-description">
          <p>Perfume</p>
          <h2>
            Gabrielle Essence <br />
            Eau De Parfum
          </h2>
          <p className="product-description">
            A floral, solar and voluptuous <br />
            interpretation composed by Olivier
            <br /> Polge, Perfumer-Creator for the House of <br />
            CHANEL.
          </p>
        </div>
        <div className="price">
          <p>$149.99</p>
          <p>$169.99</p>
        </div>

        <div className="button-cart">
          <button>
            <img src={iconCart} alt="shopping cart icon" />
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
