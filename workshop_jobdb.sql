-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2023 at 02:59 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `workshop_jobdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_education`
--

CREATE TABLE `tbl_education` (
  `edu_id` mediumint(9) NOT NULL COMMENT 'รหัสของข้อมูล',
  `resume_id` mediumint(9) NOT NULL COMMENT 'รหัสของ resume ที่เชื่อมโยงกัน',
  `level` varchar(100) NOT NULL COMMENT 'ระดับการศึกษา',
  `academy` varchar(250) NOT NULL COMMENT 'ชื่อสถานบันการศึกษา',
  `major` varchar(150) NOT NULL COMMENT 'สาขาวิชาที่ศึกษา'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='tbl_education .ใช้เก็บข้อมูลประวัติการศึกษา';

-- --------------------------------------------------------

--
-- Table structure for table `tbl_experience`
--

CREATE TABLE `tbl_experience` (
  `exp_id` mediumint(9) NOT NULL COMMENT 'รหัสของข้อมูลในแถวนั้น',
  `resume_id` mediumint(9) NOT NULL COMMENT 'รหัสของ resume ที่เชื่อมกับ tbl_resume',
  `position` varchar(150) NOT NULL COMMENT 'ตำแหน่งงานที่เคยทำ',
  `workplace` varchar(250) NOT NULL COMMENT 'ชื่อหน่วยงานที่เคยทำ',
  `period` varchar(30) NOT NULL COMMENT 'ระยะเวลาที่เคยทำ'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='tbl_experience ใช้เก็บข้อมูลประสบกาณ์ทำงาน ';

-- --------------------------------------------------------

--
-- Table structure for table `tbl_image`
--

CREATE TABLE `tbl_image` (
  `resume_id` mediumint(9) NOT NULL COMMENT 'รหัสของ resume',
  `img_content` varchar(250) NOT NULL COMMENT 'เก็บชื่อรูปภาพ'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='tbl_image เก็บชื่อรูปภาพ';

-- --------------------------------------------------------

--
-- Table structure for table `tbl_jobs`
--

CREATE TABLE `tbl_jobs` (
  `job_id` int(11) NOT NULL,
  `position` varchar(150) NOT NULL DEFAULT '' COMMENT 'ตำแหน่งงาน',
  `quantity` varchar(50) NOT NULL DEFAULT '0' COMMENT 'จำนวน(อัตรา) ที่รับ',
  `description` text NOT NULL COMMENT 'รายละเอียดของงาน',
  `date_post` date NOT NULL DEFAULT current_timestamp() COMMENT 'วันเดือนปีที่ประกาศ'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci COMMENT='tbl_jobs';

--
-- Dumping data for table `tbl_jobs`
--

INSERT INTO `tbl_jobs` (`job_id`, `position`, `quantity`, `description`, `date_post`) VALUES
(1, 'Backend Developer Node.js Express.js', '8', 'พัฒนาระบบ API โดยใช้ Node.js หรือ Express.js', '2023-04-14'),
(2, 'Backend Developer PHP Laravel', '1', 'พัฒนาระบบ API โดยใช้ PHP Laraveljs', '2023-04-14'),
(3, 'Backend Developer PHP ', '1', 'พัฒนาระบบ API โดยใช้ PHP', '2023-04-14'),
(4, 'FRONTEND DEVLOPER REACT ', '10', 'มีประสบการณ์การใช้งาน REACT', '2023-04-14'),
(9, 'FRONTEND DEVLOPER REACT test', '10', 'มีประสบการณ์การใช้งาน REACT', '2023-04-15');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_qualification`
--

CREATE TABLE `tbl_qualification` (
  `qual_id` mediumint(9) NOT NULL COMMENT 'รหัสของคุณสมบัติข้อนั้น',
  `job_id` smallint(6) NOT NULL COMMENT 'รหัสของตำแหน่งงาน',
  `qual_text` varchar(250) NOT NULL COMMENT 'คุณสมบัติข้อนั้น'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='tbl_qualification เก็บคุณสมบัติ';

--
-- Dumping data for table `tbl_qualification`
--

INSERT INTO `tbl_qualification` (`qual_id`, `job_id`, `qual_text`) VALUES
(1, 1, 'อายุตั้งแต่ 22 - 40 ปีขึ้นไป'),
(2, 1, 'จบปริญาตรีขึ้นไป'),
(3, 1, 'มีพื้นฐานการใช้งาน node.js express.js ในการพัฒนาระบบ'),
(4, 2, 'อายุตั้งแต่ 22-35 ปีขึ้น'),
(5, 2, 'ยินดีต้อนรับนักศึกษา จบ ใหม่ และคนเปลี่ยนสายงาน'),
(6, 3, 'อายุตั้งแต่ 22-35 ปีขึ้น'),
(7, 3, 'ยินดีต้อนรับนักศึกษา จบ ใหม่ และคนเปลี่ยนสายงาน'),
(8, 4, 'อายุตั้งแต่ 22-35 ปีขึ้น'),
(9, 4, 'ยินดีต้อนรับนักศึกษา จบ ใหม่ และคนเปลี่ยนสายงาน'),
(10, 9, 'อายุตั้งแต่ 22-35 ปีขึ้น'),
(11, 9, 'ยินดีต้อนรับนักศึกษา จบ ใหม่ และคนเปลี่ยนสายงาน');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_resume`
--

CREATE TABLE `tbl_resume` (
  `resume_id` mediumint(9) NOT NULL,
  `name` varchar(150) NOT NULL COMMENT 'ชื่อ',
  `age` varchar(20) NOT NULL COMMENT 'อายุ',
  `address` text NOT NULL COMMENT 'ที่อยู่',
  `phone` varchar(100) NOT NULL COMMENT 'เบอร์โทรศัพท์',
  `email` varchar(150) NOT NULL COMMENT 'อีเมล์',
  `expect_jobs` varchar(200) NOT NULL COMMENT 'งานที่คาดหวัง',
  `salary` varchar(100) NOT NULL COMMENT 'เงินเดือนที่คาดหวัง',
  `lang` varchar(150) NOT NULL COMMENT 'ทักษะด้านภาษา',
  `computing` varchar(250) NOT NULL COMMENT 'ทักษะด้านคอมพิวเตอร์',
  `other_skill` varchar(250) NOT NULL COMMENT 'ความสามารถด้านอื่นๆ',
  `driving` enum('yes','no') NOT NULL COMMENT 'ขับรถได้หรือไม่',
  `driving_license` enum('yes','no') NOT NULL COMMENT 'มีใบขับขีหรือไม่',
  `own_car` enum('yes','no') NOT NULL COMMENT 'มีรถส่วนตัวหรือไม่',
  `date_register` date NOT NULL DEFAULT current_timestamp() COMMENT 'วันที่ลงทะเบียน'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='tbl_resume เก็บข้อมูลของผู้หางานที่เข้ามาเขียนฝากเอาไว้';

--
-- Dumping data for table `tbl_resume`
--

INSERT INTO `tbl_resume` (`resume_id`, `name`, `age`, `address`, `phone`, `email`, `expect_jobs`, `salary`, `lang`, `computing`, `other_skill`, `driving`, `driving_license`, `own_car`, `date_register`) VALUES
(1, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'yes', 'yes', 'yes', '2023-04-15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_education`
--
ALTER TABLE `tbl_education`
  ADD PRIMARY KEY (`edu_id`);

--
-- Indexes for table `tbl_experience`
--
ALTER TABLE `tbl_experience`
  ADD PRIMARY KEY (`exp_id`);

--
-- Indexes for table `tbl_jobs`
--
ALTER TABLE `tbl_jobs`
  ADD PRIMARY KEY (`job_id`),
  ADD KEY `position` (`position`);

--
-- Indexes for table `tbl_qualification`
--
ALTER TABLE `tbl_qualification`
  ADD PRIMARY KEY (`qual_id`),
  ADD KEY `job_id` (`job_id`);

--
-- Indexes for table `tbl_resume`
--
ALTER TABLE `tbl_resume`
  ADD PRIMARY KEY (`resume_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_education`
--
ALTER TABLE `tbl_education`
  MODIFY `edu_id` mediumint(9) NOT NULL AUTO_INCREMENT COMMENT 'รหัสของข้อมูล';

--
-- AUTO_INCREMENT for table `tbl_experience`
--
ALTER TABLE `tbl_experience`
  MODIFY `exp_id` mediumint(9) NOT NULL AUTO_INCREMENT COMMENT 'รหัสของข้อมูลในแถวนั้น';

--
-- AUTO_INCREMENT for table `tbl_jobs`
--
ALTER TABLE `tbl_jobs`
  MODIFY `job_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tbl_qualification`
--
ALTER TABLE `tbl_qualification`
  MODIFY `qual_id` mediumint(9) NOT NULL AUTO_INCREMENT COMMENT 'รหัสของคุณสมบัติข้อนั้น', AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_resume`
--
ALTER TABLE `tbl_resume`
  MODIFY `resume_id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
