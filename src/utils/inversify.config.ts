import "reflect-metadata";
import { Container } from "inversify";

import { TYPES } from "../types";

import { Repositories } from "../dataAccess/repositories";
import { RepositoriesImpl } from "../dataAccess/impl/repositories.impl";

import { ProductService } from "../services/product.service";
import { CategoryService } from "../services/category.service";
import { ProductServiceImpl } from "../services/impl/product.service.impl";
import { CategoryServiceImpl } from "../services/impl/category.service.impl";
import { UserService } from "../services/user.service";
import { UserServiceImpl } from "../services/impl/user.service.impl";
import { RoleServiceImpl } from "../services/impl/role.service.impl";
import { RoleService } from "../services/role.service";
import { AuthService } from "../services/auth.service";
import { AuthServiceImpl } from "../services/impl/auth.service.impl";

const container = new Container();

// repository
container.bind<Repositories>(TYPES.Repositories).to(RepositoriesImpl);

// services
container.bind<ProductService>(TYPES.ProductService).to(ProductServiceImpl);
container.bind<CategoryService>(TYPES.CategoryService).to(CategoryServiceImpl);
container.bind<UserService>(TYPES.UserService).to(UserServiceImpl);
container.bind<RoleService>(TYPES.RoleService).to(RoleServiceImpl);
container.bind<AuthService>(TYPES.AuthService).to(AuthServiceImpl);

export default container;
