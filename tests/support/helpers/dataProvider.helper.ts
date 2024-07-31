import { generate } from 'randomstring';
import { UserData } from '../../types/interfaces';

const adminUserEmail = process.env.USER_EMAIL;
const adminUserPassword = process.env.USER_PASSWORD;

export default class {
  generateRandomString (len: number): string {
    return generate({ length: len, charset: 'hex' });
  }

  generateEmail (length = 5): string {
    return `${this.generateRandomString(length)}@test.com`;
  }

  adminUserData ():UserData {
    return {
      email: adminUserEmail,
      password: adminUserPassword
    };
  }
}
