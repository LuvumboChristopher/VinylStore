import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../../context/StoreProvider";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(StoreContext);
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;

  const [name, setName] = useState(shippingAddress.name || "");
  const [lastName, setlastName] = useState(shippingAddress.lastName || "");
  const [streetAddress, setstreetAddress] = useState(
    shippingAddress.streetAddress || ""
  );
  const [city, setCity] = useState(shippingAddress.city || "");
  const [zipCode, setZipCode] = useState(shippingAddress.zipCode || "");
  const [country, setCountry] = useState(shippingAddress.country || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: "SAVE_SHIPPING_ADRESS",
      payload: { name, lastName, streetAddress, city, country, zipCode },
    });
    localStorage.setItem(
      "shippingAddress",
      JSON.stringify({ name, lastName, streetAddress, city, country, zipCode })
    );
    navigate("/paiement");
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/se-connecter?redirect=/expedition");
    }
  }, [userInfo, navigate]);

  return (
    <div>
      <h1>Adresse de livraison</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name={"lastName"}
          value={lastName}
          placeholder={"Nom"}
          onChange={(e) => setlastName(e.target.value)}
          required
        />
        <input
          type="text"
          name={"name"}
          value={name}
          placeholder={"Prenom"}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          name={"street address"}
          value={streetAddress}
          placeholder={"Street Address"}
          onChange={(e) => setstreetAddress(e.target.value)}
          required
        />
        <input
          type="text"
          name={"city"}
          value={city}
          placeholder={"Ville"}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <input
          type={"number"}
          name={"zip code"}
          value={zipCode}
          placeholder={"Code postal"}
          maxLength="6"
          onChange={(e) => setZipCode(e.target.value)}
          required
        />
        <input
          type="text"
          name={"country"}
          value={country}
          placeholder={"Pays"}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default Shipping;
