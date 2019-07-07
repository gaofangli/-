const Koa = require('koa');
const KoaBody = require('koa-body');//中间见
const koaStatic = require('koa-static');
const Router = require('koa-router');//路由
const fs = require('fs');
const multer = require('koa-multer');
const path = require('path')//处理文件路径的
const DB = require('./db'); //由于是一个文件夹 默认找到index模块  简写


//--------------------------------------------------------------------
    var storage = multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'./static/uploads/')
        },
        filename:function(req,file,cb){
            //console.log(file);//查看扩展名
            // console.log(Object  );
            // console.log(path.extname(file.originalname));
            cb(
                null,
                file.fieldname+'-' + Date.now()+path.extname(file.originalname));
        }
    });

    var upload = multer({storage:storage});

    const app=new Koa(); 
//--------------------------------------------------------------------

//--------------------------------------------------------------------
//托管静态文件
app.use(koaStatic('static'));
app.use(KoaBody({
    multipart:true
}
));//解析数据
//--------------------------------------------------------------------
//路由实例 定义 每一个路由
const router = new Router();
//--------------------------------------------------------------------
router   ///login 不是真实的文件夹
    .get('/login',ctx=>{ 
        ctx.type='text/html';
        ctx.body =fs.readFileSync('./static/html/login.html'); //读取字符串 html字符串
    }) //登入
    
  .get('/xiaomi',ctx=>{ 
      ctx.type='text/html';
      ctx.body =fs.readFileSync('./static/xiaomi.html'); //读取字符串 html字符串
  }) //登入
  .get('/gouwucheyemian',ctx=>{ 
      ctx.type='text/html';
      ctx.body =fs.readFileSync('./static/gouwucheyemian.html'); //读取字符串 html字符串
  }) //登入
  .get('/xiaoai',ctx=>{ 
      ctx.type='text/html';
      ctx.body =fs.readFileSync('./static/xiaoai.html'); //读取字符串 html字符串
  }) //登入 
  // .get('/login',ctx=>{ 
  //     ctx.type='text/html';
  //     ctx.body =fs.readFileSync('./xiaoxiao/login.html'); //读取字符串 html字符串
  // }) //登入 
//--------------------------------------------------------------------
    .post('/login',async ctx =>{    //login 不是真实的文件夹
        var { username, password } = ctx.request.body;   //数据 库去查询
        // if (username == 'NY' && password == '1234') {
        // ctx.body = { code: 200, message: '登录成功' };
        // } else {
        // ctx.body = { code: -1, message: '用户名或密码错误' };
        // }
        
//正常是异步函数 下面是同步函数需要转 异步用es7的语法加上async加上await  是异步调用
//拿数据库里的值  id
        var ret = await DB('users') 
        .where({
          username,
          password
        })
        .select('id');
        // console.log(ret);
//判断数据库里有没有输入的这个值 
        if (ret && ret.length > 0) {  
            ctx.body = { code: 200, message: '登录成功', user: { name: username } };
          } else {
            ctx.body = { code: -1, message: '用户名或密码错误' };
          }
        }) //登入成功的数据
// --------------------------------------------------------------------
   .get('/register', ctx => {
    ctx.type = 'text/html';
    ctx.body = fs.readFileSync('./static/html/register.html');
  })  //注册 

//--------------------------------------------------------------------
.post('/register', async ctx => {
    var { username, password, repasswd } = ctx.request.body;
    // console.log(username, password, repasswd);
    if (password !== repasswd) {
      ctx.body = { code: -2, message: '两次密码不一致' };
      return;
    }
    var ret = await DB('users')
      .where({ username })
      .select('id');

    if (ret && ret.length > 0) {
      ctx.body = { code: -3, message: '用户名已注册' };
      return;
    }

    ret = await DB('users').insert({ username, password });
    // console.log(ret);
    if (ret && ret.length > 0) {
      ctx.body = { code: 200, message: '注册成功' };
    } else {
      ctx.body = { code: 0, message: '网络异常' };
    }
  }) //登入成功的数据
//--------------------------------------------------------------------
    .get('/',ctx=>{
        ctx.type='text/html'; 
        ctx.body =fs.readFileSync('./static/xiaomi.html');
    })//列表页主页  跟上面不是一个路由 请求方式不一样
//--------------------------------------------------------------------
//uoload 上传的意思 single单文件 上传   只是处理 文件上传
   
.post('/upload',upload.single('file'),ctx=>{    //file 剑 html也得用file起名
    //响应
    let filePath = ctx.req.file.path; //得到文件 上传后的位置信息
    let fileName = path.basename(filePath);
        //console.log(ctx.req.file)
        console.log(fileName); //最后一次文件上传的名字
        ctx.body={src:`/uploads/${fileName}`} //从地址 拿照片的名子   响应给客户端  src请求客户端图片的
})
//-------------------------------------------------------
.get('/upload',ctx=>{
    //响应
    ctx.type = 'text/html';
    ctx.body =fs.readFileSync('./static/html/upload.html');        
});
   
//--------------------------------------------------------------------
    app
        .use(router.routes())
        .use(router.allowedMethods());//访问方式会做一个校验 如果不是上面访问方式会访问时 会提示一个消息输出是不好使的
//--------------------------------------------------------------------
        app.listen(8080, 'localhost', () => {
            console.log('Server Started.');
          });
    

