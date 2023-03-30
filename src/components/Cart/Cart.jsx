import React from "react";

const Cart = (props) => {
    // console.log(props.data);
    const handleCarts = props.handleCart;
    const {movieName,poster,description,category,watchTime,imdbRating } = props.data;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
          className="h-64 rounded-md"
            src={poster}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{movieName}</h2>
          <p>{description}</p>
          <p>Watch: {watchTime}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleCarts(watchTime)} className="btn btn-primary">add cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
