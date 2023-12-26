import {BadRequestException, Injectable} from '@nestjs/common';
import {UserService} from "../user/user.service";
import * as argon2 from "argon2";
import {JwtService} from "@nestjs/jwt";
import {IUser} from "../types/types";

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private readonly jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);
    const passwordIsMatch = await argon2.verify(user.password, password)
    if (user && passwordIsMatch) {
      return user
    }
    throw new BadRequestException('username or password are incorrect!')
  }

  async login(user: IUser) {
    const { id, username, name } = user
    return {
      id,
      username,
      name,
      access_token: this.jwtService.sign({ id: user.id, username: user.username })
    }
  }
}
