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
  <facilityDirectory>
    {
      let $facs0 := csd:filter_by_primary_id(/CSD/organizationDirectory/*,$careServicesRequest/id)
         
      let $facs1 := csd:filter_by_primary_name($facs0,$careServicesRequest/primaryName)
         
      let $facs2 := csd:filter_by_name($facs1,$careServicesRequest/name)
    
      let $facs3 := csd:filter_by_coded_type($facs2,$careServicesRequest/codedType) 
   
      let $facs4 := csd:filter_by_address($facs3, $careServicesRequest/address/addressLine) 

      let $facs5 :=  csd:filter_by_record($fac4,$careServicesRequest/record)      

      return csd:limit_items($facs5,$careServicesRequest/start,$careServicesRequest/max)         

    }     
  </facilityDirectory>
  <providerDirectory/>
</CSD>
    