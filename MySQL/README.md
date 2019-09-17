##1-2.MySQL目录

bin目录:存储可执行文件

data目录:存储数据文件

docs：文档

include：存储包含的头文件

lib目录：存储库文件

share：错误消息和字符集文件


##1-2.修改编码方式

[mysql] default-character-set=utf8

[mysqlid] character-set-server=utf8

##1.3启动与停止MySQL服务

启动：net start MySQL

停止：net stop MySQL

##登录与退出

登录

| 参数 | 描述 |
| ------ | ------ |
| -D,--database=name | 打开指定数据库 |
| --delimiter=name | 指定分隔符 |
| -h,--host=name | 服务器名称 |
| -P,--passord[=name] | 密码 |
| -P,--port=# | 端口号|
| --prompt=name | 设置提示符|
| -u,--user=name | 用户名|
| -V,--version | 输出版本信息并退出|

如我的本地：root/study0918

mysql -uroot -p -P3306 -h127.0.0.1

study0918

退出:mysql > exit

mysql > quit

mysql > \q

##修改MySQL提示符
连接客户端时通过参数指定

shell>mysql -uroot -proot --prompt 提示符

连接上客户端后，通过prompt命令修改

mysql>prompt 提示符
##MySQL提示符

| 参数 | 描述 |
| ------ | ------ |
| \D | 完整的日期 |
| \d | 当前数据库 |
| \h | 服务器名称 |
| \u | 当前用户 |

如PROMPT set to '\u@\h \d>'

提示将为 root@localhost (none) 因为没有打开任何数据库，所以是none

##MySQL常用命令

显示当前服务器版本

SELECT VERSION();

显示当前日期时间 

SELECT NOW();

显示当前用户

SELECT USER();

--> 表示期望结束符，输入分号即可解决

##MySQL语句的规范

关键字与函数名称全部大写

数据库名称，表名称，字段名称全部小写

SQL语句比如以分号结尾

##操作数据库

##创建数据库

CREATE {DATABASE | SCHEMA} [IF NOT EXISTS] db_name [DEFAULT] CHARACTE SET [=] charset_name

{}代表必填项，比如从{}中选择，[]是可选项

##查看当前服务器下的数据表列表

SHOW {DATABASE | SCHEMAS} [LIKE 'pattern | WHERE expr]

查看警告信息：SHOW WARNINGS;

查看数据库创建格式:SHOW CREATE DATABASE t2;

修改数据库：ALTER {DATABASE | SCHEMA} [db_name] [DEFAULT] CHARACTE SET [=] charset_name

删除数据库:DROP {DATABASE | SCHEMA} [IF EXISTS] db_name;

##数据类型 

数据类型是指列，存储过程参数，表达式和局部变量的数据特征，它决定了数据的存储格式，代表了不同的信息类型。

###整型

| 数据类型 | 存储范围 | 字节 |
| ------ | ------ | -----|
| TINYINT | 有符号值:-128到127 (-2^7到2^7-1)<br>无符号值:0到255(0到2^8-1) |1|
| SMALLINT | 有符号值:-32768到32767 (-2^15到2^15-1)<br>无符号值:0到65535(0到2^16-1) |2|
| MEDIUMINT | 有符号值:-8388608到8388607 (-2^23到2^23-1)<br>无符号值:0到16777215(0到2^24-1) |3|
| INT | 有符号值:-2147483648到2147483647 (-2^31到2^31-1)<br>无符号值:0到4294967295(0到2^32-1) |4|
| BIGINT | 有符号值:-9223372036854775808到9223372036854775807 (-2^63到2^63-1)<br>无符号值:0到18446744073709551615(0到2^64-1) |8|

###浮点型

| 数据类型 | 存储范围 |
| ------ | ------ |
| FLOAT[(M,D)] | -3.402823466E+38到-1.175494351E-38、0和1.175494351E-38岛4.402823466E+38。M是数字总位数，D是小数点后面的位数。㘝M和D被省略，根据硬件允许的限制来保存值。单精度浮点数精确到大约7位小数位。 |
| DOUBLE[(m,d)] | -1.7976931348623157E+308到-2.2250738585072014E-308、0和2.2250738585072014E-308到1.7976931348623157E+308. |

###日期时间型

| 列类型 | 存储需求 |
| ------ | ------ |
| YEAR | 1 |
| TIME | 3 |
| DATE | 3 |
| DATETIME | 8 |
| TIMESTAMP | 4 |

###字符型

| 列类型 | 存储需求 |
| ------ | ------ |
| CHAR(M) | M个字节，0<=M<=255 |
| VARCHAR(M) | L+1个字节，其中L<=M且0<=M<=65535 |
| TINYTEXT | L+1个字节，其中L<2^8 |
| TEXT | L+2个字节，其中L<2^16 |
| MEDIUMTEXT | L+3个字节，其中L<2^24 |
| LONGTEXT | L+4个字节，其中L<2^32 |
| ENUM('value1','value2',...) | 1或2个字节，取决于枚举值的个数(最多65535个值) |
| SET('value1','value2',...) | 1、2、3、4或者8个字节，取决于set成员的数目(最多64个成员) |


##MySQL创建数据表

###概述

数据表(或称表)是数据库最重要的组成部分之一，是其他对象的基础

###USE

打开数据库

USE数据库名称

###创建数据表

CREATE TABLE[IF NOT EXISTS] table_name (column_name data_type,...)

如:create table tb1(username VARCHAR(20),age TINYINT UNSIGNED,salary FLOAT(8,2) UNSIGNED);

##查看数据表

SHOW TABLES[FROM db_name] [LIKE 'pattern'|WHERE expr]

如:show tables from mysql;

##查看数据表结构

SHOW COLUMNS FROM tbl_name

如:show columns from tbl;

