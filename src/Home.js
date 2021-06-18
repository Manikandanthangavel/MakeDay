import React, { Component } from 'react'

import './App.css';
import './myStyles.css';
import Login from './Login';
import Register from './Register';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import PdfDownload from './PdfDownload';
import UserPage from './UserPage';
import Logo from './Workday.jpg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export class Home extends Component {
    render() {
        return (
         
            <div>
        
<div className="root responsivegrid">

<div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    		 
		
			

			
			<div className="experience-fragment experiencefragment aem-GridColumn aem-GridColumn--default--12">
	<div className="xfpage page basicpage">

    

<div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    		 
		
			

			
			<div className="responsivegrid aem-GridColumn aem-GridColumn--default--12">

<div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    		 
		
			

			
			<div className="header responsivegrid aem-GridColumn aem-GridColumn--default--12">
   
<header className="cmp-header-container">
	<div className="header-container">
		

  <div className="logo-wrapper">
		<a href="https://www.workday.com" target="_parent" rel="noopener norefferer" tabindex="1">
			<img src={Logo} width='300px' height='50px'></img>
		</a>
	</div>

    


		<nav className="cmp-navigation menu" role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement">
  <ul id="navList" className="cmp-navigation__group ">
    

    <li aria-controls="navList01" id="navList01id" className="cmp-navigation__item cmp-navigation__item--level-0 " data-d-order="1" data-m-order="1" aria-haspopup="true">
    
	
	
	

	
	<span aria-expanded="false" role="button" tabindex="0" className="nav-title">
		Why Workday
	</span>
	
	

    
  <ul id="navList01" value="01" className="cmp-navigation__group col-1">
    

    

  <li className="cmp-navigation__item cmp-navigation__item--level-1" data-d-order="0" data-m-order="0">
    
  <ul className="first-col">
    

    <li aria-controls="navList21" id="navList21id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="1" data-m-order="1">
    
	
	
	<a href="https://www.workday.com/en-us/why-workday/why-different.html" title="Why We&#39;re Different" target="_parent" className="cmp-navigation__item-link">
		Why We&#39;re Different
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList22" id="navList22id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="2" data-m-order="2">
    
	
	
	<a href="https://www.workday.com/en-us/why-workday/our-technology/overview.html" title="Our Technology" target="_parent" className="cmp-navigation__item-link">
		Our Technology
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList23" id="navList23id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="3" data-m-order="3">
    
	
	
	<a href="https://www.workday.com/en-us/why-workday/security-trust.html" title="Security and Trust" target="_parent" className="cmp-navigation__item-link">
		Security and Trust
		
		
	</a>

	
	
	
	

    </li>

  

  


  </ul>

  </li>

  


  </ul>
  
</li>

  

  


  
    

    <li aria-controls="navList02" id="navList02id" className="cmp-navigation__item cmp-navigation__item--level-0 " data-d-order="2" data-m-order="2" aria-haspopup="true">
    
	
	
	

	
	<span aria-expanded="false" role="button" tabindex="0" className="nav-title">
		Products
	</span>
	
	

    
  <ul id="navList02" value="02" className="cmp-navigation__group row-4">
    

    

  

  <li className="cmp-navigation__item cmp-navigation__item--level-1" data-d-order="1" data-m-order="1">
    
  <ul className="first-row">
    

    <li aria-controls="navList21" id="navList21id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="1" data-m-order="1">
    
	

	<a href="https://www.workday.com/en-us/products/financial-management/overview.html" title="Financial Management" target="_parent" className="cmp-navigation__item-link">
		Financial Management
		<span>Accounting, payables, receivables, cash and asset management, auditing, analytics, reporting, and more.</span>
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList22" id="navList22id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="2" data-m-order="2">
    
	

	<a href="https://www.workday.com/en-us/products/human-capital-management/overview.html" title="Human Capital Management" target="_parent" className="cmp-navigation__item-link">
		Human Capital Management
		<span>HR, employee experience, service delivery, planning, compensation, and benefits.</span>
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList23" id="navList23id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="3" data-m-order="3">
    

	<a href="https://www.workday.com/en-us/products/enterprise-planning/overview.html" title="Enterprise Planning" target="_parent" className="cmp-navigation__item-link">
		Enterprise Planning
		<span>Financial, workforce, sales, and operational planning, as well as  analytics for the entire enterprise.</span>
		
	</a>

	
	
	
	

    </li>

  

  


  </ul>

  </li>


  
    

    

  

  <li className="cmp-navigation__item cmp-navigation__item--level-1" data-d-order="2" data-m-order="2">
    
  <ul className="second-row">
    

    <li aria-controls="navList21" id="navList21id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="1" data-m-order="1">
    
	
	
	<a href="https://www.workday.com/en-us/products/spend-management/overview.html" title="Spend Management" target="_parent" className="cmp-navigation__item-link">
		Spend Management
		<span>Strategic sourcing, procure-to-pay, inventory management, and expenses.</span>
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList22" id="navList22id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="2" data-m-order="2">
    
	
	
	<a href="https://www.workday.com/en-us/products/talent-management/overview.html" title="Talent Management" target="_parent" className="cmp-navigation__item-link">
		Talent Management
		<span>Talent acquisition, learning, and performance optimization.</span>
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList23" id="navList23id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="3" data-m-order="3">
    

	<a href="https://www.workday.com/en-us/products/payroll-workforce-management/overview.html" title="Payroll and Workforce Management" target="_parent" className="cmp-navigation__item-link">
		Payroll and Workforce Management
		<span>Payroll, time and attendance, and absence management.</span>
		
	</a>

	
	
	
	

    </li>

  

  


  </ul>

  </li>


  
    

    

  

  <li className="cmp-navigation__item cmp-navigation__item--level-1" data-d-order="3" data-m-order="3">
    
  <ul className="third-row">
    

    <li aria-controls="navList21" id="navList21id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="1" data-m-order="1">
    
	
	
	<a href="https://www.workday.com/en-us/products/analytics-reporting/overview.html" title="Analytics and Reporting" target="_parent" className="cmp-navigation__item-link">
		Analytics and Reporting
		<span>Financial, workforce, and operational  analytics; benchmarking; and data management.</span>
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList22" id="navList22id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="2" data-m-order="2">
    
	
	
	<a href="https://www.workday.com/en-us/products/student/overview.html" title="Student" target="_parent" className="cmp-navigation__item-link">
		Student
		<span>Admissions, financial aid, student records, advising, and more.</span>
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList23" id="navList23id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="3" data-m-order="3">
    
	

	<a href="https://www.workday.com/en-us/products/professional-services-automation/overview.html" title="Professional Services Automation" target="_parent" className="cmp-navigation__item-link">
		Professional Services Automation
		<span>Project and resource management, billing, time tracking, expenses, and more.</span>
		
	</a>

	
	
	
	

    </li>

  

  


  </ul>

  </li>


  
    

    

  

  <li className="cmp-navigation__item cmp-navigation__item--level-1" data-d-order="4" data-m-order="4">
    
  <ul className="forth-row">
    

    <li aria-controls="navList20" id="navList20id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="0" data-m-order="0">
    
	

	<a href="https://www.workday.com/en-us/products/platform-product-extensions/overview.html" title="Platform and Product Extensions" target="_parent" className="cmp-navigation__item-link">
		Platform and Product Extensions
		<span>Solutions for extensibility, including app development and integrations.</span>
		
	</a>

	
	
	
	

    </li>

  

  


  </ul>

  </li>


  
    

    <li aria-controls="navList15" id="navList15id" className="cmp-navigation__item cmp-navigation__item--level-1 highlight" data-d-order="5" data-m-order="5">
    
	<hr/>
	
	

	
	
	
	

    
  <ul id="navList15" value="15" className="cmp-navigation__group ">
    

    <li aria-controls="navList20" id="navList20id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="0" data-m-order="0">
    

	<a href="https://www.workday.com/en-us/products/suite.html" title="About the Suite" target="_parent" className="cmp-navigation__item-link">
		About the Suite
		<span>The only true cloud system for finance, HR, planning, analytics, and so much more.</span>
		
	</a>

	
	
	
	

    </li>

  

  


  </ul>
  
</li>

  

  


  </ul>
  
</li>

  

  


  
    

    <li aria-controls="navList03" id="navList03id" className="cmp-navigation__item cmp-navigation__item--level-0 " data-d-order="3" data-m-order="3" aria-haspopup="true">
    
	
	
	

	
	<span aria-expanded="false" role="button" tabindex="0" className="nav-title">
		Solutions
		<span className="l2-arrow-down-icon">
	
		</span>
	</span>
	
	

    
  <ul id="navList03" value="03" className="cmp-navigation__group col-2">
    

    

  <li className="cmp-navigation__item cmp-navigation__item--level-1" data-d-order="1" data-m-order="1">
    
  <ul className="first-col">
    

    <li aria-controls="navList20" id="navList20id" className="cmp-navigation__item cmp-navigation__item--level-2 group" data-d-order="0" data-m-order="0">
    
	
	
	

	
	<span aria-expanded="false" role="button" tabindex="0" className="nav-title">
		By Industry
		<span className="l2-arrow-down-icon">
		
		</span>
	</span>
	
	

    
  <ul id="navList20" value="20" className="cmp-navigation__group ">
    

    <li aria-controls="navList31" id="navList31id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="1">
    
	
	
	<a href="https://www.workday.com/en-us/solutions/industries/communications.html" title="Communications" target="_parent" className="cmp-navigation__item-link">
		Communications
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList32" id="navList32id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="2">
    
	
	
	<a href="https://www.workday.com/en-us/solutions/industries/education.html" title="Education" target="_parent" className="cmp-navigation__item-link">
		Education
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList33" id="navList33id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="3">
    
	
	
	<a href="https://www.workday.com/en-us/solutions/industries/energy-and-resources.html" title="Energy and Resources" target="_parent" className="cmp-navigation__item-link">
		Energy and Resources
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList34" id="navList34id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="4">
    
	
	
	<a href="https://www.workday.com/en-us/solutions/industries/financial-services.html" title="Financial Services" target="_parent" className="cmp-navigation__item-link">
		Financial Services
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList35" id="navList35id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="5">
    
	
	
	<a href="https://www.workday.com/en-us/solutions/industries/healthcare.html" title="Healthcare" target="_parent" className="cmp-navigation__item-link">
		Healthcare
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList36" id="navList36id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="6">
    
	
	
	<a href="https://www.workday.com/en-us/solutions/industries/hospitality.html" title="Hospitality" target="_parent" className="cmp-navigation__item-link">
		Hospitality
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList37" id="navList37id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="7">
    
	
	
	<a href="https://www.workday.com/en-us/solutions/industries/life-sciences.html" title="Life Sciences" target="_parent" className="cmp-navigation__item-link">
		Life Sciences
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList38" id="navList38id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="8">
    
	
	
	<a href="https://www.workday.com/en-us/solutions/industries/manufacturing.html" title="Manufacturing" target="_parent" className="cmp-navigation__item-link">
		Manufacturing
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList39" id="navList39id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="9">
    
	
	
	<a href="https://www.workday.com/en-us/solutions/industries/media-and-entertainment.html" title="Media and Entertainment" target="_parent" className="cmp-navigation__item-link">
		Media and Entertainment
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList310" id="navList310id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="10">
    
	
	
	<a href="https://www.workday.com/en-us/solutions/industries/nonprofit.html" title="Nonprofit" target="_parent" className="cmp-navigation__item-link">
		Nonprofit
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList311" id="navList311id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="11">
    
	
	
	<a href="https://www.workday.com/en-us/solutions/industries/professional-and-business-services.html" title="Professional and Business Services" target="_parent" className="cmp-navigation__item-link">
		Professional and Business Services
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList312" id="navList312id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="12">
    
	
	
	<a href="https://www.workday.com/en-us/solutions/industries/public-sector.html" title="Public Sector" target="_parent" className="cmp-navigation__item-link">
		Public Sector
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList313" id="navList313id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="13">
    
	
	
	<a href="https://www.workday.com/en-us/solutions/industries/retail.html" title="Retail" target="_parent" className="cmp-navigation__item-link">
		Retail
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList314" id="navList314id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="14">
    
	
	
	<a href="https://www.workday.com/en-us/solutions/industries/technology.html" title="Technology" target="_parent" className="cmp-navigation__item-link">
		Technology
		
		
	</a>

	
	
	
	

    </li>

  

  


  </ul>
  
</li>

  

  


  </ul>

  </li>

  


  
    

    

  <li className="cmp-navigation__item cmp-navigation__item--level-1" data-d-order="2">
    
  <ul className="second-col">
    

    <li aria-controls="navList21" id="navList21id" className="cmp-navigation__item cmp-navigation__item--level-2 group" data-d-order="1">
    
	
	
	

	
	<span aria-expanded="false" role="button" tabindex="0" className="nav-title">
		By Need
		<span className="l2-arrow-down-icon">
		
		</span>
	</span>
	
	

    
  <ul id="navList21" value="21" className="cmp-navigation__group ">
    

    <li aria-controls="navList31" id="navList31id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="1">
    
	
	
	<a href="https://www.workday.com/en-us/solutions/need/covid-19/overview.html" title="Navigating COVID-19" target="_parent" className="cmp-navigation__item-link">
		Navigating COVID-19
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList32" id="navList32id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="2">
    
	
	
	<a href="https://www.workday.com/en-us/solutions/role/enterprise-hr/diversity-inclusion-belonging-solutions.html" title="Belonging and Diversity" target="_parent" className="cmp-navigation__item-link">
		Belonging and Diversity
		
		
	</a>

	
	
	
	

    </li>

  

  


  </ul>
  
</li>

  

  


  
    

    <li aria-controls="navList22" id="navList22id" className="cmp-navigation__item cmp-navigation__item--level-2 group" data-d-order="2">
    
	
	
	

	
	<span aria-expanded="false" role="button" tabindex="0" className="nav-title">
		By Organization Size
		<span className="l2-arrow-down-icon">
		
		</span>
	</span>
	
	

    
  <ul id="navList22" value="22" className="cmp-navigation__group ">
    

    <li aria-controls="navList31" id="navList31id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="1">
    
	
	
	<a href="https://www.workday.com/en-us/solutions/organization-size/medium-enterprise/overview.html" title="Medium Enterprise" target="_parent" className="cmp-navigation__item-link">
		Medium Enterprise
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList32" id="navList32id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="2">
    
	
	
	<a href="https://www.workday.com/en-us/solutions/organization-size/large-enterprise/overview.html" title="Large Enterprise" target="_parent" className="cmp-navigation__item-link">
		Large Enterprise
		
		
	</a>

	
	
	
	

    </li>

  

  


  </ul>
  
</li>

  

  


  
    

    <li aria-controls="navList23" id="navList23id" className="cmp-navigation__item cmp-navigation__item--level-2 group" data-d-order="3">
    
	
	
	

	
	<span aria-expanded="false" role="button" tabindex="0" className="nav-title">
		By Role
		<span className="l2-arrow-down-icon">
		
		</span>
	</span>
	
	

    
  <ul id="navList23" value="23" className="cmp-navigation__group ">
    

    <li aria-controls="navList31" id="navList31id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="1">
    
	
	
	<a href="https://www.workday.com/en-us/solutions/role/enterprise-finance/overview.html" title="Finance" target="_parent" className="cmp-navigation__item-link">
		Finance
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList32" id="navList32id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="2">
    
	
	
	<a href="https://www.workday.com/en-us/solutions/role/enterprise-hr/overview.html" title="HR" target="_parent" className="cmp-navigation__item-link">
		HR
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList33" id="navList33id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="3">
    
	
	
	<a href="https://www.workday.com/en-us/solutions/role/enterprise-technology/overview.html" title="IT" target="_parent" className="cmp-navigation__item-link">
		IT
		
		
	</a>

	
	
	
	

    </li>

  

  


  </ul>
  
</li>

  

  


  </ul>

  </li>

  


  </ul>
  
</li>

  

  


  
    

    <li aria-controls="navList04" id="navList04id" className="cmp-navigation__item cmp-navigation__item--level-0 " data-d-order="4" data-m-order="4" aria-haspopup="true">
    
	
	
	

	
	<span aria-expanded="false" role="button" tabindex="0" className="nav-title">
		Customer Experience
		<span className="l2-arrow-down-icon">
		
		</span>
	</span>
	
	

    
  <ul id="navList04" value="04" className="cmp-navigation__group col-1">
    

    

  <li className="cmp-navigation__item cmp-navigation__item--level-1" data-d-order="1" data-m-order="0">
    
  <ul className="first-col">
    

    <li aria-controls="navList21" id="navList21id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="1" data-m-order="1">
    
	
	
	<a href="https://www.workday.com/en-us/customer-experience/overview.html" title="Overview" target="_parent" className="cmp-navigation__item-link">
		Overview
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList22" id="navList22id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="2" data-m-order="2">
    
	
	
	<a href="https://www.workday.com/en-us/customer-experience/customers.html" title="Customers" target="_parent" className="cmp-navigation__item-link">
		Customers
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList23" id="navList23id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="3" data-m-order="3">
    
	
	
	<a href="https://www.workday.com/en-us/customer-experience/deployment.html" title="Deployment" target="_parent" className="cmp-navigation__item-link">
		Deployment
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList24" id="navList24id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="4" data-m-order="4">
    
	
	
	<a href="https://www.workday.com/en-us/customer-experience/education-training.html" title="Education and Training" target="_parent" className="cmp-navigation__item-link">
		Education and Training
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList25" id="navList25id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="5" data-m-order="5">
    
	
	
	<a href="https://www.workday.com/en-us/customer-experience/community.html" title="Community" target="_parent" className="cmp-navigation__item-link">
		Community
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList26" id="navList26id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="6" data-m-order="6">
    
	
	
	<a href="https://www.workday.com/en-us/customer-experience/support.html" title="Support" target="_parent" className="cmp-navigation__item-link">
		Support
		
		
	</a>

	
	
	
	

    </li>

  

  


  </ul>

  </li>

  


  </ul>
  
</li>

  

  


  
    

    <li aria-controls="navList05" id="navList05id" className="cmp-navigation__item cmp-navigation__item--level-0 " data-d-order="5" data-m-order="5" aria-haspopup="true">
    
	
	
	

	
	<span aria-expanded="false" role="button" tabindex="0" className="nav-title">
		Resources
		<span className="l2-arrow-down-icon">
		
		</span>
	</span>
	
	

    
  <ul id="navList05" value="05" className="cmp-navigation__group col-1">
    

    

  <li className="cmp-navigation__item cmp-navigation__item--level-1" data-d-order="0" data-m-order="0">
    
  <ul className="first-col">
    

    <li aria-controls="navList21" id="navList21id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="1" data-m-order="1">
    
	
	
	<a href="https://www.workday.com/en-us/resources.html" title="All Resources" target="_parent" className="cmp-navigation__item-link">
		All Resources
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList22" id="navList22id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="2" data-m-order="6">
    
	
	
	<a href="https://www.workday.com/en-us/resources.html?topic.name=Analytics" title="Analytics" target="_parent" className="cmp-navigation__item-link">
		Analytics
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList23" id="navList23id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="3" data-m-order="2">
    
	
	
	<a href="https://www.workday.com/en-us/resources.html?topic.name=Finance" title="Finance" target="_parent" className="cmp-navigation__item-link">
		Finance
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList24" id="navList24id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="4" data-m-order="3">
    
	
	
	<a href="https://www.workday.com/en-us/resources.html?topic.name=Human+Resource+Management" title="Human Resource Management" target="_parent" className="cmp-navigation__item-link">
		Human Resource Management
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList25" id="navList25id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="5" data-m-order="5">
    
	
	
	<a href="https://www.workday.com/en-us/resources.html?topic.name=Payroll" title="Payroll" target="_parent" className="cmp-navigation__item-link">
		Payroll
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList26" id="navList26id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="6" data-m-order="4">
    
	
	
	<a href="https://www.workday.com/en-us/resources.html?topic.name=Planning" title="Planning" target="_parent" className="cmp-navigation__item-link">
		Planning
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList27" id="navList27id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="7">
    
	
	
	<a href="https://www.workday.com/en-us/resources.html?topic.name=Spend+Management" title="Spend Management" target="_parent" className="cmp-navigation__item-link">
		Spend Management
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList28" id="navList28id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="8" data-m-order="7">
    
	
	
	<a href="https://www.workday.com/en-us/resources.html?topic.name=Suite" title="Suite" target="_parent" className="cmp-navigation__item-link">
		Suite
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList29" id="navList29id" className="cmp-navigation__item cmp-navigation__item--level-2 " data-d-order="9" data-m-order="8">
    
	
	
	<a href="https://www.workday.com/en-us/resources.html?topic.name=Technology" title="Technology" target="_parent" className="cmp-navigation__item-link">
		Technology
		
		
	</a>

	
	
	
	

    </li>

  

  


  </ul>

  </li>

  


  </ul>
  
</li>

  

  


  
    

    <li aria-controls="navList06" id="navList06id" className="cmp-navigation__item cmp-navigation__item--level-0 " data-d-order="6" data-m-order="6" aria-haspopup="true">
    
	
	
	

	
	<span aria-expanded="false" role="button" tabindex="0" className="nav-title">
		Company
		<span className="l2-arrow-down-icon">
		
		</span>
	</span>
	
	

    
  <ul id="navList06" value="06" className="cmp-navigation__group col-2">
    

    

  <li className="cmp-navigation__item cmp-navigation__item--level-1" data-d-order="1" data-m-order="1">
    
  <ul className="first-col">
    

    <li aria-controls="navList21" id="navList21id" className="cmp-navigation__item cmp-navigation__item--level-2 group" data-d-order="1" data-m-order="1">
    
	
	
	

	
	<span aria-expanded="false" role="button" tabindex="0" className="nav-title">
		About Workday
		<span className="l2-arrow-down-icon">
		
		</span>
	</span>
	
	

    
  <ul id="navList21" value="21" className="cmp-navigation__group ">
    

    <li aria-controls="navList31" id="navList31id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="1" data-m-order="1">
    
	
	
	<a href="https://www.workday.com/en-us/company/about-workday/our-story-leadership.html" title="Our Story and Leadership" target="_parent" className="cmp-navigation__item-link">
		Our Story and Leadership
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList32" id="navList32id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="2" data-m-order="2">
    
	
	
	<a href="https://www.workday.com/en-us/company/about-workday/core-values.html" title="Our Values" target="_parent" className="cmp-navigation__item-link">
		Our Values
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList33" id="navList33id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="3" data-m-order="3">
    
	
	
	<a href="https://www.workday.com/en-us/company/about-workday/belonging-and-diversity.html" title="Belonging and Diversity" target="_parent" className="cmp-navigation__item-link">
		Belonging and Diversity
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList34" id="navList34id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="4" data-m-order="4">
    
	
	
	<a href="https://www.workday.com/en-us/company/about-workday/investor-relations/overview.html" title="Investor Relations" target="_parent" className="cmp-navigation__item-link">
		Investor Relations
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList35" id="navList35id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="5">
    
	
	
	<a href="https://www.workday.com/en-us/company/about-workday/public-policy.html" title="Public Policy" target="_parent" className="cmp-navigation__item-link">
		Public Policy
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList36" id="navList36id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="6">
    
	
	
	<a href="https://www.workday.com/en-us/company/about-workday/sponsorships.html" title="Sponsorships" target="_parent" className="cmp-navigation__item-link">
		Sponsorships
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList37" id="navList37id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="7" data-m-order="5">
    
	
	
	<a href="https://www.workday.com/en-us/company/about-workday/contact-us.html" title="Contact Us" target="_parent" className="cmp-navigation__item-link">
		Contact Us
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList38" id="navList38id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="8" data-m-order="6">
    
	
	
	<a href="https://ventures.workday.com/" title="Workday Ventures" target="_blank" className="cmp-navigation__item-link">
		Workday Ventures
		
	</a>

	
	
	
	

    </li>

  

  


  </ul>
  
</li>

  

  


  
    

    <li aria-controls="navList22" id="navList22id" className="cmp-navigation__item cmp-navigation__item--level-2 group" data-d-order="2" data-m-order="2">
    
	
	
	

	
	<span aria-expanded="false" role="button" tabindex="0" className="nav-title">
		Corporate Responsibility
		<span className="l2-arrow-down-icon">
		
		</span>
	</span>
	
	

    
  <ul id="navList22" value="22" className="cmp-navigation__group ">
    

    <li aria-controls="navList31" id="navList31id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="1" data-m-order="1">
    
	
	
	<a href="https://www.workday.com/en-us/company/corporate-responsibility/overview.html" title="Overview" target="_parent" className="cmp-navigation__item-link">
		Overview
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList32" id="navList32id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="2" data-m-order="2">
    
	
	
	<a href="https://www.workday.com/en-us/company/corporate-responsibility/workday-foundation.html" title="Foundation" target="_parent" className="cmp-navigation__item-link">
		Foundation
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList33" id="navList33id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="3" data-m-order="3">
    
	
	
	<a href="https://www.workday.com/en-us/company/corporate-responsibility/sustainability.html" title="Sustainability" target="_parent" className="cmp-navigation__item-link">
		Sustainability
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList34" id="navList34id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="4" data-m-order="4">
    
	
	
	<a href="https://www.workday.com/en-us/company/corporate-responsibility/workforce-development/overview.html" title="Workforce Development " target="_parent" className="cmp-navigation__item-link">
		Workforce Development 
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList35" id="navList35id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="5" data-m-order="5">
    
	
	
	<a href="https://globalimpact.workday.com/" title="Global Impact" target="_blank" className="cmp-navigation__item-link">
		Global Impact
	
	</a>

	
	
	
	

    </li>

  

  


  </ul>
  
</li>

  

  


  </ul>

  </li>

  


  
    

    

  <li className="cmp-navigation__item cmp-navigation__item--level-1" data-d-order="2" data-m-order="2">
    
  <ul className="second-col">
    

    <li aria-controls="navList21" id="navList21id" className="cmp-navigation__item cmp-navigation__item--level-2 group" data-d-order="1" data-m-order="1">
    
	
	
	

	
	<span aria-expanded="false" role="button" tabindex="0" className="nav-title">
		Latest
		<span className="l2-arrow-down-icon">
	
		</span>
	</span>
	
	

    
  <ul id="navList21" value="21" className="cmp-navigation__group ">
    

    <li aria-controls="navList31" id="navList31id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="1" data-m-order="1">
    
	
	
	<a href="https://www.workday.com/en-us/company/latest/events-webinars.html" title="Events and Webinars" target="_parent" className="cmp-navigation__item-link">
		Events and Webinars
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList32" id="navList32id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="2" data-m-order="2">
    
	
	
	<a href="https://www.workday.com/en-us/company/latest/newsroom.html" title="Newsroom" target="_parent" className="cmp-navigation__item-link">
		Newsroom
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList33" id="navList33id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="3" data-m-order="3">
    
	
	
	<a href="https://blog.workday.com/" title="Blog" target="_blank" className="cmp-navigation__item-link">
		Blog
		

	</a>

	
	
	
	

    </li>

  

  


  </ul>
  
</li>

  

  


  
    

    <li aria-controls="navList22" id="navList22id" className="cmp-navigation__item cmp-navigation__item--level-2 group" data-d-order="2" data-m-order="2">
    
	
	
	

	
	<span aria-expanded="false" role="button" tabindex="0" className="nav-title">
		Workday Partners
		<span className="l2-arrow-down-icon">
		
		</span>
	</span>
	
	

    
  <ul id="navList22" value="22" className="cmp-navigation__group ">
    

    <li aria-controls="navList31" id="navList31id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="1">
    
	
	
	<a href="https://www.workday.com/en-us/company/partners/advisory-partners.html" title="Advisory Partners" target="_parent" className="cmp-navigation__item-link">
		Advisory Partners
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList32" id="navList32id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="2" data-m-order="2">
    
	
	
	<a href="https://www.workday.com/en-us/company/partners/services-partners.html" title="Services Partners" target="_parent" className="cmp-navigation__item-link">
		Services Partners
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList33" id="navList33id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="3" data-m-order="1">
    
	
	
	<a href="https://www.workday.com/en-us/company/partners/software-partners.html" title="Software Partners" target="_parent" className="cmp-navigation__item-link">
		Software Partners
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList34" id="navList34id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="4" data-m-order="3">
    
	
	
	<a href="https://www.workday.com/en-us/company/partners/global-payroll-partners.html" title="Global Payroll Partners" target="_parent" className="cmp-navigation__item-link">
		Global Payroll Partners
		
		
	</a>

	
	
	
	

    </li>

  

  


  </ul>
  
</li>

  

  


  
    

    <li aria-controls="navList23" id="navList23id" className="cmp-navigation__item cmp-navigation__item--level-2 group" data-d-order="3" data-m-order="3">
    
	
	
	

	
	<span aria-expanded="false" role="button" tabindex="0" className="nav-title">
		Careers
		<span className="l2-arrow-down-icon">
		
		</span>
	</span>
	
	

    
  <ul id="navList23" value="23" className="cmp-navigation__group ">
    

    <li aria-controls="navList31" id="navList31id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="1" data-m-order="1">
    
	
	
	<a href="https://www.workday.com/en-us/company/careers/overview.html" title="Overview" target="_parent" className="cmp-navigation__item-link">
		Overview
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList32" id="navList32id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="2" data-m-order="2">
    
	
	
	<a href="https://www.workday.com/en-us/company/careers/benefits.html" title="Benefits" target="_parent" className="cmp-navigation__item-link">
		Benefits
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList33" id="navList33id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="3" data-m-order="3">
    
	
	
	<a href="https://www.workday.com/en-us/company/careers/university-recruiting.html" title="University Recruiting" target="_parent" className="cmp-navigation__item-link">
		University Recruiting
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList34" id="navList34id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="4" data-m-order="4">
    
	
	
	<a href="https://www.workday.com/en-us/company/careers/teams.html" title="Teams" target="_parent" className="cmp-navigation__item-link">
		Teams
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList35" id="navList35id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="5" data-m-order="5">
    
	
	
	<a href="https://www.workday.com/en-us/company/careers/global-workplace.html" title="Global Workplace" target="_parent" className="cmp-navigation__item-link">
		Global Workplace
		
		
	</a>

	
	
	
	

    </li>

  

  


  
    

    <li aria-controls="navList36" id="navList36id" className="cmp-navigation__item cmp-navigation__item--level-3 " data-d-order="6" data-m-order="6">
    
	
	
	<a href="https://workday.wd5.myworkdayjobs.com/Workday" title="Job Search" target="_blank" className="cmp-navigation__item-link">
		Job Search

	</a>

	
	
	
	

    </li>

  

  


  </ul>
  
</li>

  

  


  </ul>

  </li>

  


  </ul>
  
</li>

  

  


  </ul>
</nav>

    

    


		<div className="menu-options">
			<div className="cmp-getstarted">
	<a href="/en-us/pages/get-started.html#get_started" title="Get Started" className="wd-btn btn btn--bg__blue btn--size__md">
  <NavLink to='/signin' className="cmp-button__text">Sign In</NavLink>
	</a>
</div>

<div className="cmp-getstarted">
	<a href="/en-us/pages/get-started.html#get_started" title="Get Started" className="wd-btn btn btn--bg__blue btn--size__md">
		<NavLink to='/register' className="cmp-button__text">Register</NavLink>
	</a>
</div>
    

		</div>
	</div>
</header>
    </div></div></div></div></div></div></div></div>
    
    <div>
     
      </div>
     
    
            
            </div>
         
        )
    }
}

export default Home;
