
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum ContentType {
    AUD = "AUD",
    VID = "VID",
    PIC = "PIC",
    TEXT = "TEXT"
}

export enum Order {
    asc = "asc",
    desc = "desc"
}

export enum UserCreateArgRole {
    user = "user",
    admin = "admin"
}

export interface CategoryTypeFilter {
    name?: StringFilterOptions;
}

export interface CategoryArgs {
    name?: string;
    category_type_id: number;
    description?: string;
    url_descriptor?: string;
    logo?: string;
    banner?: string;
}

export interface CategoryFilter {
    name?: StringFilterOptions;
    description?: StringFilterOptions;
    status?: NumberFilterOptions;
    url_descriptor?: StringFilterOptions;
    category_type_id?: number;
}

export interface CategoryOrderFields {
    created_at?: Order;
    updated_at?: Order;
    name?: Order;
    description?: Order;
}

export interface CategoryUpdateArgs {
    name?: string;
    category_type_id?: number;
    description?: string;
    url_descriptor?: string;
    logo?: string;
    banner?: string;
}

export interface ContentUpdateArgs {
    title?: string;
    text?: string;
    thumbnail_path?: string;
    type?: ContentType;
    file?: string;
    status?: number;
    categoryIds?: number[];
}

export interface ContentCreateArgs {
    title: string;
    text?: string;
    thumbnail_path?: string;
    file?: string;
    type: ContentType;
    status?: number;
    categoryIds?: number[];
}

export interface StringFilterOptions {
    equals?: string;
    not?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
}

export interface NumberFilterOptions {
    equals?: number;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
}

export interface ContentFilter {
    title?: StringFilterOptions;
    text?: StringFilterOptions;
    thumbnail_path?: StringFilterOptions;
    type?: ContentType;
    status?: number;
    created_at?: Date;
    updated_at?: Date;
}

export interface ContentOrderFields {
    title?: Order;
    text?: Order;
    thumbnail_path?: Order;
    type?: Order;
    status?: Order;
    created_at?: Order;
    updated_at?: Order;
}

export interface CreateUserRoleArgs {
    user_id: number;
    role_id: number;
}

export interface UserRoleFilter {
    user_id?: number;
    role_id?: number;
}

export interface UserUpdateArgs {
    first_name?: string;
    last_name?: string;
    email?: string;
    mobile?: string;
    password?: string;
    status?: number;
    role_ids?: number[];
    created_at?: Date;
    updated_at?: Date;
}

export interface UserCreateArgs {
    first_name: string;
    last_name: string;
    email: string;
    mobile: string;
    password: string;
    status: number;
    role_ids?: number[];
    created_at?: Date;
    updated_at?: Date;
}

export interface UserFilter {
    first_name?: StringFilterOptions;
    last_name?: StringFilterOptions;
    email?: StringFilterOptions;
    mobile?: StringFilterOptions;
    created_at?: StringFilterOptions;
    updated_at?: StringFilterOptions;
}

export interface UserOrderFields {
    first_name?: Order;
    last_name?: Order;
    email?: Order;
    mobile?: Order;
    created_at?: Order;
    updated_at?: Order;
}

export interface SessionArg {
    device_type: string;
    os: string;
    name: string;
    version: string;
    visitorId: string;
}

export interface CategoryType {
    id: number;
    name: string;
    categories?: CategoryListResult;
    contents?: ContentListResult;
}

export interface TestsData {
    id?: number;
    myData?: DATA;
}

export interface DATA {
    test?: number;
}

export interface IQuery {
    categoryTypes(page?: number, filter?: CategoryTypeFilter): CategoryTypeListResult | Promise<CategoryTypeListResult>;
    getCategoryTypeById(id: number): CategoryType | Promise<CategoryType>;
    categories(page?: number, filter?: CategoryFilter, orderBy?: CategoryOrderFields[]): CategoryListResult | Promise<CategoryListResult>;
    getCategoryById(id: number): Category | Promise<Category>;
    contents(filter?: ContentFilter, page?: number, orderBy?: ContentOrderFields[], category_id?: number, category_type_id?: number): ContentListResult | Promise<ContentListResult>;
    contentById(id: number): Content | Promise<Content>;
    roles(): RoleListResult | Promise<RoleListResult>;
    usersRoles(page?: number, filter?: UserRoleFilter): UserRoleListResult | Promise<UserRoleListResult>;
    userRoleById(userId: number): UserRole[] | Promise<UserRole[]>;
    users(page?: number, filter?: UserFilter, orderBy?: UserOrderFields[]): UserListResult | Promise<UserListResult>;
    userById(id: number): User | Promise<User>;
    isLogin(token: string): boolean | Promise<boolean>;
    profile(): User | Promise<User>;
    mySessions(): SessionListResult | Promise<SessionListResult>;
    getUserSessions(mobile: string): SessionListResult | Promise<SessionListResult>;
}

export interface IMutation {
    createCategoryType(name: string): CategoryType | Promise<CategoryType>;
    updateCategoryType(id: number, name: string): CategoryType | Promise<CategoryType>;
    deleteCategoryType(id: number): CategoryType | Promise<CategoryType>;
    createCategory(category?: CategoryArgs): Category | Promise<Category>;
    updateCategory(id: number, category: CategoryUpdateArgs): Category | Promise<Category>;
    deleteCategory(id: number): Category | Promise<Category>;
    createContent(content?: ContentCreateArgs): Content | Promise<Content>;
    updateContent(id: number, content?: ContentUpdateArgs): Content | Promise<Content>;
    deleteContent(id: number): Content | Promise<Content>;
    audioUpload(file: Upload): FileOutput | Promise<FileOutput>;
    imageUpload(file: Upload): FileOutput | Promise<FileOutput>;
    videoUpload(file: Upload): FileOutput | Promise<FileOutput>;
    createRole(name: string): Role | Promise<Role>;
    updateRole(id: number, name: string): Role | Promise<Role>;
    deleteRole(id: number): Role | Promise<Role>;
    createUserRole(userId: number, roleId: number): UserRole | Promise<UserRole>;
    deleteUserRole(userRoleId: number): UserRole | Promise<UserRole>;
    logout(token: string): boolean | Promise<boolean>;
    login(mobile: string, password: string): Login | Promise<Login>;
    refreshToken(refreshToken: string): Login | Promise<Login>;
    createUser(user?: UserCreateArgs): User | Promise<User>;
    updateUser(id: number, user: UserUpdateArgs): User | Promise<User>;
    deleteUser(id: number): User | Promise<User>;
    terminateMySession(session: SessionArg): boolean | Promise<boolean>;
    terminateUserSession(mobile: string, session: SessionArg): boolean | Promise<boolean>;
}

export interface CategoryTypeListResult {
    data?: CategoryType[];
    totalCount: number;
}

export interface Category {
    id?: number;
    name?: string;
    category_type_id?: number;
    description?: string;
    url_descriptor?: string;
    logo?: string;
    banner?: string;
    status?: number;
    created_at?: Date;
    updated_at?: Date;
    categoryType?: CategoryType;
    contents?: ContentListResult;
}

export interface CategoryListResult {
    data?: Category[];
    totalCount: number;
}

export interface Content {
    id?: number;
    title?: string;
    text?: string;
    thumbnail_path?: string;
    file?: string;
    type?: string;
    status?: number;
    created_at?: Date;
    updated_at?: Date;
    categories?: CategoryListResult;
    categoryTypes?: CategoryTypeListResult;
}

export interface ContentListResult {
    data?: Content[];
    totalCount: number;
}

export interface File {
    filename: string;
    mimetype: string;
    encoding: string;
    createReadStream: createReadStream;
}

export interface FileOutput {
    path?: string;
    error?: string;
}

export interface Role {
    id?: number;
    name?: string;
    users?: UserListResult;
}

export interface RoleListResult {
    data?: Role[];
    totalCount?: number;
}

export interface UserRole {
    id: number;
    user_id: number;
    role_id: number;
    created_at?: Date;
    updated_at?: Date;
    role?: Role;
}

export interface UserRoleListResult {
    data?: UserRole[];
    totalCount?: number;
}

export interface User {
    id?: number;
    first_name: string;
    last_name: string;
    email: string;
    mobile: string;
    status: number;
    created_at?: Date;
    updated_at?: Date;
    userRoles?: UserRoleListResult;
}

export interface Login {
    access_token?: string;
    refresh_token?: string;
    token_type?: string;
    expires_in?: number;
}

export interface UserListResult {
    data?: User[];
    totalCount?: number;
}

export interface Session {
    device_type?: string;
    os?: string;
    name?: string;
    version?: string;
    visitorId?: string;
}

export interface SessionListResult {
    data?: Session[];
    totalCount?: number;
}

export type Upload = any;
export type createReadStream = any;
