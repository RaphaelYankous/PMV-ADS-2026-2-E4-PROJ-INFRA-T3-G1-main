import 'reflect-metadata';
import { ExecutionContext, InternalServerErrorException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../../common/decorators/public.decorator.js';
import { ROLES_KEY } from '../../common/decorators/roles.decorator.js';
import { Role } from '../../usuarios/entities/usuario.entity.js';
import { resolveAccessPolicy } from './access-policy.js';

const reflector = new Reflector();

function contextFor(handler: Function, controller: Function): ExecutionContext {
  return {
    getHandler: () => handler,
    getClass: () => controller,
  } as ExecutionContext;
}

describe('resolveAccessPolicy', () => {
  it('requer autenticação quando não há policy declarada', () => {
    class Controller {}
    const handler = () => undefined;

    expect(resolveAccessPolicy(reflector, contextFor(handler, Controller))).toEqual({
      kind: 'authenticated',
    });
  });

  it('permite que método público sobrescreva roles do controller', () => {
    class Controller {}
    const handler = () => undefined;
    Reflect.defineMetadata(ROLES_KEY, [Role.ADMIN], Controller);
    Reflect.defineMetadata(IS_PUBLIC_KEY, true, handler);

    expect(resolveAccessPolicy(reflector, contextFor(handler, Controller))).toEqual({
      kind: 'public',
    });
  });

  it('permite que método com roles sobrescreva controller público', () => {
    class Controller {}
    const handler = () => undefined;
    Reflect.defineMetadata(IS_PUBLIC_KEY, true, Controller);
    Reflect.defineMetadata(ROLES_KEY, [Role.PROFISSIONAL], handler);

    expect(resolveAccessPolicy(reflector, contextFor(handler, Controller))).toEqual({
      kind: 'roles',
      roles: [Role.PROFISSIONAL],
    });
  });

  it('utiliza policy do controller quando o método não tiver decorator', () => {
    class Controller {}
    const handler = () => undefined;
    Reflect.defineMetadata(ROLES_KEY, [Role.CLIENTE], Controller);

    expect(resolveAccessPolicy(reflector, contextFor(handler, Controller))).toEqual({
      kind: 'roles',
      roles: [Role.CLIENTE],
    });
  });

  it('retorna erro se public e roles forem utilizados no mesmo nível', () => {
    class Controller {}
    const handler = () => undefined;
    Reflect.defineMetadata(IS_PUBLIC_KEY, true, handler);
    Reflect.defineMetadata(ROLES_KEY, [Role.ADMIN], handler);

    expect(() => resolveAccessPolicy(reflector, contextFor(handler, Controller))).toThrow(
      InternalServerErrorException,
    );
  });
});
