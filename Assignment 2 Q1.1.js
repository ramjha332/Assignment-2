var users = [{
    'email' : 'ram@gmail.com',
    'password' : 'ram',
    'firstname' : 'Ram',
    'lastname' : 'Jha',
    'mobileNumber' : '999999',
    'isVerified' : true,
    'isPaid' : true
}, { 
    'email' : 'radha@gmail.com',
    'password' : 'radha',
    'firstname' : 'Radha',
    'lastname' : 'Jha',
    'mobileNumber' : '999888',
    'isVerified' : true,
    'isPaid' : false
}, {
    'email' : 'bk@gmail.com',
    'password' : 'bk',
    'firstname' : 'Baikunth',
    'lastname' : 'Jha',
    'mobileNumber' : '888888',
    'isVerified' : false,
    'isPaid' : false
    }
]

checkLogin = (email, password) => 
{
    const VerifyEmail = users.find(item => (item.email == email))
    const VerifyPassword = users.find(item => (item.password == password))
    if(VerifyEmail && VerifyPassword){
        console.log(`You are logged in`)
    }
    else if(VerifyEmail && !VerifyPassword){
        console.log(`You have enter invalid password`)
    }else{
        console.log(`No users with this email found`)
    }     
}
checkLogin('radha@gmail.com','radha')
