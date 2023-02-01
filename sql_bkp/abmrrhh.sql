-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 31-01-2023 a las 22:58:46
-- Versión del servidor: 5.7.24
-- Versión de PHP: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `abmrrhh`
--

--
-- Volcado de datos para la tabla `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'abm_users', 'Permite solicitar un Alta de usuario y ver los Pendientes', '2023-01-23 20:34:55', '2023-01-30 00:43:15'),
(2, 'system_admin', 'Permite acceder a la Config del Sistema', '2023-01-23 20:34:55', '2023-01-23 20:34:55'),
(3, 'roles_gestionar', 'Permite gestionar los roles', '2023-01-29 11:05:31', '2023-01-29 11:05:31'),
(4, 'roles_editar', 'Permite editar los roles', '2023-01-29 11:06:16', '2023-01-29 11:06:16'),
(5, 'roles_eliminar', 'Permite eliminar los roles', '2023-01-29 11:06:16', '2023-01-29 11:06:16'),
(6, 'usuarios_gestionar', 'Permite gestión de usuarios', '2023-01-30 13:28:46', '2023-01-30 13:28:46'),
(7, 'usuarios_crear', 'Permite crear usuarios', '2023-01-30 13:29:05', '2023-01-30 13:29:05'),
(8, 'usuarios_editar', 'Permite editar usuarios', '2023-01-30 13:29:27', '2023-01-30 13:29:27'),
(9, 'usuarios_eliminar', 'Permite eliminar usuarios', '2023-01-30 13:29:44', '2023-01-30 13:29:44'),
(10, 'permisos_gestionar', 'Permite gestión de permisos', '2023-01-31 19:53:13', '2023-01-31 19:53:13'),
(11, 'permisos_editar', 'Permite editar los permisos', '2023-01-31 22:55:52', '2023-01-31 22:55:52'),
(12, 'permisos_eliminar', 'Permite eliminar los permisos', '2023-01-31 22:56:11', '2023-01-31 22:56:11');

--
-- Volcado de datos para la tabla `permissions_roles`
--

INSERT INTO `permissions_roles` (`id`, `role_Id`, `permissionId`) VALUES
(43, 1, 2),
(44, 1, 3),
(45, 1, 4),
(46, 1, 5),
(47, 1, 6),
(48, 1, 7),
(49, 1, 8),
(50, 1, 9),
(51, 1, 10),
(52, 1, 11),
(53, 1, 12);

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'SysAdmin', '2023-01-23 20:35:20', '2023-01-31 22:53:37');

--
-- Volcado de datos para la tabla `roles_users`
--

INSERT INTO `roles_users` (`id`, `userId`, `roleId`) VALUES
(3, 1, 1),
(4, 2, 1);

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230117210954-create-abmuser.js'),
('20230117212339-create-user.js'),
('20230117212424-create-role.js'),
('20230117212436-create-permission.js'),
('20230117212514-create-role-permission.js'),
('20230124190602-create-domains.js'),
('20230124190654-create-organizations.js'),
('20230124191059-create-locations.js'),
('20230124191112-create-departments.js'),
('20230124212514-create-roles_users.js');

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `fullName`, `username`, `mail`, `password`, `active`, `resetFlag`, `createdAt`, `updatedAt`) VALUES
(1, 'Luciano Segura', 'segural', 'luciano.segura@rtp.com.ar', '$2b$10$hO8swcb6if3TLwtnAafzAeldw5G4qRkBDvyYsp4pDAP9ejZHauS6i', 1, 0, '2023-01-23 20:28:08', '2023-01-30 20:24:23'),
(2, 'Flavio Salinas', 'salinasf', 'flavio.salinas@rtp.com.ar', '$2b$10$nrP5.AeP3KLYyk7UB5B7Ee05hD9G6WsnajFtE5O7DL/jxCGeeoAu.', 1, 0, '2023-01-26 10:37:00', '2023-01-26 10:37:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
