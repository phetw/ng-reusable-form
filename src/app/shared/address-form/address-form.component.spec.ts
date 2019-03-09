import { async, ComponentFixture, TestBed } from "@angular/core/testing"

import { AddressFormComponent } from "./address-form.component"
import { ReactiveFormsModule, FormGroup, FormBuilder } from "@angular/forms"

describe("AddressFormComponent", () => {
  let component: AddressFormComponent
  let fixture: ComponentFixture<AddressFormComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [AddressFormComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressFormComponent)
    component = fixture.componentInstance
    component.parentForm = new FormBuilder().group({})

    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })

  it("should create a form group", () => {
    expect(
      component.createAddressFormInstance() instanceof FormGroup
    ).toBeTruthy()
  })

  it("should call create address form group on init", () => {
    const spy = spyOn(component, "createAddressFormInstance")
    component.ngOnInit()
    expect(spy).toHaveBeenCalled()
  })

  it("should create address form group on init", () => {
    const actual = component.createAddressFormInstance()
    component.ngOnInit()
    expect(component.addressForm.value).toEqual(actual.value)
  })

  it("should attach address form group to parent form group", () => {
    component.ngOnInit()
    expect(component.parentForm.value.addressForm).toBeTruthy()
  })
})
