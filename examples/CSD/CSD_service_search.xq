import module namespace csd = "urn:ihe:iti:csd:2013" at "csd_base_library.xq";
declare variable $careServicesRequest as item() external;

(: 
   The query will be executed against the root element of the CSD document.
    
   The dynamic context of this query has $careServicesRequest set to contain any of the search 
   and limit paramaters as sent by the Service Finder
:) 


<CSD xmlns:csd="urn:ihe:iti:csd:2013"  >
  <organizationDirectory/>
  <serviceDirectory>
    {
      let $svcs0 := csd:filter_by_primary_id(/CSD/serviceDirectory/*,$careServicesRequest/id)
    
      let $svcs1 := csd:filter_by_coded_type($svcs0,$careServicesRequest/codedType) 

      let $svcs2 :=  csd:filter_by_record($svcs1,$careServicesRequest/record)

      return csd:limit_items($svcs2,$careServicesRequest/start,$careServicesRequest/max)   
    }     
  </serviceDirectory>
  <facilityDirectory/>
  <providerDirectory/>
</CSD>
    