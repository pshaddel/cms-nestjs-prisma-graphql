-- USE `content_white-label`;
DROP VIEW IF EXISTS `Content_Category_CategoryType`;
CREATE VIEW `Content_Category_CategoryType` AS

Select DISTINCT
  UUID() as 'view_id',
  Content.id,
  Content.title,
  Content.text,
  Content.thumbnail_path,
  Content.type,
  Content.status,
  Content.created_at,
  Content.updated_at,
  ContentCategory.category_id ,
  Category.name as category_name,
  Category.category_type_id,
  Category.description as category_description,
  Category.url_descriptor as category_url_descriptor,
  Category.logo as category_logo,
  Category.banner as category_banner,
  Category.status as category_status,
  Category.created_at as category_created_at,
  Category.updated_at as category_updated_at,
  CategoryType.name as category_type_name
	From content Content
LEFT OUTER JOIN content_category ContentCategory
    ON Content.id = ContentCategory.content_id
LEFT OUTER JOIN category Category
    ON ContentCategory.category_id = Category.id
LEFT OUTER JOIN category_type CategoryType
    ON Category.category_type_id = CategoryType.id