-- CreateTable
CREATE TABLE `EstadoUsuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(255) NOT NULL,
    `clave` VARCHAR(150) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    `fecha` DATE NOT NULL,
    `telefono` VARCHAR(20) NOT NULL,
    `correo` VARCHAR(255) NOT NULL,
    `creacion` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `EstadoUsuarioId` INTEGER NOT NULL DEFAULT 1,

    UNIQUE INDEX `Usuario_telefono_key`(`telefono`),
    INDEX `EstadoUsuarioId`(`EstadoUsuarioId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_ibfk_1` FOREIGN KEY (`EstadoUsuarioId`) REFERENCES `EstadoUsuario`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
