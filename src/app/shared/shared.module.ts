import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { AddressFormComponent } from "./address-form/address-form.component"

@NgModule({
  declarations: [AddressFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [AddressFormComponent],
})
export class SharedModule {}
