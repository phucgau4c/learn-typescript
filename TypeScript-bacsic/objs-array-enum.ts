enum Role {
  ADMIN,
  AUTHOR,
}

const person =
  // : {
  //     name: string; age: number;
  // }

  {
    name: "Phuc",
    age: 22,
    hobbies: ["sport", "swimming"],
    role: Role.ADMIN,
  };

let favoriteActivities: string[];
favoriteActivities = ["sport"];

console.log(person.name);

if (person.role === 0) {
  console.log("is admin");
}
