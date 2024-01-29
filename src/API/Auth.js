//save user to DB
export const saveUser = (user) => {
  const currentUser = {
    email: user.email,
    name: user.displayName,
    photo: user.photoURL,
  };

  fetch(`http://localhost:5000/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.upsertedCount === 1) {
        const data = {
          credit: 0,
          borrowings: 0,
          lendings: 0,
        };
        fetch(`http://localhost:5000/users/${user?.email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        });
      }
    });
};
