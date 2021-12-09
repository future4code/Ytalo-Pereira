export enum GENDER {
   MALE = "MALE",
   FEMALE = "FEMALE",
   OTHER = "OTHER"
}

export type character = {
   name: string,
   gender: GENDER,
   id?: number,
   description?: string
}


export class Character {

   private name: string;
   private gender: GENDER;
   private id?: number;
   private description?: string;

   constructor(
      name: string,
      gender: GENDER,
      id?: number,
      description?: string
   ) {
      this.name = name;
      this.gender = gender;
      this.id = id;
      this.description = description;
      console.log("Consegui criar "+this.name+" com sucesso!");
   }

   getName(): string{
      return this.name;
   }

   getGender(): GENDER{
      return this.gender;
   }

   getId(): number | undefined{
      return this.id;
   }

   getDescription(): string | undefined {
      return this.description;
   }

}

const wolverine = new Character("Logan", GENDER.MALE, 11, "Se cura rápido e tem garra de adamantium");

const cyclops: character = {
   name: "Scott Summers",
   gender: GENDER.MALE,
   description: "Solta raio vermelho",
   id: 10
}

export class Animal{
   name: string;
   weight: number;

   constructor(name: string, weight: number) {
      this.name = name;
      this.weight = weight;

   }

   eat(quantity: number): void {
      this.weight += quantity
   }
}

export class Dog extends Animal {
   
   bark(): void {
      console.log("Au au ")
   }

}

export class Owl extends Animal {

   wingspan:number
   constructor(
      name: string,
      weight: number,
      wingspan: number
   ){
      console.log("construiindo uma coruja")
      super(name, weight)
      this.wingspan = wingspan
   }
  

   chirp(): void {
      console.log("Hoo hoo")

   }

   fly(distance: number): void{
      console.log(`${this.name} voou ${distance}milhas`)
      this.weight-= distance
   }

}







