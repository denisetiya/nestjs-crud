import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-playload.interface'; // Definisikan interface payload Anda
import { password } from 'bun';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'dwdlkawdiadlakwdjawd',
    });
  }

  async validate(payload: JwtPayload) {
    return { email : payload.email, password : payload.password };
  }
}
