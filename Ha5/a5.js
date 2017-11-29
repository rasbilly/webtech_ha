function Vector(x,y){
	this.x=x
	this.y=y
}

Vector.prototype.plus=function(other){
	return (Object.getPrototypeOf(other)==Vector)? false : new Vector(this.x+other.x,this.y+other.y)
}
	

Vector.prototype.minus=function(other){
	return (Object.getPrototypeOf(other)==Vector)? false : new Vector(this.x-other.x,this.y-other.y)
}
	
Object.defineProperty(Vector.prototype, "length",{
	get:function(){
		return Math.sqrt(this.x*this.x+this.y*this.y)
	}
})


// Your code here.
function ArraySeq(array){
  this.array=array
  this.pos=0
}


ArraySeq.prototype.hasNext=function(){
  if(this.pos<=this.array.length-1){this.pos++;return true}else {return false}
}

Object.defineProperty(ArraySeq.prototype,"value",{
get:function(){return this.array[this.pos-1]}})



function RangeSeq(start, end){
  if(start-end<0){this.add=1} 
  else if(start-end>0){this.add=-1} 
  else{this.add=0}
  this.start=start;
  this.end=end;
}

RangeSeq.prototype.hasNext=function(){
  if(this.start!=this.end+this.add){
  	this.start=this.start+this.add;
    return true;
  }else{
  	return false;
  }
  
      
}
Object.defineProperty(RangeSeq.prototype,"value",{
  get:function(){return this.start-this.add}})

function logFive(e){
 for(var i=0;i<5&&e.hasNext();i++){
   console.log(e.value)
}
}



logFive(new ArraySeq([]));
// → 1
// → 2
logFive(new RangeSeq(2, -2));
// → 100
// → 101
// → 102
// → 103
// → 104