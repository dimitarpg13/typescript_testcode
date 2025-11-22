interface Backpack<Type> {
  add: (obj: Type) => void;
	get: () => Type;
}

declare const backpack: Backpack<string>;

const object = backpack.get();

backpack.add("Dimitar")

console.log(backpack)

// backpack.add(23); will throw error
