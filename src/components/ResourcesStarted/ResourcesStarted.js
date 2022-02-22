import React from "react";
import "./ResourcesStarted.css";
import ResourcesStartedCard from "./ResourcesStartedCard";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import resourceCardData from "../SampleData/ResourcesStarted";

function ResourcesStarted() {
  return (
    <div className="ResourcesStarted_page">
      <div className="container-fluid ResourcesStarted_container">
        <div className="row resources_heading_container">
          <h1 className="resources_heading">Resources for getting started</h1>
        </div>
        <div className="row" style={{marginBottom:'5%'}}>
            <div className="col-1"></div>
            <div className="col-10">
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-10">
                    <div className="row">
                    {resourceCardData.map((e)=>
                    <ResourcesStartedCard image={e.image}/>
                    )}
                    </div>
                  </div>
                  <div className="col-1"></div>
           
          </div>
            </div>
            <div className="col-1">
            <KeyboardDoubleArrowUpIcon className="go_to_top_btn"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ResourcesStarted;
