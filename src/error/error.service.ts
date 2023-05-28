import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

/**
 * This is a type that we define our errors. Errors contain `message` to describe what is wrong and `statusCode`
 */
type StandardError = {
  message: string;
  statusCode: number;
};
type Errors =
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'INVALID_FILE_EXTENSION'
  | 'INTERNAL_SERVER_ERROR'
  | 'ROLE_ID_OR_USER_ID_DOES_NOT_EXIST'
  | 'USERROLE_TO_DELETE_DOES_NOT_EXIST'
  | 'ROLE_IDS_DOES_NOT_EXIST'
  | 'PROPERTY_ALREADY_REGISTERED'
  | 'INVALID_EMAIL'
  | 'INVALID_MOBILE'
  | 'USER_DOES_NOT_EXIST'
  | 'ROLE_DOES_NOT_EXIST'
  | 'CATEGORY_IDS_DOES_NOT_EXIST'
  | 'CONTENT_DOES_NOT_EXIST'
  | 'UPLOAD_SIZE_LIMIT'
  | 'CATEGORY_DOES_NOT_EXIST'
  | 'CATEGORY_TYPE_DOES_NOT_EXIST'
  | 'USERROLE_ALREADY_EXIST';
type ResponseError = {
  [key in Errors]: StandardError;
};

/**
 * We use this class to Handle errors
 */
@Injectable()
export class ErrorService {
  throwStandardError(error: StandardError, overwriteMessage?: string) {
    throw new HttpException(
      overwriteMessage ? overwriteMessage : error.message,
      error.statusCode
    );
  }
  ResponseErrors: ResponseError = {
    UNAUTHORIZED: {
      statusCode: HttpStatus.UNAUTHORIZED,
      message: 'عدم احراز هویت'
    },
    FORBIDDEN: {
      statusCode: HttpStatus.FORBIDDEN,
      message: 'عدم دسترسی مناسب'
    },
    INVALID_FILE_EXTENSION: {
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'فایل با این پسوند مجاز نمی باشد'
    },
    INTERNAL_SERVER_ERROR: {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'خظای ناشناخته'
    },
    USERROLE_ALREADY_EXIST: {
      statusCode: HttpStatus.CONFLICT,
      message: 'ای نقش قبلا ثبت شده است'
    },
    ROLE_ID_OR_USER_ID_DOES_NOT_EXIST: {
      statusCode: HttpStatus.NOT_FOUND,
      message: 'role_id یا user_id وجود ندارد'
    },
    USERROLE_TO_DELETE_DOES_NOT_EXIST: {
      statusCode: HttpStatus.NOT_FOUND,
      message: 'UserRole وجود ندارد'
    },
    PROPERTY_ALREADY_REGISTERED: {
      statusCode: HttpStatus.CONFLICT,
      message: 'قبلا ثبت شده است'
    },
    INVALID_EMAIL: {
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'ایمیل صحیح نمی باشد'
    },
    INVALID_MOBILE: {
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'تلفن همراه صحیح نمی باشد'
    },
    ROLE_IDS_DOES_NOT_EXIST: {
      statusCode: HttpStatus.NOT_FOUND,
      message: 'نقش های مورد نظر وجود ندارند'
    },
    USER_DOES_NOT_EXIST: {
      statusCode: HttpStatus.NOT_FOUND,
      message: 'کاربر یافت نشد'
    },
    ROLE_DOES_NOT_EXIST: {
      statusCode: HttpStatus.NOT_FOUND,
      message: 'نقش وجود ندارد'
    },
    CATEGORY_IDS_DOES_NOT_EXIST: {
      statusCode: HttpStatus.NOT_FOUND,
      message: 'دسته بندی وجود ندارند'
    },
    CONTENT_DOES_NOT_EXIST: {
      statusCode: HttpStatus.NOT_FOUND,
      message: 'محتوا یافت نشد'
    },
    UPLOAD_SIZE_LIMIT: {
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'سایز فایل بیشتر از حد مجاز می باشد'
    },
    CATEGORY_TYPE_DOES_NOT_EXIST: {
      statusCode: HttpStatus.NOT_FOUND,
      message: 'نوع دسته بندی مورد نظر وجود ندارد'
    },
    CATEGORY_DOES_NOT_EXIST: {
      statusCode: HttpStatus.NOT_FOUND,
      message: 'دسته بندی مورد نظر وجود ندارد'
    }
  };
}
