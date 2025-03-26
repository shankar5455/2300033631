// PizzaException Class
class PizzaException extends Error {
    constructor(message) {
      super(message);
      this.name = "PizzaException";
      this.log = message;
    }
  }
  
  // Pizza Class
  class Pizza {
    // Size and Type Constants
    static SIZE_S = "S";
    static SIZE_M = "M";
    static SIZE_L = "L";
  
    static TYPE_VEGGIE = "VEGGIE";
    static TYPE_MARGHERITA = "MARGHERITA";
    static TYPE_PEPPERONI = "PEPPERONI";
  
    // Extra Ingredients
    static EXTRA_CHEESE = "CHEESE";
    static EXTRA_TOMATOES = "TOMATOES";
    static EXTRA_MEAT = "MEAT";
  
    // Prices for Sizes, Types, and Ingredients
    static PRICES = {
      size: {
        S: 25,
        M: 35,
        L: 50,
      },
      type: {
        VEGGIE: 25,
        MARGHERITA: 30,
        PEPPERONI: 35,
      },
      extra: {
        CHEESE: 4,
        TOMATOES: 3,
        MEAT: 5,
      },
    };
  
    // Allowed Options
    static allowedSizes = [Pizza.SIZE_S, Pizza.SIZE_M, Pizza.SIZE_L];
    static allowedTypes = [
      Pizza.TYPE_VEGGIE,
      Pizza.TYPE_MARGHERITA,
      Pizza.TYPE_PEPPERONI,
    ];
    static allowedIngredients = [
      Pizza.EXTRA_CHEESE,
      Pizza.EXTRA_TOMATOES,
      Pizza.EXTRA_MEAT,
    ];
  
    // Constructor
    constructor(size, type) {
      // Validate Size and Type
      if (!Pizza.allowedSizes.includes(size)) {
        throw new PizzaException(`Invalid size '${size}'! Allowed: ${Pizza.allowedSizes.join(", ")}`);
      }
  
      if (!Pizza.allowedTypes.includes(type)) {
        throw new PizzaException(`Invalid type '${type}'! Allowed: ${Pizza.allowedTypes.join(", ")}`);
      }
  
      this.size = size;
      this.type = type;
      this.extraIngredients = [];
    }
  
    // Add Extra Ingredient
    addExtraIngredient(ingredient) {
      if (arguments.length !== 1) {
        throw new PizzaException("addExtraIngredient() requires exactly 1 parameter.");
      }
  
      if (!Pizza.allowedIngredients.includes(ingredient)) {
        throw new PizzaException(`Invalid ingredient '${ingredient}'! Allowed: ${Pizza.allowedIngredients.join(", ")}`);
      }
  
      if (this.extraIngredients.includes(ingredient)) {
        throw new PizzaException(`Ingredient '${ingredient}' already added!`);
      }
  
      this.extraIngredients.push(ingredient);
    }
  
    // Remove Extra Ingredient
    removeExtraIngredient(ingredient) {
      if (arguments.length !== 1) {
        throw new PizzaException("removeExtraIngredient() requires exactly 1 parameter.");
      }
  
      if (!Pizza.allowedIngredients.includes(ingredient)) {
        throw new PizzaException(`Invalid ingredient '${ingredient}'! Allowed: ${Pizza.allowedIngredients.join(", ")}`);
      }
  
      const index = this.extraIngredients.indexOf(ingredient);
      if (index === -1) {
        throw new PizzaException(`Ingredient '${ingredient}' was not added!`);
      }
  
      this.extraIngredients.splice(index, 1);
    }
  
    // Get Pizza Size
    getSize() {
      return this.size;
    }
  
    // Get Pizza Price
    getPrice() {
      let price = Pizza.PRICES.size[this.size] + Pizza.PRICES.type[this.type];
      this.extraIngredients.forEach(
        (ingredient) => (price += Pizza.PRICES.extra[ingredient])
      );
      return price;
    }
  
    // Get Pizza Info
    getPizzaInfo() {
      return `
        🍕 Pizza Info:
        - Size: ${this.size}
        - Type: ${this.type}
        - Extra Ingredients: ${
          this.extraIngredients.length > 0
            ? this.extraIngredients.join(", ")
            : "None"
        }
        - Total Price: $${this.getPrice()}
      `;
    }
  }
  
  // --- TEST CASES ---
  
  try {
    // Valid Pizza
    let pizza = new Pizza(Pizza.SIZE_M, Pizza.TYPE_PEPPERONI);
    pizza.addExtraIngredient(Pizza.EXTRA_CHEESE);
    pizza.addExtraIngredient(Pizza.EXTRA_TOMATOES);
  
    console.log(pizza.getPizzaInfo()); // Valid
  
    // Trying to add the same ingredient
    // pizza.addExtraIngredient(Pizza.EXTRA_CHEESE); // Throws error
  
    // Remove ingredient
    pizza.removeExtraIngredient(Pizza.EXTRA_TOMATOES);
    console.log(pizza.getPizzaInfo());
  
    // Invalid Ingredient
    // pizza.addExtraIngredient("CORN"); // Throws error
  
    // Invalid Size
    // let pizza2 = new Pizza("XL", Pizza.TYPE_VEGGIE); // Throws error
  
    // Removing an ingredient that wasn't added
    // pizza.removeExtraIngredient(Pizza.EXTRA_MEAT); // Throws error
  } catch (error) {
    if (error instanceof PizzaException) {
      console.error(`Pizza Error: ${error.log}`);
    } else {
      console.error(`Unknown Error: ${error.message}`);
    }
  }
  