import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session'
import * as passport from 'passport'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import  express  from 'express';
async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  app.use(
    session({
      secret: 'keyword',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  const config = new DocumentBuilder()
  .setTitle("Pet Store")
  .setDescription("api documentation")
  .setVersion("1.0")
  .addTag("api")
  .build();

  const documentation = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("swagger", app, documentation);
  //app.use('/public', express.static(join(__dirname, '..', 'public')));
  await app.listen(3001);
}
bootstrap();
