import { Ingredient } from '../shared/ingredient'

export class ShoppingListService {

    private items: Ingredient[] = [];

    constructor() {}

    getItems() {
        console.log('ShoppingListService get', this.items)
        return this.items;
    }

    addItems(items: Ingredient[]) {

        console.log(this.items, items)


        Array.prototype.push.apply(this.items, items);
    }

}
