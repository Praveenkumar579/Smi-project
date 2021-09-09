public with sharing class MentorController {
    public MentorController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<sObject> searchMentor(String searchParam){
        String likeParam = '%' +searchParam+'%';
        String Query = '';
       
        if(searchParam != null){
           Query  = 'Select Name, Mentor__r.Name From SMI_Mentor__c Where Name Like :likeParam LIMIT 50 ';
        }else{
           Query  = 'Select Name, Mentor__r.Name From SMI_Mentor__c LIMIT 50 '; 
        }
        
        List<SObject> sObjectList = Database.query(Query);
        return sObjectList;
}

}