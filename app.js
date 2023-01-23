new Vue({
 el: "#productos-landings",
 data: function () {
  return {
   datasources: [],
   products: [],
  };
 },
 methods: {
  consumingDataSources: function () {
   axios
    .get(
     "https://stoplight.io/mocks/modyo/pcfactory-documentation/79796109/campanas/navidad"
    )
    .then((response) => {
     /* console.log(response.data); */
     this.datasources = response.data;
    })
    .catch((e) => {
     console.log(e);
    });
  },
  consumingProducts: function () {
   for (data in this.datasources) {
    axios
     .get(
      `https://stoplight.io/mocks/modyo/pcfactory-documentation/79796109/campanas/navidad/${data}`
     )
     .then((response) => {
      /* console.log(response); */
     })
     .catch();
   }
  },
 },

 created: function () {
  this.consumingDataSources();
 },
 updated: function () {
  this.consumingProducts();
 },
});
