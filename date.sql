/*
 Navicat MySQL Data Transfer

 Source Server         : date
 Source Server Type    : MySQL
 Source Server Version : 50553
 Source Host           : localhost:3306
 Source Schema         : date

 Target Server Type    : MySQL
 Target Server Version : 50553
 File Encoding         : 65001

 Date: 04/07/2019 17:10:52
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for books
-- ----------------------------
DROP TABLE IF EXISTS `books`;
CREATE TABLE `books`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` float(10, 2) NOT NULL,
  `author` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of books
-- ----------------------------
INSERT INTO `books` VALUES (1, 'H5大前端', 100.00, 'haha');
INSERT INTO `books` VALUES (2, 'java入门到放弃', 10.00, '张');
INSERT INTO `books` VALUES (3, '那小子贼帅', 60.00, '宁');
INSERT INTO `books` VALUES (4, '那小贼骚', 37.00, '刘');
INSERT INTO `books` VALUES (5, '那小子贼调', 40.00, '李');
INSERT INTO `books` VALUES (6, '那小子是谁', 100.00, '石');
INSERT INTO `books` VALUES (7, 'php入门到精通', 100.00, '朱');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '客户表',
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '账户',
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '头像',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 55 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (5, 'asd', '5555', NULL);
INSERT INTO `users` VALUES (9, '啊实打实的', 'asd', NULL);
INSERT INTO `users` VALUES (10, '', '', NULL);
INSERT INTO `users` VALUES (11, 'DSF', 'DF', NULL);
INSERT INTO `users` VALUES (12, 'NINGYU', '15776892636', NULL);
INSERT INTO `users` VALUES (13, '朱明朱', 'zmz1591593693.', NULL);
INSERT INTO `users` VALUES (14, '石雨飞', '666', NULL);
INSERT INTO `users` VALUES (15, '15776892636', '666', NULL);
INSERT INTO `users` VALUES (16, '15845339546', '5555', NULL);
INSERT INTO `users` VALUES (17, '啊是大', 'dd', NULL);
INSERT INTO `users` VALUES (18, '方法', 'fff', NULL);
INSERT INTO `users` VALUES (19, 'll', '666', NULL);
INSERT INTO `users` VALUES (20, '顶顶顶', 'dddd', NULL);
INSERT INTO `users` VALUES (21, 'sss', 'sss', NULL);
INSERT INTO `users` VALUES (22, 'ddd', 'ddd', NULL);
INSERT INTO `users` VALUES (23, 'dddddd', '6666', NULL);
INSERT INTO `users` VALUES (24, '宁雨', '970504..', NULL);
INSERT INTO `users` VALUES (25, 'a\'s\'d', 'asd', NULL);
INSERT INTO `users` VALUES (26, 'ningyua', '970504..', NULL);
INSERT INTO `users` VALUES (27, 'dddd', 'dddd', NULL);
INSERT INTO `users` VALUES (28, '9700', '9700', NULL);
INSERT INTO `users` VALUES (29, 'qq', 'qqq', NULL);
INSERT INTO `users` VALUES (30, 'qqq', 'qqq', NULL);
INSERT INTO `users` VALUES (31, '高方丽', '666', NULL);
INSERT INTO `users` VALUES (32, 'asd ', 'aaa', NULL);
INSERT INTO `users` VALUES (33, '高方丽', '666', NULL);
INSERT INTO `users` VALUES (34, 'yyy', '1', NULL);
INSERT INTO `users` VALUES (35, 'avvv', 'vvv', NULL);
INSERT INTO `users` VALUES (36, '小雨', '666', NULL);
INSERT INTO `users` VALUES (37, '让人', 'qq', NULL);
INSERT INTO `users` VALUES (38, '555', '', NULL);
INSERT INTO `users` VALUES (39, '666', '', NULL);
INSERT INTO `users` VALUES (40, '高', '', NULL);
INSERT INTO `users` VALUES (41, '高', '', NULL);
INSERT INTO `users` VALUES (42, '222', '', NULL);
INSERT INTO `users` VALUES (43, 'ASDD', '', NULL);
INSERT INTO `users` VALUES (44, 'yy', '', NULL);
INSERT INTO `users` VALUES (45, 'AAA', '', NULL);
INSERT INTO `users` VALUES (46, 'tt', 'tt', NULL);
INSERT INTO `users` VALUES (47, 'ccc', '', NULL);
INSERT INTO `users` VALUES (48, 'rrr', '', NULL);
INSERT INTO `users` VALUES (49, 'hhh', '', NULL);
INSERT INTO `users` VALUES (50, 'jjj', '', NULL);
INSERT INTO `users` VALUES (51, 'www', 'www', NULL);
INSERT INTO `users` VALUES (52, 'sb', 'sb', NULL);
INSERT INTO `users` VALUES (53, 'gg', 'gg', NULL);
INSERT INTO `users` VALUES (54, 'gaogao', '456', NULL);

-- ----------------------------
-- Table structure for words
-- ----------------------------
DROP TABLE IF EXISTS `words`;
CREATE TABLE `words`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `word` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `base` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 25 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of words
-- ----------------------------
INSERT INTO `words` VALUES (1, 'abandon', 'a');
INSERT INTO `words` VALUES (2, 'ability', 'a');
INSERT INTO `words` VALUES (3, 'absolute', 'a');
INSERT INTO `words` VALUES (4, 'get', 'g');
INSERT INTO `words` VALUES (5, 'girl', 'g');
INSERT INTO `words` VALUES (6, 'gift', 'g');
INSERT INTO `words` VALUES (7, 'ball', 'b');
INSERT INTO `words` VALUES (8, 'bananan', 'b');
INSERT INTO `words` VALUES (9, 'bank', 'b');
INSERT INTO `words` VALUES (10, 'basic', 'b');
INSERT INTO `words` VALUES (11, 'captain', 'c');
INSERT INTO `words` VALUES (12, 'card', 'c');
INSERT INTO `words` VALUES (13, 'carry', 'c');
INSERT INTO `words` VALUES (14, 'case', 'c');
INSERT INTO `words` VALUES (15, 'deep', 'd');
INSERT INTO `words` VALUES (16, 'distance', 'd');
INSERT INTO `words` VALUES (17, 'define', 'd');
INSERT INTO `words` VALUES (18, 'delay', 'd');
INSERT INTO `words` VALUES (19, 'element', 'e');
INSERT INTO `words` VALUES (20, 'else', 'e');
INSERT INTO `words` VALUES (21, 'emit', 'e');
INSERT INTO `words` VALUES (22, 'fact', 'f');
INSERT INTO `words` VALUES (23, 'fade', 'f');
INSERT INTO `words` VALUES (24, 'find', 'f');

SET FOREIGN_KEY_CHECKS = 1;
