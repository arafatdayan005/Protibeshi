export const postItem = (data) => {
  fetch("http://localhost:5000/items", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((d) => console.log(d));
};

export const getAllItems = async () => {
  const res = await fetch("http://localhost:5000/items");
  return await res.json();
};

export const rentItem = async (id, rentDetails) => {
  fetch(`http://localhost:5000/details/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ status: "Pending" }),
  });

  const res = await fetch("http://localhost:5000/borrowings", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(rentDetails),
  });
  return await res.json();
};

export const itemStatus = async (id, status) => {
  const res = await fetch(`http://localhost:5000/details/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(status),
  });
  return await res.json();
};

export const getUserItems = async (email) => {
  const res = await fetch(`http://localhost:5000/items/${email}`);
  return await res.json();
};

export const getBorrowItems = async (email) => {
  const res = await fetch(`http://localhost:5000/borrowings/${email}`);
  return await res.json();
};

export const borrowStatus = async (id, status) => {
  const res = await fetch(`http://localhost:5000/borrowing/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(status),
  });
  return await res.json();
};

export const deleteItem = (id) => {
  fetch(`http://localhost:5000/details/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
};

export const delBorrowItem = (id) => {
  fetch(`http://localhost:5000/borrowing/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
};
