import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: (err: Error, user: any) => void) {
    console.log("TYT3");
    done(null, user);
  }

  deserializeUser(payload: any, done: (err: Error, user: any) => void) {
    console.log("TYT4");

    done(null, payload);
  }
}