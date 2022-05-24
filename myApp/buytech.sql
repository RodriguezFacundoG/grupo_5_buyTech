-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-05-2022 a las 21:58:25
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `buytech`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `items`
--

CREATE TABLE `items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `items`
--

INSERT INTO `items` (`id`, `product_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 2),
(9, 3),
(10, 4),
(11, 1),
(12, 3),
(13, 4),
(14, 1),
(15, 1),
(16, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `stock` int(10) UNSIGNED NOT NULL,
  `weight` tinyint(3) UNSIGNED DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `price` int(10) UNSIGNED NOT NULL,
  `discount` tinyint(3) UNSIGNED DEFAULT 0,
  `picture` varchar(255) NOT NULL,
  `product_category_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `stock`, `weight`, `color`, `size`, `price`, `discount`, `picture`, `product_category_id`) VALUES
(1, 'Tablet samsung 13\"', 'asd', 123, 111, 'red', '111', 1234, 5, 'productImg-1652224831982.JPG', 0),
(2, 'aaaaaaaaa', 'aaaaaaaa', 1111, 111, '1111', '111111', 111, 11, 'productImg-1652236282314.JPG', 0),
(3, 'Samsung Galaxy S22 Ultra', 'Con un diseño de vanguardia, el celular Samsung Galaxy S22 Ultra ', 9, 228, 'Verde', '77.9 x 163.3 x 8.9mm', 254999, 0, 'productImg-1652535213243.jpg', 2),
(4, 'Mick', 'Broadstone', 20, NULL, NULL, NULL, 0, 0, '', NULL),
(5, 'Mick', 'Broadstone', 20, NULL, NULL, NULL, 0, 0, '', NULL),
(6, 'Mick', 'Broadstone', 20, NULL, NULL, NULL, 0, 0, '', NULL),
(7, 'Mick', 'Broadstone', 20, NULL, NULL, NULL, 0, 0, '', NULL),
(8, 'Mick', 'Broadstone', 20, NULL, NULL, NULL, 0, 0, '', NULL),
(9, 'Mick', 'Broadstone', 20, NULL, NULL, NULL, 0, 0, '', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_categories`
--

CREATE TABLE `product_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `product_categories`
--

INSERT INTO `product_categories` (`id`, `type`) VALUES
(1, 'laptops'),
(2, 'smartphones'),
(3, 'tablets'),
(4, 'accesories'),
(7, 'nuevaCategoria'),
(8, 'nuevaCategoria'),
(9, 'nuevaCategoria'),
(10, 'nuevaCategoria'),
(11, 'nuevaCategoria'),
(12, 'nuevaCategoria'),
(13, 'nuevaCategoria2'),
(14, 'nuevaCategoria'),
(15, 'nuevaCategoria'),
(16, 'nuevaCategoria'),
(17, 'nuevaCategoria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `user_category_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `avatar`, `user_category_id`) VALUES
(1, 'Jocelyn', 'McCurtain', 'email1@example.com', '$2b$10$6JMckpy6A/b5cNL7YuVNC.422ao7TWEwy1fEPgc2JtQkSBGiUfwQW', 'user-solid.svg', 2),
(2, 'Timmie', 'Twyford', 'email2@example.com', '$2b$10$6JMckpy6A/b5cNL7YuVNC.422ao7TWEwy1fEPgc2JtQkSBGiUfwQW', 'user-solid.svg', 2),
(3, 'Emmalynne', 'Videneev', 'email3@example.com', '$2b$10$6JMckpy6A/b5cNL7YuVNC.422ao7TWEwy1fEPgc2JtQkSBGiUfwQW', 'user-solid.svg', 2),
(4, 'Agretha', 'Bindon', 'email4@example.com', '$2b$10$6JMckpy6A/b5cNL7YuVNC.422ao7TWEwy1fEPgc2JtQkSBGiUfwQW', 'user-solid.svg', 1),
(5, 'Jo ann', 'Belin', 'email5@example.com', '$2b$10$6JMckpy6A/b5cNL7YuVNC.422ao7TWEwy1fEPgc2JtQkSBGiUfwQW', 'user-solid.svg', 2),
(6, 'Hedwiga', 'Rawlison', 'email6@example.com', '$2b$10$6JMckpy6A/b5cNL7YuVNC.422ao7TWEwy1fEPgc2JtQkSBGiUfwQW', 'user-solid.svg', 1),
(7, 'Lorilyn', 'Badrick', 'email7@example.com', '$2b$10$6JMckpy6A/b5cNL7YuVNC.422ao7TWEwy1fEPgc2JtQkSBGiUfwQW', 'user-solid.svg', 1),
(8, 'Sherlocke', 'Druitt', 'email8@example.com', '$2b$10$6JMckpy6A/b5cNL7YuVNC.422ao7TWEwy1fEPgc2JtQkSBGiUfwQW', 'user-solid.svg', 1),
(9, 'Gaby', 'Inett', 'email9@example.com', '$2b$10$6JMckpy6A/b5cNL7YuVNC.422ao7TWEwy1fEPgc2JtQkSBGiUfwQW', 'user-solid.svg', 2),
(10, 'Lidia', 'Forbear', 'email10@example.com', '$2b$10$6JMckpy6A/b5cNL7YuVNC.422ao7TWEwy1fEPgc2JtQkSBGiUfwQW', 'user-solid.svg', 2),
(11, 'Romonda', 'Keyworth', 'email11@example.com', '$2b$10$6JMckpy6A/b5cNL7YuVNC.422ao7TWEwy1fEPgc2JtQkSBGiUfwQW', 'user-solid.svg', 1),
(12, 'Paddy', 'Biernat', 'email12@example.com', '$2b$10$6JMckpy6A/b5cNL7YuVNC.422ao7TWEwy1fEPgc2JtQkSBGiUfwQW', 'user-solid.svg', 1),
(13, 'Vere', 'Ducarne', 'email13@example.com', '$2b$10$6JMckpy6A/b5cNL7YuVNC.422ao7TWEwy1fEPgc2JtQkSBGiUfwQW', 'user-solid.svg', 1),
(14, 'Daria', 'MacLure', 'email14@example.com', '$2b$10$6JMckpy6A/b5cNL7YuVNC.422ao7TWEwy1fEPgc2JtQkSBGiUfwQW', 'user-solid.svg', 2),
(15, 'Marcello', 'Ruoff', 'email15@example.com', '$2b$10$6JMckpy6A/b5cNL7YuVNC.422ao7TWEwy1fEPgc2JtQkSBGiUfwQW', 'user-solid.svg', 2),
(16, 'Gustaf', 'Card', 'email16@example.com', '$2b$10$6JMckpy6A/b5cNL7YuVNC.422ao7TWEwy1fEPgc2JtQkSBGiUfwQW', 'user-solid.svg', 2),
(17, 'Luz', 'Carp', 'email17@example.com', '$2b$10$6JMckpy6A/b5cNL7YuVNC.422ao7TWEwy1fEPgc2JtQkSBGiUfwQW', 'user-solid.svg', 2),
(18, 'Reube', 'Rubie', 'email18@example.com', '$2b$10$6JMckpy6A/b5cNL7YuVNC.422ao7TWEwy1fEPgc2JtQkSBGiUfwQW', 'user-solid.svg', 2),
(19, 'Nathaniel', 'Pimlett', 'email19@example.com', '$2b$10$6JMckpy6A/b5cNL7YuVNC.422ao7TWEwy1fEPgc2JtQkSBGiUfwQW', 'user-solid.svg', 2),
(20, 'Ara', 'Matyukon', 'email20@example.com', '$2b$10$6JMckpy6A/b5cNL7YuVNC.422ao7TWEwy1fEPgc2JtQkSBGiUfwQW', 'user-solid.svg', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_items`
--

CREATE TABLE `users_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `item_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users_items`
--

INSERT INTO `users_items` (`id`, `user_id`, `item_id`) VALUES
(1, 2, 1),
(2, 2, 5),
(3, 2, 3),
(4, 4, 2),
(5, 2, 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_categories`
--

CREATE TABLE `user_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'customer'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user_categories`
--

INSERT INTO `user_categories` (`id`, `type`) VALUES
(1, '0'),
(2, '1');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users_items`
--
ALTER TABLE `users_items`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user_categories`
--
ALTER TABLE `user_categories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `items`
--
ALTER TABLE `items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `product_categories`
--
ALTER TABLE `product_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `users_items`
--
ALTER TABLE `users_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `user_categories`
--
ALTER TABLE `user_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
