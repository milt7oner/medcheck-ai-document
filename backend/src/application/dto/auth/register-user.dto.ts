import { Role } from 'src/domain/enums/role.enum';

export interface RegisterUserInputDTO {
  name: string;
  role: Role;
  email: string;
  password: string;
  isActive: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  documents: string[];
  reviewedDocuments: string[];
}

export interface RegisterUserOutputDTO {
  id: string;
  name: string;
  role: Role;
  email: string;
  isActive: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  documents: string[];
  reviewedDocuments: string[];
}
