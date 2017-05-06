sigfigApp.service('CompanyServices', CompanyServices);

function CompanyServices(){
  this.companyTable = {};

  this.setcomapy = function(key,val){
    this.companyTable[key]=val;
  }
  this.getCompanyIdMap = function(){
    return this.companyTable;
  }
  this.getName = function(id){
    return this.companyTable[id];
  }
}