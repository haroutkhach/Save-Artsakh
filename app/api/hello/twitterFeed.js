import { Auth } from 'rettiwt-auth';
new Auth().getUserCredential({
    email: 'bigmoneysniper213423@gmail.com',
    userName: 'thanksfora13473',
    password: 'harout21'
}).then(credential => {
    credential.toHeader()
})

