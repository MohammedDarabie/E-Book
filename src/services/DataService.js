/* -------------------------------------------------------------------------- */
/*                                  GET USER                                  */
/* -------------------------------------------------------------------------- */
export async function getUser() {
  const cbid = sessionStorage.getItem("cbid");
  const token = sessionStorage.getItem("token");
  const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${cbid}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Error");
  }
  const data = await response.json();
  return data;
}
/* -------------------------------------------------------------------------- */
/*                               GET USER ORDER                               */
/* -------------------------------------------------------------------------- */
export async function getUserOrder() {
  const cbid = sessionStorage.getItem("cbid");
  const token = sessionStorage.getItem("token");
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/660/orders?user.id=${cbid}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Error");
  }
  const data = await response.json();
  return data;
}
/* -------------------------------------------------------------------------- */
/*                              CREATE USER ORDER                             */
/* -------------------------------------------------------------------------- */
export async function createOrder(cartList, total, user) {
  const token = sessionStorage.getItem("token");
  const order = {
    cartList,
    total,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id,
    },
  };
  const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(order),
  });
  if (!response.ok) {
    throw new Error("Error");
  }
  const data = await response.json();
  return data;
}
