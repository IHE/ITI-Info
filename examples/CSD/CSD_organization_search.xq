import module namespace csd = "urn:ihe:iti:csd:2013" at "csd_base_library.xq";
declare variable $careServicesRequest as item() external;

(: 
   The query will be executed against the root element of the CSD document.
    
   The dynamic context of this query has $careServicesRequest set to contain any of the search 
   and limit paramaters as sent by the Service Finder
:) 


<CSD xmlns:csd="urn:ihe:iti:csd:2013"  >
  <organizationDirectory>
    {
      let $orgs0 := csd:filter_by_primary_id(/CSD/organizationDirectory/*,$careServicesRequest/id)
         
      let $orgs1 := csd:filter_by_primary_name($orgs0,$careServicesRequest/primaryName)
         
      let $orgs2 := csd:filter_by_name($orgs1,$careServicesRequest/name)
    
      let $orgs3 := csd:filter_by_coded_type($orgs2,$careServicesRequest/codedType) 
   
      let $orgs4 := csd:filter_by_address($orgs3, $careServicesRequest/address/addressLine) 
      
      let $orgs5 :=  csd:filter_by_record($orgs4,$careServicesRequest/record)      

      return csd:limit_items($orgs5,$careServicesRequest/start,$careServicesRequest/max)         

    }     
  </organizationDirectory>
  <serviceDirectory/>
  <facilityDirectory/>
  <providerDirectory/>
</CSD>
    