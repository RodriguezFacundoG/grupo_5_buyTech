-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 22-05-2022 a las 21:18:51
-- Versión del servidor: 5.7.34
-- Versión de PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `structure`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `qty` int(10) UNSIGNED NOT NULL,
  `total_price` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `stock` int(10) UNSIGNED NOT NULL,
  `weight` tinyint(3) UNSIGNED NOT NULL,
  `color` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `price` int(10) UNSIGNED NOT NULL,
  `discount` tinyint(3) UNSIGNED NOT NULL,
  `picture` varchar(255) NOT NULL,
  `product_category_id` bigint(20) UNSIGNED NOT NULL,
  `cart_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_categories`
--

CREATE TABLE `product_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `avatar` varchar(255) NOT NULL,
  `user_category_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `avatar`, `user_category_id`) VALUES
(2, 'Brandi', 'Hollow', 'bhollow1@weibo.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#233', 0),
(3, 'Darcey', 'Greed', 'dgreed2@bizjournals.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#aa0', 0),
(4, 'Lorrie', 'Garnar', 'lgarnar3@example.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#bc7', 0),
(5, 'Vivia', 'Trime', 'vtrime4@guardian.co.uk', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#0b9', 0),
(6, 'Katalin', 'Jertz', 'kjertz5@princeton.edu', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#601', 0),
(7, 'Kennedy', 'Arias', 'karias6@harvard.edu', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#724', 0),
(8, 'Sibby', 'Paudin', 'spaudin7@typepad.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#edb', 0),
(9, 'Marven', 'Feifer', 'mfeifer8@disqus.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#43b', 0),
(10, 'Mariellen', 'Bastistini', 'mbastistini9@columbia.edu', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#a0e', 0),
(11, 'Gerrie', 'Niche', 'gnichea@bbb.org', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#be3', 0),
(12, 'Corey', 'Minger', 'cmingerb@imgur.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#d24', 0),
(13, 'Paddie', 'Loudiane', 'ploudianec@godaddy.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#68c', 0),
(14, 'Penelopa', 'Argo', 'pargod@1und1.de', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#978', 0),
(15, 'Suzann', 'Purches', 'spurchese@soundcloud.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#341', 0),
(16, 'Sara-ann', 'Raeburn', 'sraeburnf@flickr.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#a3a', 0),
(17, 'Axe', 'Prendeville', 'aprendevilleg@admin.ch', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#4d9', 0),
(18, 'Archibald', 'Prisk', 'apriskh@deviantart.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#a5b', 0),
(19, 'Christel', 'Anwyl', 'canwyli@opensource.org', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#8bf', 0),
(20, 'Micki', 'Gertz', 'mgertzj@moonfruit.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#486', 0),
(21, 'Latisha', 'MacGarvey', 'lmacgarveyk@hao123.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#975', 0),
(22, 'Silvan', 'Radsdale', 'sradsdalel@ucoz.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#c7e', 0),
(23, 'Nickey', 'Andreotti', 'nandreottim@comsenz.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#ca3', 0),
(24, 'Blinny', 'Migheli', 'bmighelin@virginia.edu', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#7ab', 0),
(25, 'Beverley', 'Westwell', 'bwestwello@dropbox.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#397', 0),
(26, 'Aldis', 'Drogan', 'adroganp@opensource.org', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#058', 0),
(27, 'Holly', 'Redgrave', 'hredgraveq@printfriendly.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#087', 0),
(28, 'Monah', 'Surgenor', 'msurgenorr@bandcamp.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#f26', 0),
(29, 'Nancey', 'Fawckner', 'nfawckners@howstuffworks.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#d54', 0),
(30, 'Hyacinthia', 'Monketon', 'hmonketont@mail.ru', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#39b', 0),
(31, 'Frederica', 'Veracruysse', 'fveracruysseu@homestead.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#42e', 0),
(32, 'Courtnay', 'Guthrie', 'cguthriev@networkadvertising.org', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#a88', 0),
(33, 'Marybelle', 'Blazeby', 'mblazebyw@cmu.edu', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#466', 0),
(34, 'Cindra', 'Stodd', 'cstoddx@bigcartel.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#e5a', 0),
(35, 'Zaria', 'Eastwood', 'zeastwoody@lycos.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#f05', 0),
(36, 'Birk', 'Kleinstern', 'bkleinsternz@google.co.uk', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#770', 0),
(37, 'Ailee', 'Shoppee', 'ashoppee10@usgs.gov', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#fb5', 0),
(38, 'Edan', 'Bischof', 'ebischof11@tiny.cc', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#0c9', 0),
(39, 'Roger', 'Hankinson', 'rhankinson12@aol.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#aac', 0),
(40, 'Leese', 'Appleford', 'lappleford13@arizona.edu', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#b9a', 0),
(41, 'Esmaria', 'Toomey', 'etoomey14@howstuffworks.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#0ff', 0),
(42, 'Davidson', 'Peel', 'dpeel15@reddit.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#570', 0),
(43, 'Clarinda', 'Geharke', 'cgeharke16@sogou.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#d8b', 0),
(44, 'Ursola', 'Fontenot', 'ufontenot17@vimeo.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#fee', 0),
(45, 'Abrahan', 'Gudger', 'agudger18@vinaora.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#bb6', 0),
(46, 'Niel', 'Breslauer', 'nbreslauer19@alibaba.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#874', 0),
(47, 'Frasco', 'Gheorghescu', 'fgheorghescu1a@ucoz.ru', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#fae', 0),
(48, 'Horst', 'Paulino', 'hpaulino1b@europa.eu', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#b12', 0),
(49, 'Valerie', 'Phette', 'vphette1c@opera.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#1d9', 0),
(50, 'Merrilee', 'Klaves', 'mklaves1d@dion.ne.jp', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#edd', 0),
(51, 'Toma', 'Thorrington', 'tthorrington0@bravesites.com', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', '#0a7', 0),
(101, 'qwer', 'qwer', 'qwer@qwer.qwer', '$2b$10$GLZqH1GiZmxvTMy2dKelPe5YTOnpR8je2oX8iuyjLQRRyPDyq.PjC', 'user-solid.svg', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_categories`
--

CREATE TABLE `user_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `admin` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cart_id` (`cart_id`);

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
-- Indices de la tabla `user_categories`
--
ALTER TABLE `user_categories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
