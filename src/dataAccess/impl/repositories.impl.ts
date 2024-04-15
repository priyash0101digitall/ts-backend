import { injectable } from "inversify";

// import models
import categoryModel from "../../models/category.model";
import productModel from "../../models/product.model";
import userModel from "../../models/user.model";

// import repo
import { Repositories } from "../repositories";
import { CategoryRepository } from "../category.repository";
import { ProductRepository } from "../product.repository";
import { UserRepository } from "../user.repository";

// import repo implementations
import { ProductRepositoryImpl } from "./product.repository.impl";
import { CategoryRepositoryImpl } from "./category.repository.impl";
import { UserRepositoryImpl } from "./user.repository.impl";
import { RoleRepository } from "../role.repository";
import { RoleRepositoryImpl } from "./role.repository.impl";
import roleModel from "../../models/role.model";

@injectable()
export class RepositoriesImpl implements Repositories {
  constructor() {
    this.products = new ProductRepositoryImpl(productModel);
    this.categories = new CategoryRepositoryImpl(categoryModel);
    this.users = new UserRepositoryImpl(userModel);
    this.roles = new RoleRepositoryImpl(roleModel);
  }
  roles: RoleRepository;
  products: ProductRepository;
  categories: CategoryRepository;
  users: UserRepository;
}
