//剩余生命小于setTick 且 空时 suicide
Creep.prototype.tickSuicide = function(setTick) {
  if(this.ticksToLive<setTick&&this.store.getUsedCapacity()==0){
    this.suicide();
    console.log(this.memory.role+' suicide')
  }
};

Creep.prototype.tickRecycle = function(setTick) {
  if(this.ticksToLive<setTick&&this.store.getUsedCapacity()==0){
    if(Game.spawns['SpawnW2S2'].recycleCreep(this)==ERR_NOT_IN_RANGE){
        this.moveTo(Game.spawns['SpawnW2S2'])
    }
    this.say('recycle')
  }
};

Creep.prototype.tickRenew = function(setTick){
  if(this.ticksToLive<setTick){
    this.memory.renew=true;
  }
  if(this.ticksToLive>1400){
    this.memory.renew=false;
  }
  if(this.memory.renew){
    if(Game.spawns['Spawn'+this.memory.giveroom].renewCreep(this)==ERR_NOT_IN_RANGE){
        this.moveTo(Game.spawns['Spawn'+this.memory.giveroom])
    }
    this.say('renew')
  }
}

Creep.prototype.tickRenew2 = function(setTick,spawnName){
  if(this.ticksToLive<setTick){
    this.memory.renew=true;
  }
  if(this.ticksToLive>1400){
    this.memory.renew=false;
  }
  if(this.memory.renew){
    if(Game.spawns[spawnName].renewCreep(this)==ERR_NOT_IN_RANGE){
        this.moveTo(Game.spawns[spawnName])
    }
    this.say(this.ticksToLive)
  }
}
