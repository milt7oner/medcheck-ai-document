
import { Role } from '../enums/role.enum';

export class UserCreatedEvent {
  constructor(
    public readonly userId: string,
    public readonly name: string,
    public readonly email: string,
    public readonly role: Role,
    public readonly createdAt: Date
  ) {}
}