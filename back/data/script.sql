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

INSERT INTO EstadoUsuario (titulo, clave)
VALUES 
('Activo', 'activo'), 
('Baja Permanente', 'baja');