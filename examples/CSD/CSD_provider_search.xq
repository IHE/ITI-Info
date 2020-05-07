import module namespace csd = "urn:ihe:iti:csd:2013" at "csd_base_library.xq";
declare variable $careServicesRequest as item() external;

(: 
   The query will be executed against the root element of the CSD document.
    
   The dynamic context of this query has $careServicesRequest set to contain any of the search 
   and limit paramaters as sent by the Service Finder
:) 


<CSD xmlns:csd="urn:ihe:iti:csd:2013"  >
  <organizationDirectory/>
  <serviceDirectory/>
  <facilityDirectory/>
  <providerDirectory>
    {
      let $provs0 := csd:filter_by_primary_id(/CSD/organizationDirectory/*,$careServicesRequest/id)

      let $provs1 := csd:filter_by_other_id($provs0,$careServicesRequest/otherID)
         
      let $provs2 := csd:filter_by_common_name($provs1,$careServicesRequest/commonName)
    
      let $provs3 := csd:filter_by_coded_type($provs2,$careServicesRequest/type) 
   
      let $provs4 := csd:filter_by_address($provs3, $careServicesRequest/address/addressLine) 

      let $provs5 :=  csd:filter_by_record($provs4,$careServicesRequest/record)      

      return csd:limit_items($provs5,$careServicesRequest/start,$careServicesRequest/max)         

    }     
  </providerDirectory>
</CSD>
    