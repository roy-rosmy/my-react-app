import React, { FC } from 'react';
import { FiltersWrapper } from './filters.styled';

interface FiltersProps {}

const Filters: FC<FiltersProps> = () => (
 <FiltersWrapper data-testid="Filters">
   <form type='submit' id='filters_form'>
        <div className='row justify-content-center align-items-center'>
            
            <div className='row'>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xsm-2 col-6">
                    <div className="mb-2 mt-2" id='year_id'>
                       
                    </div>
                </div>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xsm-2 col-6">    
                    <div className="mb-2 mt-2">
                        <label for="month_select" className="form-label">Month</label>
                        <select id='month_select' className="form-select" aria-label="Month">
                            <option>Please wait</option>
                        </select>   
                    </div>
                </div>
            </div>
           
            <div className='row'>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xsm-2 col-6">
                    <div className="mb-2 mt-2">
                        <label for="site_select" className="form-label">Site</label>
                        <select id='site_select' className="form-select" aria-label="Site">
                            <option>Please wait</option>
                        </select>
                    </div>
                </div>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xsm-2 col-6">
                    <div className="mb-2 mt-2">
                        <label for="dep_select" className="form-label">Department</label>
                        <select id='dep_select' className="form-select" aria-label="Department">
                        </select>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xsm-2 col-6">
                    <div className="mb-2 mt-2">
                        <label for="holiday_select" className="form-label">Holiday Type</label>
                        <select id='holiday_select' name="holtypes[]" className="form-select w-100" aria-label="Holiday Type" multiple>
                        </select>
                    </div>
                </div>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xsm-2 col-6">
                    <div className="mb-2 mt-2">
                        <label for="status_select" className="form-label">Status</label>
                        <select id='status_select' name="status[]" className="form-select w-100 w-xxl" aria-label="Status" multiple>
                        </select>
                    </div>
                </div>
            </div>    
            <div className='row'>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xsm-2 col-12">
                    <div className="mb-2 mt-2">
                        <label for="search" className="form-label">Name</label>
                        <input type="text" className="form-control" id="search" aria-label='name search' placeholder='Search...'/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xsm-2 col-12">
                    <div className="mb-2 mt-3">
                        <button className="btn form-control reset_button">Reset</button>
                    </div>
                </div>
            </div>

            </div>
            </div>
        </form>
 </FiltersWrapper>
);

export default Filters;
