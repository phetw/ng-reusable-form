import { Component, OnInit, Input } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms"

import MockCompanyList from "../../core/mock/company-list.mock"
import { CountryService } from "src/app/core/service/country/country.service"
import { Observable } from "rxjs"
import { ICountry } from "src/app/core/model/country.model"

@Component({
  selector: "app-address-form",
  templateUrl: "./address-form.component.html",
  styleUrls: ["./address-form.component.css"],
})
export class AddressFormComponent implements OnInit {
  @Input() parentForm: FormGroup

  address: FormGroup
  country$: Observable<ICountry[]>
  company: Array<string> = MockCompanyList

  constructor(
    private _fb: FormBuilder,
    private countryService: CountryService
  ) {}

  ngOnInit() {
    this.getCountry()
    this.address = this.createAddressFormInstance()
    this.addAddressFormToParentForm(this.address)
  }

  createAddressFormInstance(): FormGroup {
    return this._fb.group({
      company: [null, [Validators.required]],
      street: ["", [Validators.required]],
      city: ["", [Validators.required]],
      state: ["", [Validators.required]],
      country: [null, [Validators.required]],
      zip: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5),
          Validators.pattern("^[0-9]*$"),
        ],
      ],
    })
  }

  addAddressFormToParentForm(addressForm: FormGroup): void {
    this.parentForm.addControl("address", addressForm)
  }

  get zip() {
    return this.address.get("zip")
  }

  getCountry() {
    this.country$ = this.countryService.getCountryList()
  }

  onCountryChange($event) {
    console.log($event.name)
  }
}
