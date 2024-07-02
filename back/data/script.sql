CREATE TABLE EstadoUsuario (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    titulo VARCHAR(255) NOT NULL,       
    clave VARCHAR(150) NOT NULL          
);

CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,      
    nombre VARCHAR(255) NOT NULL,           
    fecha DATE NOT NULL,                    
    telefono VARCHAR(20) NOT NULL,           
    correo VARCHAR(255) NOT NULL,           
    creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    EstadoUsuarioId INT NOT NULL,            
    
    FOREIGN KEY (EstadoUsuarioId) REFERENCES EstadoUsuario(id)
);

CREATE TABLE punteo_usuario(
	id INT AUTO_INCREMENT PRIMARY KEY,
    usuarioId INT NOT NULL,
    punteo float(2),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    
    FOREIGN KEY (usuarioId) REFERENCES Usuario(id)
);

INSERT INTO EstadoUsuario (titulo, clave)
VALUES 
('Activo', 'activo'), 
('Baja Permanente', 'baja');