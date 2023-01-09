import {loggedUser} from './reducer';

const store = createStore(loggedUser);


fetch("httpes://fdd.sffs.dssdf//ssdvf/d.com",
method:'post',
headers:{
    Accept:'UserName',
    'content_Type':'JSON'
},
body: JSON.stringify({
    name:'Some Name',
    id:'password',
})
)