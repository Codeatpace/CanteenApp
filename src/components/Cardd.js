const Cardd = (props) => {
  return (
    <>
      <div class="card" style={{ width: "18rem", marginTop: "15px" }}>
        <img
          class="card-img-top"
          src={props.data[props.i].order_data[props.i][props.i + 1].img}
          alt="Card image cap"
          width={300}
          height={300}
        />
        <div class="card-body">
          <h5 class="card-title">{props.data[props.i].order_data[props.i][props.i + 1].name}</h5>
          <p class="card-text">
            <label>Quantity:</label>
            {props.data[props.i].order_data[props.i][props.i + 1].qty}
          </p>
          <p>
            <label>Price:</label>
            {props.data[props.i].order_data[props.i][props.i + 1].price}
          </p>
        </div>
      </div>
    </>
  );
};

export default Cardd;
