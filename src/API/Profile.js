export const postProfile = (email, data) => {
  fetch(`http://localhost:5000/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const lenderProfile = (userEmail, caution) => {
  fetch(`http://localhost:5000/users/${userEmail}`)
    .then((res) => res.json())
    .then((user) => {
      const updatecred = {
        credit: user?.credit + caution * 0.2,
      };
      postProfile(userEmail, updatecred);
    });
};

export const borrowerProfile = (id, caution, task) => {
  fetch(`http://localhost:5000/borrowItem/${id}`)
    .then((res) => res.json())
    .then((data) => {
      fetch(`http://localhost:5000/users/${data.borrowEmail}`)
        .then((res) => res.json())
        .then((user) => {
          if (task === "deduct") {
            const updateCred = {
              credit: user.credit - caution,
            };
            postProfile(data.borrowEmail, updateCred);
          } else if (task === "return") {
            const updateCred = {
              credit: user?.credit + caution * 0.75,
            };
            postProfile(data.borrowEmail, updateCred);
          }
        });
    });
};
