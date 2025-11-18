question -1 : What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
Ans : enums help use a set of named values instead of raw numbers/strings.
example : 
enum Status {
  Pending = 1,
  Success = 2,
  Rejected = 3,
}
enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Canceled = "CANCELED",
}



question - 2 : Provide an example of using union and intersection types in TypeScript.
Ans : union type allows a variable to hold more than one possible type.
example :  type Status = "success" | "failure" | "pending";

intersection type : intersection type combines multiple types into one
example:
type User = {
  id: number;
  userName: string;
};

type Admin = {
  isAdmin: true;
  user_id: number;
};

type Editor = User & Admin;

