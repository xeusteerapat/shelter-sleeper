import { AuthGuard } from '@nestjs/passport';

export class LocaLAuthGuard extends AuthGuard('local') {}
