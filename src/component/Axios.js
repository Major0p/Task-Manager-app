import axios from "axios";

export default function Axios() {
  const options = {
    method: "POST",
    url: "https://motivational-quotes1.p.rapidapi.com/motivation",
    headers: {
      "content-type": "application/json",
      "x-rapidapi-host": "motivational-quotes1.p.rapidapi.com",
      "x-rapidapi-key": "8dd7e650ddmshb6f60a1b1cd0c5cp1b1989jsnce3927ef98d3",
    },
    data: { key1: "value", key2: "value" },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response);
      document.getElementById('api').innerHTML=response.data;
      document.getElementById("api-au").innerHTML = response.data.author;
    })
    .catch(function (error) {
      console.error(error);
    });
  return (
      <>
       
      </>
  );
}
