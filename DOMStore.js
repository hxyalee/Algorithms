/*
Write a class called DOMStore that stores a Node and a value (reimplement Map). 
DOMStore contains the following functions:
has(node) // returns boolean
get(node) // returns node or undefined
set(node, value) // "upsert", update or insert
*/


class DOMEStore{
	constructor(){
		this.nodes = {};
		this.value = [];
	}
	has(node){
		if(node in this.nodes){
			return true;
		}
		return false;
	}
	get(node){
		if(this.has(node)){
			return this.nodes[node];
		}
		return undefined;
	}
	set(node, value){
		if(this.has(node)){
			this.value[this.nodes[node]] = value;
		}else{
			this.values.push(value);
			this.nodes[node] = this.values.length - 1;
		}
	}
}