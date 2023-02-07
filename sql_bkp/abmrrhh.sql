-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 01-02-2023 a las 17:47:49
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `abmusers`
--

CREATE TABLE `abmusers` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  `ipphone` int(11) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `organization` varchar(255) DEFAULT NULL,
  `chief` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `external` tinyint(1) DEFAULT NULL,
  `maildomain` varchar(255) DEFAULT NULL,
  `userduedate` datetime DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chiefs`
--

CREATE TABLE `chiefs` (
  `id` int(11) NOT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `chiefs`
--

INSERT INTO `chiefs` (`id`, `userName`, `fullName`, `email`, `createdAt`, `updatedAt`) VALUES
(7, 'segural', 'Luciano Segura', 'luciano.segura@rtp.com.ar', '2023-01-31 20:36:32', '2023-01-31 20:36:32'),
(8, 'cuellard', 'Delia Cuellar', 'delia.cuellar@rtp.com.ar', '2023-01-31 20:36:53', '2023-01-31 20:36:53');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departments`
--

CREATE TABLE `departments` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `departments`
--

INSERT INTO `departments` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(2, 'Area Física', '2023-01-26 21:19:49', '2023-01-26 21:19:49'),
(3, 'Area Médica', '2023-01-26 21:19:55', '2023-01-26 21:19:55'),
(4, 'Sistemas', '2023-01-26 21:20:01', '2023-01-26 21:20:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `domains`
--

CREATE TABLE `domains` (
  `id` int(11) NOT NULL,
  `domainName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `domains`
--

INSERT INTO `domains` (`id`, `domainName`, `createdAt`, `updatedAt`) VALUES
(1, 'rtp.com.ar', '2023-01-26 21:05:54', '2023-01-26 21:05:54'),
(2, 'ceditrin.com.ar', '2023-01-26 21:06:07', '2023-01-26 21:06:07'),
(4, 'redcio.com.ar', '2023-01-26 21:13:41', '2023-01-26 21:13:41');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `locations`
--

CREATE TABLE `locations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `locations`
--

INSERT INTO `locations` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Billinghurst', '2023-01-26 21:19:17', '2023-01-26 21:19:17'),
(2, 'Vidt', '2023-01-26 21:19:21', '2023-01-26 21:19:21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `organizations`
--

CREATE TABLE `organizations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `organizations`
--

INSERT INTO `organizations` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Vidt CentroMedico SRL', '2023-01-26 21:18:59', '2023-01-26 21:18:59'),
(2, 'Terapia Radiante SRL', '2023-01-26 21:19:08', '2023-01-26 21:19:08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permissions`
--

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permissions_roles`
--

CREATE TABLE `permissions_roles` (
  `id` int(11) NOT NULL,
  `role_Id` int(11) NOT NULL,
  `permissionId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'SysAdmin', '2023-01-23 20:35:20', '2023-01-31 22:53:37');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles_users`
--

CREATE TABLE `roles_users` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `roleId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `roles_users`
--

INSERT INTO `roles_users` (`id`, `userId`, `roleId`) VALUES
(3, 1, 1),
(4, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
('20230124212514-create-roles_users.js'),
('20230131192640-create-chiefs.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `active` int(11) NOT NULL DEFAULT '1',
  `resetFlag` int(11) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `fullName`, `username`, `mail`, `password`, `active`, `resetFlag`, `createdAt`, `updatedAt`) VALUES
(1, 'Luciano Segura', 'segural', 'luciano.segura@rtp.com.ar', '$2b$10$hO8swcb6if3TLwtnAafzAeldw5G4qRkBDvyYsp4pDAP9ejZHauS6i', 1, 0, '2023-01-23 20:28:08', '2023-01-30 20:24:23'),
(2, 'Flavio Salinas', 'salinasf', 'flavio.salinas@rtp.com.ar', '$2b$10$nrP5.AeP3KLYyk7UB5B7Ee05hD9G6WsnajFtE5O7DL/jxCGeeoAu.', 1, 0, '2023-01-26 10:37:00', '2023-01-26 10:37:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `abmusers`
--
ALTER TABLE `abmusers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `chiefs`
--
ALTER TABLE `chiefs`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `domains`
--
ALTER TABLE `domains`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `organizations`
--
ALTER TABLE `organizations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `permissions_roles`
--
ALTER TABLE `permissions_roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles_users`
--
ALTER TABLE `roles_users`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `abmusers`
--
ALTER TABLE `abmusers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `chiefs`
--
ALTER TABLE `chiefs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `domains`
--
ALTER TABLE `domains`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `organizations`
--
ALTER TABLE `organizations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `permissions_roles`
--
ALTER TABLE `permissions_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `roles_users`
--
ALTER TABLE `roles_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
