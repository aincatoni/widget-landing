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
     this.datasources = response.data;
    })
    .catch((e) => {
     console.log(e);
    });
  },
  consumingProducts: function () {
   let arrDatas = this.datasources.map((data) => data.dataSource);

   for (datasource in arrDatas) {
    axios
     .get(
      `https://stoplight.io/mocks/modyo/pcfactory-documentation/79796109/campanas/navidad/${datasource}`
     )
     .then((response) => {
      this.products = response.data.content.items;
      console.log(this.products);
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
