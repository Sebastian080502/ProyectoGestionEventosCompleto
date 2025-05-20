import { Controller, Get, Post, Body, Patch, Param, Delete, } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';



@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


 @Post('login')
async login(@Body() loginUserDto: LoginUserDto) {
  console.log(loginUserDto);
  const user = await this.userService.login(loginUserDto.email, loginUserDto.password);
  return {
    success: true,
    message: 'Inicio de sesión exitoso',
    user,
  };
}


  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

 

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userService.remove(id);
  }
}
