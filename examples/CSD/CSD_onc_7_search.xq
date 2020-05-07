import module namespace csd = "urn:ihe:iti:csd:2013" at "csd_base_library.xq";
declare variable $careServicesRequest as item() external;

(: 
   The query will be executed against the root element of the CSD document.
    
   The dynamic context of this query has $careServicesRequest set to contain any of the search 
   and limit paramaters as sent by the Service Finder
:) 

<CSD xmlns:csd="urn:ihe:iti:csd:2013">
    {
      let $orgs0 := csd:filter_by_primary_id(/CSD/organizationDirectory/*,$careServicesRequest/organization/id)
         
      let $orgs1 := csd:filter_by_primary_name($orgs0,$careServicesRequest/organization/primaryName)
         
      let $orgs2 := csd:filter_by_name($orgs1,$careServicesRequest/organization/name)
    
      let $orgs3 := csd:filter_by_coded_type($orgs2,$careServicesRequest/organization/type) 
   
      let $orgs4 := csd:filter_by_address($orgs3, $careServicesRequest/organization/address/addressLine)     
      
      let $orgs5:= csd:join_parent_organizations($orgs4,/CSD/organizationDirectory)
                   union
                   csd:join_child_organizations($orgs4,/CSD/organizationDirectory)

      let $provs0 := csd:filter_by_primary_id(/CSD/providerDirectory/*,$careServicesRequest/provider/id)

      let $provs1 := csd:filter_by_other_id($provs0,$careServicesRequest/provider/otherID)
         
      let $provs2 := csd:filter_by_common_name($provs1,$careServicesRequest/provider/commonName)
    
      let $provs3 := csd:filter_by_coded_type($provs2,$careServicesRequest/provider/type) 
   
      let $provs4 := csd:filter_by_address($provs3, $careServicesRequest/provider/address/addressLine) 
      
      let $provs5:= csd:filter_by_organizations($provs4,$orgs5)          

      return   (
                <organizationDirectory>{$orgs5}</organizationDirectory> ,
      	        <serviceDirectory/> ,
                <facilityDirectory/> ,
                <providerDirectory>{$provs5}</providerDirectory>  
               )
    }     

</CSD>
    