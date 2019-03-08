import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { AddressFormComponent } from "./address-form/address-form.component"

const declarations = [AddressFormComponent]

@NgModule({
  declarations: declarations,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: declarations,
})
export class SharedModule {}
