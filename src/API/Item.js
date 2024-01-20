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
