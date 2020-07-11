export class Ingredient {
  constructor(
    public name: string,
    public amount: number,
    public imgPath: string
  ) {
    this.name = name;
    this.amount = amount;
    this.imgPath = imgPath;
  }
}
