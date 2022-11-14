class Message{
constructor(name,time,text){
this.name = name;
this.time = time;
this.text = text;
}

toString(name,time,text){
return (`${time} ${name} : ${text}`);
}
}
function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

var valuee = [];

class Messenger extends Message{
    
    
    show_history(){
       valuee.forEach((item,index) => {
          console.log(item);
       })
    }
    send(author, text){
      
        let time = gettime();
        
        let result = this.toString(author,time,text);
        valuee.push(result);

    }
   

}
let mg = new Messenger();
mg.send("Nebi","Hello");
mg.send("Qoceli","Hi");
mg.show_history();

