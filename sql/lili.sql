/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1_3306
Source Server Version : 50520
Source Host           : 127.0.0.1:3306
Source Database       : lili

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2020-07-05 20:06:11
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `good_id` int(50) NOT NULL AUTO_INCREMENT,
  `good_src` varchar(200) CHARACTER SET utf8 NOT NULL,
  `good_desc` varchar(200) CHARACTER SET utf8 NOT NULL,
  `good_price` int(11) NOT NULL,
  PRIMARY KEY (`good_id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('61', 'https://pic.cnrmall.com/image/2d/ff/2dff5fc3eee5d6d6d38b7a2abf4e78a2.jpg@240w_240h', '韩国DRH美白抗皱精华独供组', '585');
INSERT INTO `goods` VALUES ('62', 'https://pic.cnrmall.com/image/d0/58/d058ce171803201af55c439f9bc25fe8.jpg@240w_240h', '莫洛琪海星修护面膜抢购组', '94');
INSERT INTO `goods` VALUES ('63', 'https://pic.cnrmall.com/image/21/8e/218e1e5bfe5d697d2cbabace070b4cd0.jpg@240w_240h', '【独立5条装】多码数螺纹纯棉中腰大码三角裤棉质女士内裤', '40');
INSERT INTO `goods` VALUES ('64', 'https://pic.cnrmall.com/image/8a/de/8ade455b79e1073a741e4248fc641e98.jpg@240w_240h', 'APANRUI欧丽源防晒霜SPF50+ *2支', '199');
INSERT INTO `goods` VALUES ('65', 'https://pic.cnrmall.com/image/85/66/856656d429c6dea81d8947a5b7d45185.jpg@240w_240h', '菲儿小屋韩版夏季新品女童宝宝公主套装上衣短袖＋短裤可开档', '109');
INSERT INTO `goods` VALUES ('66', 'https://pic.cnrmall.com/image/9f/89/9f893c653113a5684d8222571b0fb57e.jpg@240w_240h', '冰袖冰丝防嗮袖套女 夏季户外防紫外线手臂套袖男士开车护臂', '10');
INSERT INTO `goods` VALUES ('67', 'https://pic.cnrmall.com/image/ea/54/ea54e9b2f6be1f28ebeb79c377d13c55.png@240w_240h', '嘉兴系粽礼粽子礼盒装1400g板栗鲜肉鲜肉蜜枣豆沙棕子端午节特产礼品团购优选原料 糯香色美', '109');
INSERT INTO `goods` VALUES ('68', 'https://pic.cnrmall.com/image/62/93/62930e90d1bcef678ffb01315c1cb692.jpg@240w_240h', 'JANCYBONY牛皮凉鞋1+1组', '270');
INSERT INTO `goods` VALUES ('69', 'https://pic.cnrmall.com/image/6a/7c/6a7c58f174bac95449c57d5a85ba9320.jpg@240w_240h', '中国白雕龙茶具套组', '49');
INSERT INTO `goods` VALUES ('70', 'https://pic.cnrmall.com/image/9b/4e/9b4e267cb183d5858a92b72a7ac35f22.jpg@240w_240h', '好视力冰爽水润眼贴', '39');
INSERT INTO `goods` VALUES ('71', 'https://pic.cnrmall.com/image/25/58/25583618d3edcd29dc95373fa994616e.jpg@240w_240h', '品小美-香氛免洗洗手液套组', '29');
INSERT INTO `goods` VALUES ('72', 'https://pic.cnrmall.com/image/2a/fe/2afeff020c41b5e7af0dd7aa36430b53.jpg@240w_240h', '品小美-香氛滋养护手霜套组', '39');
INSERT INTO `goods` VALUES ('73', 'https://pic.cnrmall.com/image/64/d8/64d83577453d603aae26d678677f111d.jpg@240w_240h', '瀚品轩-合家粽子大礼包-900g/盒', '68');
INSERT INTO `goods` VALUES ('74', 'https://pic.cnrmall.com/image/44/2b/442b123fb080b77d1a06fd0bc38bafca.jpg@240w_240h', '凉鞋女2020新款丽足康平底夏季时尚运动凉鞋女软底沙滩鞋', '119');
INSERT INTO `goods` VALUES ('75', 'https://pic.cnrmall.com/image/cf/e9/cfe9ad4e677be405d5955bfc304777f7.jpg@240w_240h', '2020新款夏季薄款泰国天然乳胶内裤女乳胶底裆冰丝中腰无痕三角盒装裤', '42');
INSERT INTO `goods` VALUES ('76', 'https://pic.cnrmall.com/image/c1/2e/c12e3f71e5729676fd1b1006dc3ed7de.jpg@240w_240h', 'FANCY FUEL水感倍护防晒喷雾', '270');
INSERT INTO `goods` VALUES ('77', 'https://pic.cnrmall.com/dw/127562/127562_0.jpg@240w_240h', '竹元素竹浆本色纸巾家庭组', '180');
INSERT INTO `goods` VALUES ('78', 'https://pic.cnrmall.com/image/ff/1f/ff1ffb7cf846bc20fd2eb2f045af9db3.jpg@240w_240h', '味滋源独居风味黄桃罐头5罐*425g整箱糖水新鲜水果罐头经典口味', '50');
INSERT INTO `goods` VALUES ('79', 'https://pic.cnrmall.com/image/63/77/6377e9f7ed9c15dde212ff89b57efb90.jpg@240w_240h', '“消字号”认证 洗必泰专用消毒成分 75%酒精 室内物品个人消毒全方位防护', '118');
INSERT INTO `goods` VALUES ('80', 'https://pic.cnrmall.com/image/c3/24/c3242948c5b88f39e0baebcdf1402405.jpg@240w_240h', '小柠家 植物精油避蚊剂长久防蚊90天', '39');

-- ----------------------------
-- Table structure for restt
-- ----------------------------
DROP TABLE IF EXISTS `restt`;
CREATE TABLE `restt` (
  `cartId` int(50) NOT NULL AUTO_INCREMENT,
  `userId` varchar(50) CHARACTER SET utf8 NOT NULL,
  `goodId` varchar(50) CHARACTER SET utf8 NOT NULL,
  `num` varchar(50) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`cartId`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of restt
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(50) CHARACTER SET utf8 NOT NULL,
  `userpass` varchar(50) NOT NULL,
  `userphone` varchar(50) CHARACTER SET utf8 NOT NULL,
  `id` int(40) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('zs', '123', '13680488368', '1');
INSERT INTO `user` VALUES ('ls', '123', '13680488369', '2');
INSERT INTO `user` VALUES ('lw', '123', '13926291888', '5');
INSERT INTO `user` VALUES ('LI', '123', '13926291888', '6');
INSERT INTO `user` VALUES ('ya', '123', '13926291888', '7');
INSERT INTO `user` VALUES ('lb', '123', '13926291888', '8');
INSERT INTO `user` VALUES ('zsy', '123', '13926291888', '9');
INSERT INTO `user` VALUES ('zsd', '123', '13926291888', '10');
INSERT INTO `user` VALUES ('zsr', '123', '13926291888', '11');
INSERT INTO `user` VALUES ('zsw', '123', '13926291888', '12');
INSERT INTO `user` VALUES ('lwz', '123', '13926291888', '13');
INSERT INTO `user` VALUES ('zst', '123', '13926291888', '14');
INSERT INTO `user` VALUES ('zsi', '123', '13926291888', '15');
INSERT INTO `user` VALUES ('zsh', '123', '13926291888', '16');
INSERT INTO `user` VALUES ('zsb', '123', '13926291888', '17');
INSERT INTO `user` VALUES ('zsc', '123', '13926291888', '18');
