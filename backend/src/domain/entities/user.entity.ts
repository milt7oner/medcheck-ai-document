
import { Email } from "../value-objects/email.vo";
import { Role } from "../enums/role.enum";
export class User {
  private readonly id: string;
  private name: string;
  private role: Role;
  private email: Email;
  private password: string;
  private isActive: boolean;
  private readonly createdAt: Date;
  private readonly updatedAt: Date;
  private documents: string[];
  public reviewedDocuments: string[];

  constructor(id: string, name: string,role:Role = Role.USER, email: Email, password: string,isActive: boolean = true,
     createdAt: Date = new Date(),updatedAt: Date = new Date(),documents:string[]=[],reviewedDocuments:string[]=[]) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.email = email;
    this.password = password;
    this.isActive= isActive;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.documents = documents;
    this.reviewedDocuments = reviewedDocuments;
  }

  public getEmail(): Email {
    return this.email;
  }

  public changePassword(newPassword: string): void {
    if (newPassword.length < 8) {
      throw new Error('La contraseña debe tener al menos 8 caracteres');
    }
    this.password = newPassword;
  }
}