import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';
import {
	FastifyAdapter,
	NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter({
			ignoreTrailingSlash: true,
		}),
	);
	// app.setGlobalPrefix('api');
	// app.enableVersioning({
	// 	type: VersioningType.URI,
	// });

	const allowedOrigins = [
		'https://asd-management.netlify.app/',
		'http://localhost:5173',
	];

	app.enableCors({
		origin: (origin, callback) => {
			// Allow request without origin (CLI, mobile apps, etc.)
			if (!origin) return callback(null, true);

			if (allowedOrigins.indexOf(origin) !== -1) {
				return callback(null, true);
			} else {
				return callback(new Error('Not allowed by CORS'), false);
			}
		},
		// credentials: true, // cookie and sessions
	});

	// API swagger documentation
	const config = new DocumentBuilder()
		.setTitle('ASD Management API')
		.setDescription('Description of the available endpoints of the ASD Management API')
		.setVersion('2.0')
		.addTag('ASD')
		.build();
	const documentFactory = () => SwaggerModule.createDocument(app, config);
	SwaggerModule.setup( "api", app, documentFactory());

	// Local Web Server
	await app.listen(process.env.PORT || 3000);
}
bootstrap();
