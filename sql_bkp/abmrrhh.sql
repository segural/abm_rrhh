-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 10-02-2023 a las 18:32:53
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

--
-- Volcado de datos para la tabla `abmusers`
--

INSERT INTO `abmusers` (`id`, `firstName`, `lastName`, `position`, `location`, `phone`, `birthday`, `ipphone`, `department`, `organization`, `chief`, `username`, `external`, `maildomain`, `userduedate`, `mail`, `status`, `createdAt`, `updatedAt`) VALUES
(4, 'Juan', 'Perez', 'Fisico', 'Vidt', 52786004, '1985-02-25 00:00:00', 56895, 'Area Física', 'Vidt CentroMedico SRL', 'Silvio Arbiser', 'perezj', 0, 'rtp.com.ar', '9999-12-31 00:00:00', 'juan.perez@rtp.com.ar', 'disabled', '2023-02-01 19:46:47', '2023-02-10 18:11:41'),
(5, 'Luciano', 'Segura', 'IT', 'Billinghurst', 55330876, '1979-09-21 00:00:00', NULL, 'Sistemas', 'Vidt CentroMedico SRL', 'Luciano Segura', 'segural', 0, 'rtp.com.ar', '9999-12-31 00:00:00', 'luciano.segura@rtp.com.ar', 'ok', '2023-02-01 19:59:38', '2023-02-01 19:59:38'),
(6, 'Prueba', 'Probando', 'Compras', 'Vidt', 56985645, '1986-02-15 00:00:00', NULL, 'Area Médica', 'Terapia Radiante SRL', 'Jorge Chiozza', NULL, 0, 'redcio.com.ar', '9999-12-31 00:00:00', NULL, 'chief', '2023-02-07 18:33:29', '2023-02-07 18:33:29'),
(7, 'Manda', 'Lorian', 'Recepción', 'Vidt', 51992199, '1999-02-25 00:00:00', NULL, 'Operaciones', 'Vidt CentroMedico SRL', 'Delia Cuellar', NULL, 0, 'rtp.com.ar', '9999-12-31 00:00:00', NULL, 'it', '2023-02-08 19:33:09', '2023-02-08 19:33:09'),
(8, 'Enzo', 'Fernandez', 'Volante', 'Hospital Español', 52369856, '1986-02-22 00:00:00', 52365, 'Area Médica', 'Ceditrin SRL', 'Jorge Chiozza', 'fernendeze', 0, 'ceditrin.com.ar', '9999-12-31 00:00:00', 'Enzo.Fernandez@ceditrin.com.ar', 'it_disable', '2023-02-10 17:02:49', '2023-02-10 17:03:21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chiefs`
--

CREATE TABLE `chiefs` (
  `id` int(11) NOT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `chiefs`
--

INSERT INTO `chiefs` (`id`, `userName`, `fullName`, `email`, `department`, `createdAt`, `updatedAt`) VALUES
(7, 'segural', 'Luciano Segura', 'luciano.segura@rtp.com.ar', 'Sistemas', '2023-01-31 20:36:32', '2023-01-31 20:36:32'),
(8, 'cuellard', 'Delia Cuellar', 'delia.cuellar@rtp.com.ar', 'Operaciones', '2023-01-31 20:36:53', '2023-01-31 20:36:53'),
(9, 'arbisers', 'Silvio Arbiser', 'silvio.arbiser@rtp.com.ar', 'Area Física', '2023-02-01 17:59:04', '2023-02-01 17:59:04'),
(10, 'chiozzaj', 'Jorge Chiozza', 'jorge.chiozza@vidtcm.com.ar', 'Area Médica', '2023-02-08 19:41:24', '2023-02-08 19:41:24');

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
(4, 'Sistemas', '2023-01-26 21:20:01', '2023-01-26 21:20:01'),
(6, 'Operaciones', '2023-02-08 19:39:55', '2023-02-08 19:39:55');

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
(2, 'Vidt', '2023-01-26 21:19:21', '2023-01-26 21:19:21'),
(3, 'Hospital Español', '2023-02-08 19:36:38', '2023-02-08 19:36:38'),
(4, 'La Plata - Terapia Radiante', '2023-02-08 19:37:07', '2023-02-08 19:37:07');

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
(2, 'Terapia Radiante SRL', '2023-01-26 21:19:08', '2023-01-26 21:19:08'),
(3, 'Ceditrin SRL', '2023-02-08 19:36:26', '2023-02-08 19:36:26');

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
(12, 'permisos_eliminar', 'Permite eliminar los permisos', '2023-01-31 22:56:11', '2023-01-31 22:56:11'),
(13, 'usuarios_deshabilitar', 'Permite que sistemas marque al usuario como deshabilitado', '2023-02-10 15:51:44', '2023-02-10 15:52:02');

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
(77, 1, 1),
(78, 1, 2),
(79, 1, 3),
(80, 1, 4),
(81, 1, 5),
(82, 1, 6),
(83, 1, 7),
(84, 1, 8),
(85, 1, 9),
(86, 1, 10),
(87, 1, 11),
(88, 1, 12),
(90, 1, 13);

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
(1, 'SysAdmin', '2023-01-23 20:35:20', '2023-02-07 18:25:01');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `chiefs`
--
ALTER TABLE `chiefs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `domains`
--
ALTER TABLE `domains`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `organizations`
--
ALTER TABLE `organizations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `permissions_roles`
--
ALTER TABLE `permissions_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
