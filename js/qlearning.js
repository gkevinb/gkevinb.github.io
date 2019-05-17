"use strict";class RewardMap{constructor(t,i,s,r){this.rows=t,this.columns=i,this.cliffs=s,this.reward=r,this.matrix={},this.generateRewards()}generateRewards(){for(var t=0;t<this.rows;t++)for(var i=0;i<this.columns;i++){var s=t.toString()+"x"+i.toString();this.matrix[s]=-1}for(var r of this.cliffs)this.matrix[r]=-100;this.matrix[this.reward]=100,console.log(this.matrix)}}class QMatrix{constructor(t,i){this.matrix={},this.rows=t,this.columns=i,this.generateMatrix()}generateMatrix(){for(var t=0;t<this.rows;t++)for(var i=0;i<this.columns;i++){var s=t.toString()+"x"+i.toString();this.matrix[s]=[0,0,0,0]}}}class QLearningAgent{constructor(t,i){this.map=t,this.qMatrix=new QMatrix(t.rows,t.columns),this.initialPosition=i,this.state=this.initialPosition,this.nextState=null,this.action=null}getCoordinates(t){var i=t.match(/\d+/g);return[parseInt(i[0]),parseInt(i[1])]}getStateId(t,i){return t.toString()+"x"+i.toString()}getAllowedDirections(t){var i,s,r=[];return[i,s]=this.getCoordinates(t),i>0&&r.push("UP"),s<this.map.columns-1&&r.push("RIGHT"),i<this.map.rows-1&&r.push("DOWN"),s>0&&r.push("LEFT"),r}getNeighborhood(t){var i,s,r=[];return[i,s]=this.getCoordinates(t),i>0&&r.push(this.getStateId(i-1,s)),s<this.map.columns-1&&r.push(this.getStateId(i,s+1)),i<this.map.rows-1&&r.push(this.getStateId(i+1,s)),s>0&&r.push(this.getStateId(i,s-1)),r}directionMapping(t){return"UP"==t?0:"RIGHT"==t?1:"DOWN"==t?2:"LEFT"==t?3:void 0}getNextState(t){var i,s;return[i,s]=this.getCoordinates(this.state),"UP"==t?this.getStateId(i-1,s):"RIGHT"==t?this.getStateId(i,s+1):"DOWN"==t?this.getStateId(i+1,s):"LEFT"==t?this.getStateId(i,s-1):void 0}epsilonGreedy(t){var i=this.getAllowedDirections(this.state);if(Math.random()<t)return i[Math.floor(Math.random()*i.length)];var s=this.getNeighborhood(this.state),r={};for(var a in s){var e=s[a],h=i[a];r[e]=this.qMatrix.matrix[this.state][this.directionMapping(h)]}var o=Math.max.apply(Math,Object.values(r)),n=Object.entries(r).filter(([t,i])=>i==o),g=n[Math.floor(Math.random()*n.length)][0];return i[Object.keys(r).indexOf(g)]}move(t){var i=this.epsilonGreedy(t);this.action=this.directionMapping(i),this.nextState=this.getNextState(i)}findQMax(t){this.getNeighborhood(t);return Math.max(...this.qMatrix.matrix[t])}updateQ(t,i){this.qMatrix.matrix[this.state][this.action]=this.qMatrix.matrix[this.state][this.action]+t*(this.map.matrix[this.nextState]+i*this.findQMax(this.nextState)-this.qMatrix.matrix[this.state][this.action])}}export{RewardMap,QLearningAgent};