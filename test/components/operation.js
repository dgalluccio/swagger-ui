/* eslint-env mocha */
import React from "react"
import expect, { createSpy } from "expect"
import { shallow } from "enzyme"
import Operation from "components/operation"
import Collapse from "react-collapse"

describe("<Operation/>", function(){
  it("blanket tests", function(){

    let props = {
      operation: {get: ()=>{}},
      getComponent: ()=> "div",
      specSelectors: { security(){} },
      path: "/one",
      method: "get",
      shown: true,
      showOpId: "",
      showOpIdPrefix: "",
      toggleCollapse: createSpy()
    }

    let wrapper = shallow(<Operation {...props}/>)

    expect(wrapper.find(".opblock").length).toEqual(1)
    expect(wrapper.find(".opblock-summary-method").text()).toEqual("GET")
    expect(wrapper.find(".opblock-summary-path").text().trim()).toEqual("/one")
    expect(wrapper.find("[isOpened]").prop("isOpened")).toEqual(true)

    wrapper.find(".opblock-summary").simulate("click")
    expect(props.toggleCollapse).toHaveBeenCalled()
  })
})