public with sharing class employeeController {
    public employeeController() {
    }
    @AuraEnabled(cacheable=true)
    public static List<sObject> searchEmployee(String searchParam){
        String likeParam = '%' +searchParam+'%';
        String Query = '';
       
        if(searchParam != null){
           Query  = 'Select Name, Employee__c, Mentor__c From User_Functional_Role__c Where Name Like :likeParam LIMIT 50 ';
        }else{
           Query  = 'Select Name, Employee__c, Mentor__c From User_Functional_Role__c LIMIT 50 '; 
        }
        
        List<SObject> sObjectList = Database.query(Query);
        return sObjectList;
    }

}
