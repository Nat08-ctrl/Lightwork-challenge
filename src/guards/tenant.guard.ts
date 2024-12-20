import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class TenantGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    // const user = request.user;

    // if (!user || !user.tenantId) {
    //   return false;
    // }

    // Add tenantId to request for use in controllers
    // request.tenantId = user.tenantId;
    return true;
  }
}