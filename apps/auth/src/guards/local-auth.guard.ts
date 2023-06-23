import { AuthGuard } from '@nestjs/passport';

export class LocaAuthGuard extends AuthGuard('local') {}
