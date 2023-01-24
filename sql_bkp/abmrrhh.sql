-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 24-01-2023 a las 19:22:31
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
(1, 'abm_users', 'Permite solicitar un Alta de usuario y ver los Pendientes', '2023-01-23 20:34:55', '2023-01-23 20:34:55'),
(2, 'system_admin', 'Permite acceder a la Config del Sistema', '2023-01-23 20:34:55', '2023-01-23 20:34:55');

--
-- Volcado de datos para la tabla `permissions_roles`
--

INSERT INTO `permissions_roles` (`id`, `role_Id`, `permissionId`) VALUES
(1, 1, 1),
(2, 1, 2);

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'SysAdmin', '2023-01-23 20:35:20', '2023-01-23 20:35:20');

--
-- Volcado de datos para la tabla `roles_users`
--

INSERT INTO `roles_users` (`id`, `userId`, `roleId`) VALUES
(1, 1, 1);

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
(1, 'Luciano Segura', 'segural', 'luciano.segura@rtp.com.ar', '$2b$10$hO8swcb6if3TLwtnAafzAeldw5G4qRkBDvyYsp4pDAP9ejZHauS6i', 1, 0, '2023-01-23 20:28:08', '2023-01-23 20:28:08');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
