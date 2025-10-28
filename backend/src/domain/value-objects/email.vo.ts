export class Email {
  private constructor(public readonly value: string) {}

  static create(email: string): Email {
    if (!email) throw new Error('Email requerido');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) throw new Error('Formato de email inválido');
    return new Email(email.toLowerCase());
  }
  public toString(): string{
    return this.value
  }
}
