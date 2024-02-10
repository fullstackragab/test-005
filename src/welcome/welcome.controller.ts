import { Controller, Get } from '@nestjs/common';

@Controller('welcome')
export class WelcomeController {
  @Get()
  welcome() {
    return 'Welcome!';
  }
}
