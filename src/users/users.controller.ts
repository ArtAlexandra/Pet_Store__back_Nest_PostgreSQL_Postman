import { Controller, Header, HttpCode, HttpStatus, Body, Post, UseGuards, Request,Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import * as session from 'express-session';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { LoginUserRequest, LoginUserResponse, LogintCheckResponse, LogoutUserResponse, SignupRequest, SignupResponse } from './types';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @ApiBody({type:SignupRequest})
    @ApiOkResponse({type: SignupResponse})
    @Post('/signup')
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-type', 'application/json')
    createUser(@Body() createUserDto: CreateUserDto){
        return this.usersService.create(createUserDto);
    }

  
    @Get('/getall-user')
    getAllUsers(@Request() req) {
      return this.usersService.findAll();
    }

   
  @ApiBody({type: LoginUserRequest})
  @ApiOkResponse({type: LoginUserResponse})
  @Post('/login')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  login(@Request() req) {
    return { user: req.user, msg: 'Logged in' };
  }
  
  @ApiOkResponse({type: LogintCheckResponse})
  @Get('/login-check')
  @UseGuards(AuthenticatedGuard)
  loginCheck(@Request() req) {
    return req.user ;
  }
  

  @ApiOkResponse({type: LogoutUserResponse})
  @Get('/logout')
  logout(@Request() req) {
    req.session.destroy();
    return {msg: "session has ended"} ;
  }

  @Post('/addbalance/:id')
  addBalance(@Param('id') id:number, @Body() createUserDto: CreateUserDto ){
    return this.usersService.addBalance(id, createUserDto);    
  }

  @Get('/gazeuser/:id')
  gazeUser(@Param('id') id:number){
    return this.usersService.gazeUser(id);
  }
}
