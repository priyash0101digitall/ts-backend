import { CategoryRepository } from "./category.repository";
import { ProductRepository } from "./product.repository";
import { RoleRepository } from "./role.repository";
import { UserRepository } from "./user.repository";

export interface Repositories {
  products: ProductRepository;
  categories: CategoryRepository;
  users: UserRepository;
  roles: RoleRepository;
}
