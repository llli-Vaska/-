const db = require('./db.js')
exports.start = (req,res)=>{
}
// 登录注册处理
exports.login = (req,res)=>{
    let username = req.body.username
    let pwd = req.body.password
    // 查询语句
    let sql = 'select * from user where username = ?'
    db.base(sql,username,(result)=>{
        if(!result.length){
            res.json({ status: 0, msg: '登录失败' })
            console.log('status: 0, msg: 登录失败');
            return;
        }else{
            // [ RowDataPacket { password: '123', username: 'admin', id: 1 } ]
            if(result[0].password==pwd){
                res.json({ status: 1, msg: '登录成功' });
                console.log('status: 1, msg: 登录成功');
                console.log('本次登录用户名为：' + username,'密码为：' + pwd);
                return;
                
            }
             res.json({ status: 0, msg: '密码错误' })
             console.log(' status: 0, msg: 密码错误');
             return;
        }
    })
    // console.log(req.body)
    // res.send('测试')
}
exports.register = (req,res)=>{
    let username = req.body.username
    let password = req.body.password
    // 查询语句
    let sql = 'select * from user where username = ?'
    // 插入语句
    let insert = 'insert into user set ?'
    db.base(sql,username,(result)=>{
        // console.log(result.length)
        if(result.length!==0){
            return res.json({ status: 11, msg: '该用户名已经存在' })
        }else{
            db.base(insert,{username,password},(result)=>{
                console.log(result)
                if(result.affectedRows==1){
                    return res.json({ status: 01, msg: '注册成功' })
                }
                return res.json({ status: 10, msg: '注册失败' })
            })
        }
    })

    // console.log(req.body)
    // res.send('测试')
}
