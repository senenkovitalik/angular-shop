angular.module("myShoppingList")
.factory('promo', () => {
  const promo = false;

  function usePromo() {
    this.promo = true;
    console.log("PromoService: Use promo!!!");
  }

  function getPromo() {
    return this.promo;
  }

  return {
    usePromo: usePromo,
    getPromo: getPromo
  };
});