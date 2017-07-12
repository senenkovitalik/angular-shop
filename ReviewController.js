app.controller("ReviewController", function() {
  this.product = {
    weight: null,
    country: null,
    gender: "Male",
    angles: "1",
    tech: null,
    pretty: false,
    gender: "Male",
    colors: null
  };

  this.colors = ["Red", "Green", "Blue", "Yellow"];
  this.color = this.colors[0];
  this.arr = [];

  this.addColor = function(color) {
    if (this.arr.indexOf(color))  {
      this.arr.push(color);
      this.product.colors = this.arr.join(", ");
    }
  }

  this.submitForm = function() {
    console.log("We need to submit this form data:");
    console.log(this.product);
  }
});
