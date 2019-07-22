const API_URL = process.env.REACT_APP_API_URL;

export const fetchAllBikes = callback => {
  if (typeof callback == "function") {
    fetch(`${API_URL}/bikes`)
      .then(response => response.json())
      .then(data => callback(data));
  } else {
    console.error("parameter for fetchAllBikes should be a function");
  }
};

export const postNewStolenBike = newBike => {
  fetch(`${API_URL}/bikes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newBike)
  });
};
