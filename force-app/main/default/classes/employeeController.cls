public with sharing class employeeController {
    @AuraEnabled(cacheable=true)
    public static List<sObject> searchEmployee(String searchParam){
        String likeParam = '%' +searchParam+'%';
        String Query = '';
       
        if(searchParam != null){
           Query  = 'Select Name, Employee__r.Name, Mentor__r.Name From User_Functional_Role__c Where Employee__r.Name Like :likeParam LIMIT 50 ';
        }else{
           Query  = 'Select Name, Employee__r.Name, Mentor__r.Name From User_Functional_Role__c LIMIT 50 '; 
        }
        
        List<SObject> sObjectList = Database.query(Query);
        return sObjectList;
    }

}