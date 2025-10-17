import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const isProd = process.env.NODE_ENV === 'production';

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Error interno del servidor';
    let stack: string | undefined = undefined;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.message;
      stack = exception.stack;
    }

    // Logging siempre ocurre
    this.logger.error(`Error en ${request.method} ${request.url}`, exception instanceof Error ? exception.stack : '');

    // Respuesta al cliente
    const errorResponse: Record<string, any> = {
      statusCode: status,
      message: isProd ? message : exception instanceof Error ? exception.message : message,
      timestamp: new Date().toISOString(),
      path: request.url,
    };

    if (!isProd && stack) {
      errorResponse.stack = stack;
    }

    response.status(status).json(errorResponse);
  }
}