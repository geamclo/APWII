"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    app.enableCors();
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Documentación Control de Propinas')
        .setDescription('Documentación sobre el proyecto del Segundo Parcial Control de Propinas')
        .setVersion('0.0.1')
        .addTag('Entidades')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('/', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    await app.listen(process.env.PORT || 5000);
    console.log('Servidor corriendo');
}
bootstrap();
//# sourceMappingURL=main.js.map