import { Component, OnInit, Input } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms"

import MockCompanyList from "../../core/mock/company-list.mock"

@Component({
  selector: "app-address-form",
  templateUrl: "./address-form.component.html",
  styleUrls: ["./address-form.component.css"],
})
export class AddressFormComponent implements OnInit {
  @Input() parentForm: FormGroup

  addressForm: FormGroup
  company: Array<string> = MockCompanyList

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.addressForm = this.createAddressFormInstance()
    this.addAddressFormToParentForm(this.addressForm)
  }

  createAddressFormInstance(): FormGroup {
    return this._fb.group({
      company: [null, Validators.required],
      street: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      zip: ["", Validators.required],
    })
  }

  addAddressFormToParentForm(addressForm: FormGroup): void {
    this.parentForm.addControl("addressForm", addressForm)
  }
}
