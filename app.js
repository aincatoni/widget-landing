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
   let arrproducts = [];
   this.products = arrproducts;
   for (datasource in arrDatas) {
    axios
     .get(
      `https://stoplight.io/mocks/modyo/pcfactory-documentation/79796109/campanas/navidad/${datasource}`
     )
     .then((response) => {
      arrproducts.push(response.data.content.items);
     })
     .catch();
   }
  },
 },
 created: function () {
  this.consumingDataSources();
 },
 beforeUpdate: function () {
  this.consumingProducts();
 },
});
