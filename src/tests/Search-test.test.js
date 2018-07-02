import React from 'react';
import { shallow, mount } from 'enzyme';
import MockAdapter from 'axios-mock-adapter';


import Search from '../components/Layout/Search';

describe("Search component", () =>{
    const wrapper = (shallow (<Search />));
    it('renders without crashing', () => { 
        shallow(<Search />); 
      });
    it("renders business name input", () =>{
        expect(shallow(<Search />).find("#business_name").length).toEqual(1);
        });
    it("renders category input", () =>{
        expect(shallow(<Search />).find("#category").length).toEqual(1);
        });
    it("renders location input", () =>{
        expect(shallow(<Search />).find("#location").length).toEqual(1);
        });
    it("show submit button", () =>{
            const title_1 = <button className="btn btn-secondary" 
            name="submit" 
            id="submit">Search</button>
            expect(wrapper.contains(title_1)).toEqual(true);
        });
});

 // test change on getting input and logs in user
 describe("business_name, location  and category", () =>{
    const wrapper = (shallow (<Search />));
    const mock = new MockAdapter(wrapper.instance().xhr);

    it("should  respond to change event ", () =>{
         wrapper.find("#business_name").simulate("change", {target:{name:"business_name", value:"roko"}});
         expect(wrapper.state("business_name")).toEqual("roko");
     });

    it("should  respond to change event ", () =>{
        wrapper.find("#location").simulate("change", {target:{name:"location", value:"kla"}});
        expect(wrapper.state("location")).toEqual("kla");
    });

    it("should  respond to change event ", () =>{
        wrapper.find("#category").simulate("change", {target:{name:"category", value:"construction"}});
        expect(wrapper.state("category")).toEqual("construction");
    });

    it('search', () => {
        mock.onPost("/businesses?q=${roko}&location=${kla}&category=${cons}").reply(200, {});
		wrapper.find("#submit").simulate('submit', {
            preventDefault: () => {}
		});
    });
 })

 describe("Search component", () =>{
    const wrapper = (mount (<Search />));
    it('It handles submit', async ()=>{
        const searchComponent = wrapper.find(Search)
		let business_name = searchComponent.find('input[name="business_name"]')
		business_name.simulate('change', {target: {name: "business_name",value: 'roko'}});
	
		let category = searchComponent.find('input[name="category"]')
        category.simulate('change', {target: {name: "category",value: 'cons'}});
        
        let location = searchComponent.find('input[name="location"]')
        location.simulate('change', {target: {name: "location",value: 'kla'}});

        const form = searchComponent.find('form')
		await form.simulate('submit',  { preventDefault: ()=>{}})
        
});

})