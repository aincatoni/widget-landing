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
      var arrProductos = [];
      /* console.log(arrDatas); */
      for (datasource in arrDatas) {
        axios
          .get(
            `https://stoplight.io/mocks/modyo/pcfactory-documentation/79796109/campanas/navidad/${arrDatas[datasource]}`
          )
          .then((response) => {
            arrProductos.push(...response.data.content.items);
          })
          .catch((e) => {
            console.log(e);
          });
      }
      /* console.log(arrProductos); */
      this.products = arrProductos;
    },
  },
  created: function () {
    this.consumingDataSources();
  },
  updated: function () {
    this.consumingProducts();
  },
});
