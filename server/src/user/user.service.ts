import {BadRequestException, Injectable} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {Repository} from "typeorm";
import * as argon2 from "argon2";

@Injectable()
export class UserService {
  constructor(
      @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}
  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
      where: {
        username: createUserDto.username
      }
    })
    if (existUser) throw new BadRequestException('This username already exist!')
    const  user = await this.userRepository.save({
      username: createUserDto.username,
      name: createUserDto.name,
      password: await argon2.hash(createUserDto.password)
    })
    return { user };
  }

  async findOne(username: string) {
    return await this.userRepository.findOne({
      where: {
        username: username
      }
    })
  }
}
