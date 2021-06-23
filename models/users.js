module.exports = {



 users : [
    
    
    ],
   getAll(req,res){
return this.users
   },
    newUser(email, password, url){
      this.users = []
        this.users.push({ email});
        this.users.push({password});
        this.users.push({url});
        
        



    },
    deletePost(id){

    }
  


}
function generateID(){
    return Math.random().toString(36).substr(2,9);
}