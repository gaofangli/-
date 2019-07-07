module.exports = require('knex')({
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'root',
      database: 'date'
    },
    pool: { min: 0, max: 10 }
  });

/*  module.exports 对象是由模块系统创建的。
    在我们自己写模块的时候，需要在模块最后写
    好模块接口，声明这个模块对外暴露什么内容，
    module.exports 提供了暴露接口的方法。
*/ 
//module.exports =DB 