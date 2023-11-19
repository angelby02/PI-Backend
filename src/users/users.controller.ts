// users.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards,  } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto'; 
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //@UseGuards(JwtAuthGuard)
  @Get()
  findAll(){
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): any {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): any {
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): any {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): any {
    return this.usersService.remove(id);
  }
}
