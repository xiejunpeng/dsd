/*
Navicat MySQL Data Transfer

Source Server         : xiejunpeng
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : wanbiaowang

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-03-27 19:14:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cars
-- ----------------------------
DROP TABLE IF EXISTS `cars`;
CREATE TABLE `cars` (
  `gid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `dianming` varchar(255) DEFAULT NULL,
  `urlimg1` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `yangshi` varchar(255) DEFAULT NULL,
  `danjia` varchar(255) DEFAULT NULL,
  `shuliang` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM AUTO_INCREMENT=441 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cars
-- ----------------------------
INSERT INTO `cars` VALUES ('439', '天梭TISSOT', '../img/1.jpg', '【天梭原装正品，全球联保两年】天梭TISSOT-力洛克系列T006.407.11.033.00 自动机械男表', '天梭TISSOT', '3680', '6');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `﻿id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `imgBurl` varchar(255) DEFAULT NULL,
  `imgMurl` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `sPrice` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `sales` varchar(255) DEFAULT NULL,
  `shop` varchar(255) DEFAULT NULL,
  `xinghao` varchar(255) DEFAULT NULL,
  `pianhao` varchar(255) DEFAULT NULL,
  `pinpai` varchar(255) DEFAULT NULL,
  `gaoliang` varchar(255) DEFAULT NULL,
  `gid` varchar(255) DEFAULT NULL,
  `jinjuan` varchar(255) DEFAULT NULL,
  `shuliang` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`﻿id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '../img/1.jpg,../img/2.jpg,../img/3.jpg,../img/4.jpg,../img/5.jpg,../img/6.jpg', '../img/fdjMin01.jpg,../img/fdjMin02.jpg,../img/fdjMin03.jpg,../img/fdjMin04.jpg,../img/fdjMin05.jpg,../img/fdjMin06.jpg', '3680,00', '4680,00', '【天梭原装正品，全球联保两年】天梭TISSOT-力洛克系列T006.407.11.033.00 自动机械男表', '6075', '天梭TISSOT', 'T006.407.11.033.00', '62520', '天梭', '机芯稳定性、精度、动力储存全面提升 力洛克T41.1.483.33全新升级版', '1', '100              天梭专属现金券\r\n100天梭专属现金卷', '1');
INSERT INTO `goods` VALUES ('2', '../img/7.jpg,../img/8.jpg,../img/9.jpg,../img/10.jpg,../img/11.jpg,../img/12.jpg', '../img/fdjMin07.jpg,../img/fdjMin08.jpg,../img/fdjMin09.jpg,../img/fdjMin10.jpg,../img/fdjMin11.jpg,../img/fdjMin12.jpg', '5770,00', '9300,00', ' 瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-水蓝版 3390.152.20.16.25 机械男表', '6076', '瑞士库尔沃官方旗舰店', '3390.152.20.16.25', '42471', null, '瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-水蓝版 3390.152.20.16.25 机械男表', '2', '100天梭专属现金卷', '1');
INSERT INTO `goods` VALUES ('3', '../img/13.jpg,../img/14.jpg,../img/15.jpg,../img/16.jpg,../img/17.jpg,../img/18.jpg', '../img/fdjMin15.jpg,../img/fdjMin14.jpg,../img/fdjMin15.jpg,../img/fdjMin16.jpg,../img/fdjMin17.jpg,../img/fdjMin18.jpg', '3682.00', '1602.00', ' 瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-水蓝版 3390.152.20.16.25 机械男表', '6077', 'CK Calvin Klein', '3390.152.20.10.30', '42470', null, '简而精 稳重成熟', '3', '              天梭专属现金券\r\n100              天梭专属现金券\r\n', '1');
INSERT INTO `goods` VALUES ('4', '', '', null, null, ' ', null, null, null, null, null, null, '', null, null);
INSERT INTO `goods` VALUES ('5', '', '', null, null, ' ', null, null, null, null, null, null, '', null, null);
INSERT INTO `goods` VALUES ('6', '', '', null, null, ' ', null, null, null, null, null, null, '', null, null);
INSERT INTO `goods` VALUES ('7', '', '', '', '', '\r\n                                ', '', '', '', '', '爱宝时', '', '', '', null);
INSERT INTO `goods` VALUES ('8', '', '', null, null, ' ', null, null, null, null, null, null, '', null, null);
INSERT INTO `goods` VALUES ('9', '', '', null, null, ' ', null, null, null, null, null, null, '', null, null);
INSERT INTO `goods` VALUES ('10', '', '', null, null, ' ', null, null, null, null, null, null, '', null, null);
INSERT INTO `goods` VALUES ('11', '', '', null, null, ' ', null, null, null, null, null, null, '', null, null);
INSERT INTO `goods` VALUES ('12', '', '', null, null, ' ', null, null, null, null, null, null, '', null, null);
INSERT INTO `goods` VALUES ('13', null, null, null, null, null, null, null, null, null, null, null, '', null, null);

-- ----------------------------
-- Table structure for goods_copy
-- ----------------------------
DROP TABLE IF EXISTS `goods_copy`;
CREATE TABLE `goods_copy` (
  `﻿id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `imgBurl` varchar(255) DEFAULT NULL,
  `imgMurl` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `sPrice` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `sales` varchar(255) DEFAULT NULL,
  `shop` varchar(255) DEFAULT NULL,
  `xinghao` varchar(255) DEFAULT NULL,
  `pianhao` varchar(255) DEFAULT NULL,
  `pinpai` varchar(255) DEFAULT NULL,
  `gaoliang` varchar(255) DEFAULT NULL,
  `gid` varchar(255) DEFAULT NULL,
  `jinjuan` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`﻿id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods_copy
-- ----------------------------
INSERT INTO `goods_copy` VALUES ('1', '../img/1.jpg,../img/2.jpg,../img/3.jpg,../img/4.jpg,../img/5.jpg,../img/6.jpg', '../img/fdjMin01.jpg,../img/fdjMin02.jpg,../img/fdjMin03.jpg,../img/fdjMin04.jpg,../img/fdjMin04.jpg,../img/fdjMin05.jpg,../img/fdjMin06.jpg', '999', '888', '【天梭原装正品，全球联保两年】天梭TISSOT-力洛克系列T006.407.11.033.00 自动机械男表', '100', '天梭TISSOT', 'T006.407.11.033.00', '62520', '天梭', '机芯稳定性、精度、动力储存全面提升 力洛克T41.1.483.33全新升级版', 'g1', '100              天梭专属现金券\r\n100天梭专属现金卷');
INSERT INTO `goods_copy` VALUES ('2', '../img/7.jpg,../img/8.jpg,../img/9.jpg,../img/10.jpg,../img/11.jpg,../img/12.jpg', '../img/fdjMin03.jpg,../img/fdjMin04.jpg,../img/fdjMin05.jpg,../img/fdjMin01.jpg,../img/fdjMin03.jpg,../img/fdjMin03.jpg', null, null, ' ', null, null, null, null, null, null, '', null);
INSERT INTO `goods_copy` VALUES ('3', '', '', null, null, ' ', null, null, null, null, null, null, '', null);
INSERT INTO `goods_copy` VALUES ('4', '', '', null, null, ' ', null, null, null, null, null, null, '', null);
INSERT INTO `goods_copy` VALUES ('5', '', '', null, null, ' ', null, null, null, null, null, null, '', null);
INSERT INTO `goods_copy` VALUES ('6', '', '', null, null, ' ', null, null, null, null, null, null, '', null);
INSERT INTO `goods_copy` VALUES ('7', '', '', '1000', '1000', ' 家居服内衣套装', '19', 'TIS', 'sdfad', null, 'fasdf', 'asdfasdf', 'g2', null);
INSERT INTO `goods_copy` VALUES ('8', '', '', null, null, ' ', null, null, null, null, null, null, '', null);
INSERT INTO `goods_copy` VALUES ('9', '', '', null, null, ' ', null, null, null, null, null, null, '', null);
INSERT INTO `goods_copy` VALUES ('10', '', '', null, null, ' ', null, null, null, null, null, null, '', null);
INSERT INTO `goods_copy` VALUES ('11', '', '', null, null, ' ', null, null, null, null, null, null, '', null);
INSERT INTO `goods_copy` VALUES ('12', '', '', null, null, ' ', null, null, null, null, null, null, '', null);
INSERT INTO `goods_copy` VALUES ('13', null, null, null, null, null, null, null, null, null, null, null, '', null);

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) NOT NULL,
  `price` decimal(10,2) unsigned NOT NULL,
  `sPrice` decimal(10,2) unsigned NOT NULL,
  `content` varchar(255) NOT NULL,
  `sales` varchar(255) NOT NULL,
  `shop` varchar(255) NOT NULL,
  `gid` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '../img/s_goods_list01.jpg', '3680.00', '4600.00', '【天梭原装正品，全球联保两年】天梭TISSOT-力洛克系列T006.407.11.033.00 自动机械男表', '6075', '天梭TISSOT', '1');
INSERT INTO `list` VALUES ('2', '../img/s_goods_list02.jpg', '5770.00', '9300.00', '瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-水蓝版 3390.152.20.16.25 机械男表', '6076', '瑞士库尔沃官方旗舰店', '2');
INSERT INTO `list` VALUES ('3', '../img/s_goods_list03.jpg', '3682.00', '1602.00', '瑞士艺术制表大师爱宝时（EPOS）-Emotion情感系列 罗马假期-水蓝版 3390.152.20.16.25 机械男表', '6077', 'CK Calvin Klein', '3');
INSERT INTO `list` VALUES ('4', '../img/s_goods_list04.jpg', '3683.00', '5603.00', '天梭TISSOT-杜鲁尔系列 T099.407.36.038.00 机械男表', '6078', '阿玛尼ARMANI', '4');
INSERT INTO `list` VALUES ('5', '../img/s_goods_list05.jpg', '3684.00', '1604.00', '法国复古时尚腕表品牌：雍加毕索Yonger& Bresson-Beaumesnil 博梅尼勒堡系列 YBH 8372-03 B 机械男表', '6079', '瑞士柏高官方旗舰店', '');
INSERT INTO `list` VALUES ('6', '../img/s_goods_list06.jpg', '3685.00', '2605.00', '瑞士进口 迪沃斯(DAVOSA) -Gentleman 绅士系列 Classic经典之作 16145632 机械男表(以实物为准）', '6080', '阿玛尼ARMANI', '');
INSERT INTO `list` VALUES ('7', '../img/s_goods_list07.jpg', '3686.00', '1606.00', '阿玛尼Armani-时尚男表系列 AR2477 石英男表', '6081', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list` VALUES ('8', '../img/s_goods_list08.jpg', '3687.00', '4607.00', '瑞士柏高Paul Picot -FIRSHIRE 梦想家系列 造王者 P3710.SG.1021.1106 正装休闲 机械男表', '6082', '梅花旗舰店', '');
INSERT INTO `list` VALUES ('9', '../img/s_goods_list09.jpg', '3688.00', '1608.00', '阿玛尼Armani-RENATO系列 AR2448 石英男表', '23', '法国雍加毕索官方旗舰店', '');
INSERT INTO `list` VALUES ('10', '../img/s_goods_list10.jpg', '3689.00', '1609.00', 'CK-女士Ladies系列 K3G23626 石英女表', '24', '美度MIDO', '');
INSERT INTO `list` VALUES ('11', '../img/s_goods_list11.jpg', '13300.00', '1610.00', '豪利时Oris-潜水系列 733-7730-4135M 机械男表', '25', '瑞士豪利时官方旗舰店', '');
INSERT INTO `list` VALUES ('12', '../img/s_goods_list12.jpg', '1.00', '1478.00', '豪利时Oris-潜水系列 733-7730-4135M 机械男表', '26', '瑞士柏高官方旗舰店', '');
INSERT INTO `list` VALUES ('13', '../img/s_goods_list13.jpg', '2.00', '1250.00', '精工SEIKO-Seiko 5系列 SRP605J3 自动机械男表', '27', '阿玛尼ARMANI', '');
INSERT INTO `list` VALUES ('14', '../img/s_goods_list14.jpg', '3.00', '1023.00', '天梭TISSOT-杜鲁尔系列 T099.407.36.038.01 机械男表', '28', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list` VALUES ('15', '../img/s_goods_list15.jpg', '4.00', '795.00', '法国复古时尚腕表品牌：雍加毕索Yonger& Bresson-Beaumesnil 博梅尼勒堡系列 YBH 8372-04 B 机械男表', '29', '梅花旗舰店', '');
INSERT INTO `list` VALUES ('16', '../img/s_goods_list16.jpg', '5.00', '567.00', '瑞士进口 迪沃斯(DAVOSA) -Gentleman 绅士系列 Classic经典之作 16145633 机械男表(以实物为准）', '30', '法国雍加毕索官方旗舰店', '');
INSERT INTO `list` VALUES ('17', '../img/s_goods_list17.jpg', '6.00', '340.00', '阿玛尼Armani-时尚男表系列 AR2478 石英男表', '31', '美度MIDO', '');
INSERT INTO `list` VALUES ('18', '../img/s_goods_list18.jpg', '7.00', '112.00', '瑞士柏高Paul Picot -FIRSHIRE 梦想家系列 造王者 P3710.SG.1021.1107 正装休闲 机械男表', '32', '瑞士豪利时官方旗舰店', '');
INSERT INTO `list` VALUES ('19', '../img/s_goods_list19.jpg', '8.00', '213.00', '阿玛尼Armani-RENATO系列 AR2449 石英男表', '33', '瑞士柏高官方旗舰店', '');
INSERT INTO `list` VALUES ('20', '../img/s_goods_list20.jpg', '9.00', '1.00', 'CK-女士Ladies系列 K3G23627 石英女表', '34', '阿玛尼ARMANI', 's');
INSERT INTO `list` VALUES ('21', '../img/s_goods_list21.jpg', '10.00', '2.00', '豪利时Oris-潜水系列 733-7730-4135M 机械男表', '35', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list` VALUES ('22', '../img/s_goods_list22.jpg', '11.00', '3.00', '豪利时Oris-潜水系列 733-7730-4135M 机械男表', '36', '梅花旗舰店', '');
INSERT INTO `list` VALUES ('23', '../img/s_goods_list23.jpg', '12.00', '4.00', '精工SEIKO-Seiko 5系列 SRP605J4 自动机械男表', '37', '法国雍加毕索官方旗舰店', '');
INSERT INTO `list` VALUES ('24', '../img/s_goods_list24.jpg', '13.00', '5.00', '天梭TISSOT-杜鲁尔系列 T099.407.36.038.02 机械男表', '38', '美度MIDO', '');
INSERT INTO `list` VALUES ('25', '../img/s_goods_list25.jpg', '14.00', '6.00', '法国复古时尚腕表品牌：雍加毕索Yonger& Bresson-Beaumesnil 博梅尼勒堡系列 YBH 8372-05 B 机械男表', '39', '瑞士豪利时官方旗舰店', '');
INSERT INTO `list` VALUES ('26', '../img/s_goods_list26.jpg', '15.00', '7.00', '瑞士进口 迪沃斯(DAVOSA) -Gentleman 绅士系列 Classic经典之作 16145634 机械男表(以实物为准）', '40', '瑞士柏高官方旗舰店', '');
INSERT INTO `list` VALUES ('27', '../img/s_goods_list27.jpg', '16.00', '8.00', '阿玛尼Armani-时尚男表系列 AR2479 石英男表', '41', '阿玛尼ARMANI', '');
INSERT INTO `list` VALUES ('28', '../img/s_goods_list28.jpg', '17.00', '9.00', '瑞士柏高Paul Picot -FIRSHIRE 梦想家系列 造王者 P3710.SG.1021.1108 正装休闲 机械男表', '42', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list` VALUES ('29', '../img/s_goods_list29.jpg', '18.00', '10.00', '阿玛尼Armani-RENATO系列 AR2450 石英男表', '43', '梅花旗舰店', '');
INSERT INTO `list` VALUES ('30', '../img/s_goods_list01.jpg', '19.00', '11.00', 'CK-女士Ladies系列 K3G23628 石英女表', '44', '法国雍加毕索官方旗舰店', '');
INSERT INTO `list` VALUES ('31', '../img/s_goods_list02.jpg', '20.00', '12.00', '豪利时Oris-潜水系列 733-7730-4135M 机械男表', '88', '美度MIDO', '');
INSERT INTO `list` VALUES ('32', '../img/s_goods_list03.jpg', '21.00', '13.00', '豪利时Oris-潜水系列 733-7730-4135M 机械男表', '89', '瑞士豪利时官方旗舰店', '');
INSERT INTO `list` VALUES ('33', '../img/s_goods_list04.jpg', '22.00', '14.00', '精工SEIKO-Seiko 5系列 SRP605J3 自动机械男表', '90', '瑞士柏高官方旗舰店', '');
INSERT INTO `list` VALUES ('34', '../img/s_goods_list05.jpg', '23.00', '15.00', '天梭TISSOT-杜鲁尔系列 T099.407.36.038.01 机械男表', '91', '阿玛尼ARMANI', '');
INSERT INTO `list` VALUES ('35', '../img/s_goods_list06.jpg', '24.00', '16.00', '法国复古时尚腕表品牌：雍加毕索Yonger& Bresson-Beaumesnil 博梅尼勒堡系列 YBH 8372-04 B 机械男表', '92', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list` VALUES ('36', '../img/s_goods_list07.jpg', '25.00', '17.00', '瑞士进口 迪沃斯(DAVOSA) -Gentleman 绅士系列 Classic经典之作 16145633 机械男表(以实物为准）', '93', '梅花旗舰店', '');
INSERT INTO `list` VALUES ('37', '../img/s_goods_list08.jpg', '26.00', '18.00', '阿玛尼Armani-时尚男表系列 AR2478 石英男表', '94', '法国雍加毕索官方旗舰店', '');
INSERT INTO `list` VALUES ('38', '../img/s_goods_list09.jpg', '27.00', '19.00', '瑞士柏高Paul Picot -FIRSHIRE 梦想家系列 造王者 P3710.SG.1021.1107 正装休闲 机械男表', '95', '美度MIDO', '');
INSERT INTO `list` VALUES ('39', '../img/s_goods_list10.jpg', '28.00', '20.00', '阿玛尼Armani-RENATO系列 AR2449 石英男表', '96', '瑞士豪利时官方旗舰店', '');
INSERT INTO `list` VALUES ('40', '../img/s_goods_list11.jpg', '29.00', '21.00', 'CK-女士Ladies系列 K3G23627 石英女表', '97', '瑞士柏高官方旗舰店', '');
INSERT INTO `list` VALUES ('41', '../img/s_goods_list12.jpg', '30.00', '22.00', '豪利时Oris-潜水系列 733-7730-4135M 机械男表', '98', '阿玛尼ARMANI', '');
INSERT INTO `list` VALUES ('42', '../img/s_goods_list13.jpg', '31.00', '23.00', '豪利时Oris-潜水系列 733-7730-4135M 机械男表', '1009', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list` VALUES ('43', '../img/s_goods_list14.jpg', '32.00', '24.00', '精工SEIKO-Seiko 5系列 SRP605J4 自动机械男表', '1010', '梅花旗舰店', '');
INSERT INTO `list` VALUES ('44', '../img/s_goods_list15.jpg', '33.00', '25.00', '天梭TISSOT-杜鲁尔系列 T099.407.36.038.02 机械男表', '1011', '法国雍加毕索官方旗舰店', '');
INSERT INTO `list` VALUES ('45', '../img/s_goods_list16.jpg', '34.00', '26.00', '法国复古时尚腕表品牌：雍加毕索Yonger& Bresson-Beaumesnil 博梅尼勒堡系列 YBH 8372-05 B 机械男表', '1012', '美度MIDO', '');
INSERT INTO `list` VALUES ('46', '../img/s_goods_list17.jpg', '35.00', '27.00', '瑞士进口 迪沃斯(DAVOSA) -Gentleman 绅士系列 Classic经典之作 16145634 机械男表(以实物为准）', '1013', '瑞士豪利时官方旗舰店', '');
INSERT INTO `list` VALUES ('47', '../img/s_goods_list18.jpg', '36.00', '28.00', '阿玛尼Armani-时尚男表系列 AR2479 石英男表', '1014', '瑞士柏高官方旗舰店', '');
INSERT INTO `list` VALUES ('48', '../img/s_goods_list19.jpg', '37.00', '29.00', '瑞士柏高Paul Picot -FIRSHIRE 梦想家系列 造王者 P3710.SG.1021.1108 正装休闲 机械男表', '77', '阿玛尼ARMANI', '');
INSERT INTO `list` VALUES ('49', '../img/s_goods_list20.jpg', '38.00', '30.00', '阿玛尼Armani-RENATO系列 AR2450 石英男表', '78', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list` VALUES ('50', '../img/s_goods_list21.jpg', '39.00', '31.00', 'CK-女士Ladies系列 K3G23628 石英女表', '79', '梅花旗舰店', '');
INSERT INTO `list` VALUES ('51', '../img/s_goods_list22.jpg', '9.10', '11.01', '豪利时Oris-潜水系列 733-7730-4136M 机械男表', '80', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list` VALUES ('52', '../img/s_goods_list23.jpg', '10.10', '12.01', '精工SEIKO-Seiko 5系列 SRP605J5 自动机械男表', '81', '梅花旗舰店', '');
INSERT INTO `list` VALUES ('53', '../img/s_goods_list24.jpg', '11.10', '13.01', '天梭TISSOT-杜鲁尔系列 T099.407.36.038.03 机械男表', '82', '法国雍加毕索官方旗舰店', '');
INSERT INTO `list` VALUES ('54', '../img/s_goods_list01.jpg', '12.10', '14.01', '法国复古时尚腕表品牌：雍加毕索Yonger& Bresson-Beaumesnil 博梅尼勒堡系列 YBH 8372-06 B 机械男表', '83', '美度MIDO', '');
INSERT INTO `list` VALUES ('55', '../img/s_goods_list02.jpg', '13.10', '15.01', '瑞士进口 迪沃斯(DAVOSA) -Gentleman 绅士系列 Classic经典之作 16145635 机械男表(以实物为准）', '84', '瑞士豪利时官方旗舰店', '');
INSERT INTO `list` VALUES ('56', '../img/s_goods_list03.jpg', '14.10', '99.66', '阿玛尼Armani-时尚男表系列 AR2480 石英男表', '85', '瑞士柏高官方旗舰店', '');
INSERT INTO `list` VALUES ('57', '../img/s_goods_list04.jpg', '15.10', '100.66', '瑞士柏高Paul Picot -FIRSHIRE 梦想家系列 造王者 P3710.SG.1021.1109 正装休闲 机械男表', '86', '阿玛尼ARMANI', '');
INSERT INTO `list` VALUES ('58', '../img/s_goods_list05.jpg', '16.10', '101.66', '阿玛尼Armani-RENATO系列 AR2451 石英男表', '87', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list` VALUES ('59', '../img/s_goods_list06.jpg', '17.10', '102.66', 'CK-女士Ladies系列 K3G23629 石英女表', '88', '梅花旗舰店', '');
INSERT INTO `list` VALUES ('60', '../img/s_goods_list07.jpg', '18.10', '103.66', '豪利时Oris-潜水系列 733-7730-4137M 机械男表', '89', '法国雍加毕索官方旗舰店', '');
INSERT INTO `list` VALUES ('61', '../img/s_goods_list08.jpg', '1314.00', '100.65', '瑞士进口 迪沃斯(DAVOSA) -Gentleman 绅士系列 Classic经典之作 16145635 机械男表(以实物为准）', '33', '瑞士豪利时官方旗舰店', '');
INSERT INTO `list` VALUES ('62', '../img/s_goods_list09.jpg', '1315.00', '107.24', '阿玛尼Armani-时尚男表系列 AR2480 石英男表', '34', '瑞士柏高官方旗舰店', '');
INSERT INTO `list` VALUES ('63', '../img/s_goods_list10.jpg', '1316.00', '113.84', '瑞士柏高Paul Picot -FIRSHIRE 梦想家系列 造王者 P3710.SG.1021.1109 正装休闲 机械男表', '35', '阿玛尼ARMANI', '');
INSERT INTO `list` VALUES ('64', '../img/s_goods_list11.jpg', '1317.00', '120.43', '阿玛尼Armani-RENATO系列 AR2451 石英男表', '36', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list` VALUES ('65', '../img/s_goods_list12.jpg', '1318.00', '127.03', 'CK-女士Ladies系列 K3G23629 石英女表', '37', '梅花旗舰店', '');
INSERT INTO `list` VALUES ('66', '../img/s_goods_list13.jpg', '1319.00', '133.62', '豪利时Oris-潜水系列 733-7730-4137M 机械男表', '38', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list` VALUES ('67', '../img/s_goods_list14.jpg', '1320.00', '140.21', '精工SEIKO-Seiko 5系列 SRP605J6 自动机械男表', '39', '梅花旗舰店', '');
INSERT INTO `list` VALUES ('68', '../img/s_goods_list15.jpg', '1321.00', '146.81', '天梭TISSOT-杜鲁尔系列 T099.407.36.038.04 机械男表', '40', '法国雍加毕索官方旗舰店', '');
INSERT INTO `list` VALUES ('69', '../img/s_goods_list16.jpg', '1322.00', '153.40', '法国复古时尚腕表品牌：雍加毕索Yonger& Bresson-Beaumesnil 博梅尼勒堡系列 YBH 8372-07 B 机械男表', '41', '美度MIDO', '');
INSERT INTO `list` VALUES ('70', '../img/s_goods_list17.jpg', '1323.00', '160.00', '瑞士进口 迪沃斯(DAVOSA) -Gentleman 绅士系列 Classic经典之作 16145636 机械男表(以实物为准）', '42', '瑞士豪利时官方旗舰店', '');
INSERT INTO `list` VALUES ('71', '../img/s_goods_list18.jpg', '1324.00', '166.59', '阿玛尼Armani-时尚男表系列 AR2481 石英男表', '43', '瑞士柏高官方旗舰店', '');
INSERT INTO `list` VALUES ('72', '../img/s_goods_list19.jpg', '1325.00', '173.19', '瑞士柏高Paul Picot -FIRSHIRE 梦想家系列 造王者 P3710.SG.1021.1110 正装休闲 机械男表', '44', '阿玛尼ARMANI', '');
INSERT INTO `list` VALUES ('73', '../img/s_goods_list20.jpg', '1326.00', '179.78', '阿玛尼Armani-RENATO系列 AR2452 石英男表', '45', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list` VALUES ('74', '../img/s_goods_list21.jpg', '1327.00', '186.38', 'CK-女士Ladies系列 K3G23630 石英女表', '46', '梅花旗舰店', '');
INSERT INTO `list` VALUES ('75', '../img/s_goods_list22.jpg', '1328.00', '192.97', '豪利时Oris-潜水系列 733-7730-4138M 机械男表', '47', '法国雍加毕索官方旗舰店', '');
INSERT INTO `list` VALUES ('76', '../img/s_goods_list23.jpg', '1329.00', '199.57', '瑞士进口 迪沃斯(DAVOSA) -Gentleman 绅士系列 Classic经典之作 16145636 机械男表(以实物为准）', '48', '瑞士豪利时官方旗舰店', '');
INSERT INTO `list` VALUES ('77', '../img/s_goods_list24.jpg', '1330.00', '206.16', '阿玛尼Armani-时尚男表系列 AR2481 石英男表', '49', '瑞士柏高官方旗舰店', '');
INSERT INTO `list` VALUES ('78', '../img/s_goods_list25.jpg', '1331.00', '212.76', '瑞士柏高Paul Picot -FIRSHIRE 梦想家系列 造王者 P3710.SG.1021.1110 正装休闲 机械男表', '50', '阿玛尼ARMANI', '');
INSERT INTO `list` VALUES ('79', '../img/s_goods_list26.jpg', '1332.00', '219.35', '阿玛尼Armani-RENATO系列 AR2452 石英男表', '51', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list` VALUES ('80', '../img/s_goods_list27.jpg', '1333.00', '225.95', 'CK-女士Ladies系列 K3G23630 石英女表', '52', '梅花旗舰店', '');
INSERT INTO `list` VALUES ('81', '../img/s_goods_list28.jpg', '1334.00', '232.54', '豪利时Oris-潜水系列 733-7730-4138M 机械男表', '53', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list` VALUES ('82', '../img/s_goods_list29.jpg', '1335.00', '239.13', '精工SEIKO-Seiko 5系列 SRP605J7 自动机械男表', '54', '梅花旗舰店', '');
INSERT INTO `list` VALUES ('83', '../img/s_goods_list01.jpg', '1336.00', '245.73', '天梭TISSOT-杜鲁尔系列 T099.407.36.038.05 机械男表', '55', '法国雍加毕索官方旗舰店', '');
INSERT INTO `list` VALUES ('84', '../img/s_goods_list02.jpg', '1337.00', '252.32', '法国复古时尚腕表品牌：雍加毕索Yonger& Bresson-Beaumesnil 博梅尼勒堡系列 YBH 8372-08 B 机械男表', '56', '美度MIDO', '');
INSERT INTO `list` VALUES ('85', '../img/s_goods_list03.jpg', '1338.00', '258.92', '瑞士进口 迪沃斯(DAVOSA) -Gentleman 绅士系列 Classic经典之作 16145637 机械男表(以实物为准）', '57', '瑞士豪利时官方旗舰店', '');
INSERT INTO `list` VALUES ('86', '../img/s_goods_list04.jpg', '1339.00', '265.51', '阿玛尼Armani-时尚男表系列 AR2482 石英男表', '58', '瑞士柏高官方旗舰店', '');
INSERT INTO `list` VALUES ('87', '../img/s_goods_list05.jpg', '1340.00', '272.11', '瑞士柏高Paul Picot -FIRSHIRE 梦想家系列 造王者 P3710.SG.1021.1111 正装休闲 机械男表', '59', '阿玛尼ARMANI', '');
INSERT INTO `list` VALUES ('88', '../img/s_goods_list06.jpg', '1341.00', '278.70', '阿玛尼Armani-RENATO系列 AR2453 石英男表', '60', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list` VALUES ('89', '../img/s_goods_list07.jpg', '1342.00', '285.30', 'CK-女士Ladies系列 K3G23631 石英女表', '61', '梅花旗舰店', '');
INSERT INTO `list` VALUES ('90', '../img/s_goods_list08.jpg', '1343.00', '291.89', '豪利时Oris-潜水系列 733-7730-4139M 机械男表', '62', '法国雍加毕索官方旗舰店', '');
INSERT INTO `list` VALUES ('91', '../img/s_goods_list09.jpg', '1344.00', '298.49', '瑞士进口 迪沃斯(DAVOSA) -Gentleman 绅士系列 Classic经典之作 16145637 机械男表(以实物为准）', '63', '瑞士豪利时官方旗舰店', '');
INSERT INTO `list` VALUES ('92', '../img/s_goods_list10.jpg', '1345.00', '305.08', '阿玛尼Armani-时尚男表系列 AR2482 石英男表', '64', '瑞士柏高官方旗舰店', '');
INSERT INTO `list` VALUES ('93', '../img/s_goods_list11.jpg', '1346.00', '311.68', '瑞士柏高Paul Picot -FIRSHIRE 梦想家系列 造王者 P3710.SG.1021.1111 正装休闲 机械男表', '65', '阿玛尼ARMANI', '');
INSERT INTO `list` VALUES ('94', '../img/s_goods_list12.jpg', '1347.00', '318.27', '阿玛尼Armani-RENATO系列 AR2453 石英男表', '66', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list` VALUES ('95', '../img/s_goods_list13.jpg', '1348.00', '324.86', 'CK-女士Ladies系列 K3G23631 石英女表', '67', '梅花旗舰店', '');
INSERT INTO `list` VALUES ('96', '../img/s_goods_list14.jpg', '1349.00', '331.46', '豪利时Oris-潜水系列 733-7730-4139M 机械男表', '68', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list` VALUES ('97', '../img/s_goods_list15.jpg', '1350.00', '338.05', '精工SEIKO-Seiko 5系列 SRP605J8 自动机械男表', '69', '梅花旗舰店', '');
INSERT INTO `list` VALUES ('98', '../img/s_goods_list16.jpg', '1351.00', '344.65', '天梭TISSOT-杜鲁尔系列 T099.407.36.038.06 机械男表', '70', '法国雍加毕索官方旗舰店', '');
INSERT INTO `list` VALUES ('99', '../img/s_goods_list17.jpg', '1352.00', '351.24', '法国复古时尚腕表品牌：雍加毕索Yonger& Bresson-Beaumesnil 博梅尼勒堡系列 YBH 8372-09 B 机械男表', '71', '美度MIDO', '');
INSERT INTO `list` VALUES ('100', '../img/s_goods_list18.jpg', '1353.00', '357.84', '瑞士进口 迪沃斯(DAVOSA) -Gentleman 绅士系列 Classic经典之作 16145638 机械男表(以实物为准）', '72', '瑞士豪利时官方旗舰店', '');

-- ----------------------------
-- Table structure for list_copy1
-- ----------------------------
DROP TABLE IF EXISTS `list_copy1`;
CREATE TABLE `list_copy1` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) NOT NULL,
  `price` decimal(10,2) unsigned NOT NULL,
  `sPrice` decimal(10,2) unsigned NOT NULL,
  `content` varchar(255) NOT NULL,
  `sales` varchar(255) NOT NULL,
  `shop` varchar(255) NOT NULL,
  `gid` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list_copy1
-- ----------------------------

-- ----------------------------
-- Table structure for list原装
-- ----------------------------
DROP TABLE IF EXISTS `list原装`;
CREATE TABLE `list原装` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) NOT NULL,
  `price` decimal(10,2) unsigned NOT NULL,
  `sPrice` decimal(10,2) unsigned NOT NULL,
  `content` varchar(255) NOT NULL,
  `sales` varchar(255) NOT NULL,
  `shop` varchar(255) NOT NULL,
  `gid` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list原装
-- ----------------------------
INSERT INTO `list原装` VALUES ('1', '../img/s_goods_list01.jpg', '1.00', '4600.00', '豪利时Oris-潜水系列 733-7730-4135M 机械男表', '6075', '天梭TISSOT', 'g1');
INSERT INTO `list原装` VALUES ('2', '../img/s_goods_list02.jpg', '3681.00', '2601.00', '豪利时Oris-潜水系列 733-7730-4135M 机械男表', '6076', '瑞士库尔沃官方旗舰店', '');
INSERT INTO `list原装` VALUES ('3', '../img/s_goods_list03.jpg', '3682.00', '1602.00', '精工SEIKO-Seiko 5系列 SRP605J2 自动机械男表', '6077', 'CK Calvin Klein', '');
INSERT INTO `list原装` VALUES ('4', '../img/s_goods_list04.jpg', '3683.00', '5603.00', '天梭TISSOT-杜鲁尔系列 T099.407.36.038.00 机械男表', '6078', '阿玛尼ARMANI', '');
INSERT INTO `list原装` VALUES ('5', '../img/s_goods_list05.jpg', '3684.00', '1604.00', '法国复古时尚腕表品牌：雍加毕索Yonger& Bresson-Beaumesnil 博梅尼勒堡系列 YBH 8372-03 B 机械男表', '6079', '瑞士柏高官方旗舰店', '');
INSERT INTO `list原装` VALUES ('6', '../img/s_goods_list06.jpg', '3685.00', '2605.00', '瑞士进口 迪沃斯(DAVOSA) -Gentleman 绅士系列 Classic经典之作 16145632 机械男表(以实物为准）', '6080', '阿玛尼ARMANI', '');
INSERT INTO `list原装` VALUES ('7', '../img/s_goods_list07.jpg', '3686.00', '1606.00', '阿玛尼Armani-时尚男表系列 AR2477 石英男表', '6081', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list原装` VALUES ('8', '../img/s_goods_list08.jpg', '3687.00', '4607.00', '瑞士柏高Paul Picot -FIRSHIRE 梦想家系列 造王者 P3710.SG.1021.1106 正装休闲 机械男表', '6082', '梅花旗舰店', '');
INSERT INTO `list原装` VALUES ('9', '../img/s_goods_list09.jpg', '3688.00', '1608.00', '阿玛尼Armani-RENATO系列 AR2448 石英男表', '23', '法国雍加毕索官方旗舰店', '');
INSERT INTO `list原装` VALUES ('10', '../img/s_goods_list10.jpg', '3689.00', '1609.00', 'CK-女士Ladies系列 K3G23626 石英女表', '24', '美度MIDO', '');
INSERT INTO `list原装` VALUES ('11', '../img/s_goods_list11.jpg', '13300.00', '1610.00', '豪利时Oris-潜水系列 733-7730-4135M 机械男表', '25', '瑞士豪利时官方旗舰店', '');
INSERT INTO `list原装` VALUES ('12', '../img/s_goods_list12.jpg', '1.00', '1478.00', '豪利时Oris-潜水系列 733-7730-4135M 机械男表', '26', '瑞士柏高官方旗舰店', '');
INSERT INTO `list原装` VALUES ('13', '../img/s_goods_list13.jpg', '2.00', '1250.00', '精工SEIKO-Seiko 5系列 SRP605J3 自动机械男表', '27', '阿玛尼ARMANI', '');
INSERT INTO `list原装` VALUES ('14', '../img/s_goods_list14.jpg', '3.00', '1023.00', '天梭TISSOT-杜鲁尔系列 T099.407.36.038.01 机械男表', '28', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list原装` VALUES ('15', '../img/s_goods_list15.jpg', '4.00', '795.00', '法国复古时尚腕表品牌：雍加毕索Yonger& Bresson-Beaumesnil 博梅尼勒堡系列 YBH 8372-04 B 机械男表', '29', '梅花旗舰店', '');
INSERT INTO `list原装` VALUES ('16', '../img/s_goods_list16.jpg', '5.00', '567.00', '瑞士进口 迪沃斯(DAVOSA) -Gentleman 绅士系列 Classic经典之作 16145633 机械男表(以实物为准）', '30', '法国雍加毕索官方旗舰店', '');
INSERT INTO `list原装` VALUES ('17', '../img/s_goods_list17.jpg', '6.00', '340.00', '阿玛尼Armani-时尚男表系列 AR2478 石英男表', '31', '美度MIDO', '');
INSERT INTO `list原装` VALUES ('18', '../img/s_goods_list18.jpg', '7.00', '112.00', '瑞士柏高Paul Picot -FIRSHIRE 梦想家系列 造王者 P3710.SG.1021.1107 正装休闲 机械男表', '32', '瑞士豪利时官方旗舰店', '');
INSERT INTO `list原装` VALUES ('19', '../img/s_goods_list19.jpg', '8.00', '213.00', '阿玛尼Armani-RENATO系列 AR2449 石英男表', '33', '瑞士柏高官方旗舰店', '');
INSERT INTO `list原装` VALUES ('20', '../img/s_goods_list20.jpg', '9.00', '1.00', 'CK-女士Ladies系列 K3G23627 石英女表', '34', '阿玛尼ARMANI', '');
INSERT INTO `list原装` VALUES ('21', '../img/s_goods_list21.jpg', '10.00', '2.00', '豪利时Oris-潜水系列 733-7730-4135M 机械男表', '35', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list原装` VALUES ('22', '../img/s_goods_list22.jpg', '11.00', '3.00', '豪利时Oris-潜水系列 733-7730-4135M 机械男表', '36', '梅花旗舰店', '');
INSERT INTO `list原装` VALUES ('23', '../img/s_goods_list23.jpg', '12.00', '4.00', '精工SEIKO-Seiko 5系列 SRP605J4 自动机械男表', '37', '法国雍加毕索官方旗舰店', '');
INSERT INTO `list原装` VALUES ('24', '../img/s_goods_list24.jpg', '13.00', '5.00', '天梭TISSOT-杜鲁尔系列 T099.407.36.038.02 机械男表', '38', '美度MIDO', '');
INSERT INTO `list原装` VALUES ('25', '../img/s_goods_list25.jpg', '14.00', '6.00', '法国复古时尚腕表品牌：雍加毕索Yonger& Bresson-Beaumesnil 博梅尼勒堡系列 YBH 8372-05 B 机械男表', '39', '瑞士豪利时官方旗舰店', '');
INSERT INTO `list原装` VALUES ('26', '../img/s_goods_list26.jpg', '15.00', '7.00', '瑞士进口 迪沃斯(DAVOSA) -Gentleman 绅士系列 Classic经典之作 16145634 机械男表(以实物为准）', '40', '瑞士柏高官方旗舰店', '');
INSERT INTO `list原装` VALUES ('27', '../img/s_goods_list27.jpg', '16.00', '8.00', '阿玛尼Armani-时尚男表系列 AR2479 石英男表', '41', '阿玛尼ARMANI', '');
INSERT INTO `list原装` VALUES ('28', '../img/s_goods_list28.jpg', '17.00', '9.00', '瑞士柏高Paul Picot -FIRSHIRE 梦想家系列 造王者 P3710.SG.1021.1108 正装休闲 机械男表', '42', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list原装` VALUES ('29', '../img/s_goods_list29.jpg', '18.00', '10.00', '阿玛尼Armani-RENATO系列 AR2450 石英男表', '43', '梅花旗舰店', '');
INSERT INTO `list原装` VALUES ('30', '../img/s_goods_list30.jpg', '19.00', '11.00', 'CK-女士Ladies系列 K3G23628 石英女表', '44', '法国雍加毕索官方旗舰店', '');
INSERT INTO `list原装` VALUES ('31', '../img/s_goods_list31.jpg', '20.00', '12.00', '豪利时Oris-潜水系列 733-7730-4135M 机械男表', '88', '美度MIDO', '');
INSERT INTO `list原装` VALUES ('32', '../img/s_goods_list32.jpg', '21.00', '13.00', '豪利时Oris-潜水系列 733-7730-4135M 机械男表', '89', '瑞士豪利时官方旗舰店', '');
INSERT INTO `list原装` VALUES ('33', '../img/s_goods_list33.jpg', '22.00', '14.00', '精工SEIKO-Seiko 5系列 SRP605J3 自动机械男表', '90', '瑞士柏高官方旗舰店', '');
INSERT INTO `list原装` VALUES ('34', '../img/s_goods_list34.jpg', '23.00', '15.00', '天梭TISSOT-杜鲁尔系列 T099.407.36.038.01 机械男表', '91', '阿玛尼ARMANI', '');
INSERT INTO `list原装` VALUES ('35', '../img/s_goods_list35.jpg', '24.00', '16.00', '法国复古时尚腕表品牌：雍加毕索Yonger& Bresson-Beaumesnil 博梅尼勒堡系列 YBH 8372-04 B 机械男表', '92', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list原装` VALUES ('36', '../img/s_goods_list36.jpg', '25.00', '17.00', '瑞士进口 迪沃斯(DAVOSA) -Gentleman 绅士系列 Classic经典之作 16145633 机械男表(以实物为准）', '93', '梅花旗舰店', '');
INSERT INTO `list原装` VALUES ('37', '../img/s_goods_list37.jpg', '26.00', '18.00', '阿玛尼Armani-时尚男表系列 AR2478 石英男表', '94', '法国雍加毕索官方旗舰店', '');
INSERT INTO `list原装` VALUES ('38', '../img/s_goods_list38.jpg', '27.00', '19.00', '瑞士柏高Paul Picot -FIRSHIRE 梦想家系列 造王者 P3710.SG.1021.1107 正装休闲 机械男表', '95', '美度MIDO', '');
INSERT INTO `list原装` VALUES ('39', '../img/s_goods_list39.jpg', '28.00', '20.00', '阿玛尼Armani-RENATO系列 AR2449 石英男表', '96', '瑞士豪利时官方旗舰店', '');
INSERT INTO `list原装` VALUES ('40', '../img/s_goods_list40.jpg', '29.00', '21.00', 'CK-女士Ladies系列 K3G23627 石英女表', '97', '瑞士柏高官方旗舰店', '');
INSERT INTO `list原装` VALUES ('41', '../img/s_goods_list41.jpg', '30.00', '22.00', '豪利时Oris-潜水系列 733-7730-4135M 机械男表', '98', '阿玛尼ARMANI', '');
INSERT INTO `list原装` VALUES ('42', '../img/s_goods_list42.jpg', '31.00', '23.00', '豪利时Oris-潜水系列 733-7730-4135M 机械男表', '1009', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list原装` VALUES ('43', '../img/s_goods_list43.jpg', '32.00', '24.00', '精工SEIKO-Seiko 5系列 SRP605J4 自动机械男表', '1010', '梅花旗舰店', '');
INSERT INTO `list原装` VALUES ('44', '../img/s_goods_list44.jpg', '33.00', '25.00', '天梭TISSOT-杜鲁尔系列 T099.407.36.038.02 机械男表', '1011', '法国雍加毕索官方旗舰店', '');
INSERT INTO `list原装` VALUES ('45', '../img/s_goods_list45.jpg', '34.00', '26.00', '法国复古时尚腕表品牌：雍加毕索Yonger& Bresson-Beaumesnil 博梅尼勒堡系列 YBH 8372-05 B 机械男表', '1012', '美度MIDO', '');
INSERT INTO `list原装` VALUES ('46', '../img/s_goods_list46.jpg', '35.00', '27.00', '瑞士进口 迪沃斯(DAVOSA) -Gentleman 绅士系列 Classic经典之作 16145634 机械男表(以实物为准）', '1013', '瑞士豪利时官方旗舰店', '');
INSERT INTO `list原装` VALUES ('47', '../img/s_goods_list47.jpg', '36.00', '28.00', '阿玛尼Armani-时尚男表系列 AR2479 石英男表', '1014', '瑞士柏高官方旗舰店', '');
INSERT INTO `list原装` VALUES ('48', '../img/s_goods_list48.jpg', '37.00', '29.00', '瑞士柏高Paul Picot -FIRSHIRE 梦想家系列 造王者 P3710.SG.1021.1108 正装休闲 机械男表', '77', '阿玛尼ARMANI', '');
INSERT INTO `list原装` VALUES ('49', '../img/s_goods_list49.jpg', '38.00', '30.00', '阿玛尼Armani-RENATO系列 AR2450 石英男表', '78', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list原装` VALUES ('50', '../img/s_goods_list50.jpg', '39.00', '31.00', 'CK-女士Ladies系列 K3G23628 石英女表', '79', '梅花旗舰店', '');
INSERT INTO `list原装` VALUES ('51', '../img/s_goods_list22.jpg', '9.10', '11.01', '豪利时Oris-潜水系列 733-7730-4136M 机械男表', '80', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list原装` VALUES ('52', '../img/s_goods_list23.jpg', '10.10', '12.01', '精工SEIKO-Seiko 5系列 SRP605J5 自动机械男表', '81', '梅花旗舰店', '');
INSERT INTO `list原装` VALUES ('53', '../img/s_goods_list24.jpg', '11.10', '13.01', '天梭TISSOT-杜鲁尔系列 T099.407.36.038.03 机械男表', '82', '法国雍加毕索官方旗舰店', '');
INSERT INTO `list原装` VALUES ('54', '../img/s_goods_list25.jpg', '12.10', '14.01', '法国复古时尚腕表品牌：雍加毕索Yonger& Bresson-Beaumesnil 博梅尼勒堡系列 YBH 8372-06 B 机械男表', '83', '美度MIDO', '');
INSERT INTO `list原装` VALUES ('55', '../img/s_goods_list26.jpg', '13.10', '15.01', '瑞士进口 迪沃斯(DAVOSA) -Gentleman 绅士系列 Classic经典之作 16145635 机械男表(以实物为准）', '84', '瑞士豪利时官方旗舰店', '');
INSERT INTO `list原装` VALUES ('56', '../img/s_goods_list27.jpg', '14.10', '99.66', '阿玛尼Armani-时尚男表系列 AR2480 石英男表', '85', '瑞士柏高官方旗舰店', '');
INSERT INTO `list原装` VALUES ('57', '../img/s_goods_list28.jpg', '15.10', '100.66', '瑞士柏高Paul Picot -FIRSHIRE 梦想家系列 造王者 P3710.SG.1021.1109 正装休闲 机械男表', '86', '阿玛尼ARMANI', '');
INSERT INTO `list原装` VALUES ('58', '../img/s_goods_list29.jpg', '16.10', '101.66', '阿玛尼Armani-RENATO系列 AR2451 石英男表', '87', '瑞士迪沃斯官方旗舰店', '');
INSERT INTO `list原装` VALUES ('59', '../img/s_goods_list30.jpg', '17.10', '102.66', 'CK-女士Ladies系列 K3G23629 石英女表', '88', '梅花旗舰店', '');
INSERT INTO `list原装` VALUES ('60', '../img/s_goods_list31.jpg', '18.10', '103.66', '豪利时Oris-潜水系列 733-7730-4137M 机械男表', '89', '法国雍加毕索官方旗舰店', '');

-- ----------------------------
-- Table structure for slide
-- ----------------------------
DROP TABLE IF EXISTS `slide`;
CREATE TABLE `slide` (
  `﻿id` int(11) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`﻿id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of slide
-- ----------------------------
INSERT INTO `slide` VALUES ('1', 'img/banner01.jpg');
INSERT INTO `slide` VALUES ('2', 'img/banner02.jpg');
INSERT INTO `slide` VALUES ('3', 'img/banner03.jpg');
INSERT INTO `slide` VALUES ('4', 'img/banner04.jpg');
INSERT INTO `slide` VALUES ('5', 'img/banner05.jpg');
INSERT INTO `slide` VALUES ('6', 'img/banner06.jpg');
INSERT INTO `slide` VALUES ('7', 'img/banner07.jpg');

-- ----------------------------
-- Table structure for tel
-- ----------------------------
DROP TABLE IF EXISTS `tel`;
CREATE TABLE `tel` (
  `id` int(20) unsigned NOT NULL AUTO_INCREMENT,
  `number` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tel
-- ----------------------------
INSERT INTO `tel` VALUES ('1', '13533790520', 'abc123456');
INSERT INTO `tel` VALUES ('2', '13533790523', 'a123456');
INSERT INTO `tel` VALUES ('3', '13533790522', 'a123456');
INSERT INTO `tel` VALUES ('4', '13533790528', 'a123456');
INSERT INTO `tel` VALUES ('5', '13533790524', 'a123456');
INSERT INTO `tel` VALUES ('6', '13533790544', 'a123456');
INSERT INTO `tel` VALUES ('7', '13533790525', 'a123456');
INSERT INTO `tel` VALUES ('8', '13533790526', 'a123456');
INSERT INTO `tel` VALUES ('9', '13533790531', 'a123456');
INSERT INTO `tel` VALUES ('10', '13533790529', 'a123456');
INSERT INTO `tel` VALUES ('11', '13143434343', 'a11111');
INSERT INTO `tel` VALUES ('12', '13533790530', 'a123456');
SET FOREIGN_KEY_CHECKS=1;
